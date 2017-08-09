<?php

namespace thePLAN\ContentVertex\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as Image;

class MediaController extends Controller
{
    private $filesystem;
    private $directory = '';

    public function __construct()
    {
        $this->filesystem = config('contentvertex.storage.disk');
    }

    public function files(Request $request)
    {
        $folder = $request->folder;
        if ($folder == '/') {
            $folder = '';
        }
        $dir = $this->directory.$folder;
        return Response::json([
            'name'          => 'files',
            'type'          => 'folder',
            'path'          => $dir,
            'folder'        => $folder,
            'items'         => $this->getFiles($dir),
            'last_modified' => 'asdf',
        ]);
    }

    public function newFolder(Request $request)
    {
        $new_folder = $request->new_folder;
        $success = false;
        $error = '';

        if (Storage::disk($this->filesystem)->exists($new_folder)) {
            $error = 'folder_exists_already';
        } elseif (Storage::disk($this->filesystem)->makeDirectory($new_folder)) {
            $success = true;
        } else {
            $error = 'error_creating_dir';
        }

        return compact('success', 'error');
    }

    // Delete File or Folder with 5.3
    public function delete_file_folder(Request $request)
    {
        $folderLocation = $request->folder_location;
        $fileFolder = $request->file_folder;
        $type = $request->type;
        $success = true;
        $error = '';

        if (is_array($folderLocation)) {
            $folderLocation = rtrim(implode('/', $folderLocation), '/');
        }

        $location = "{$this->directory}/{$folderLocation}";
        $fileFolder = "{$location}/{$fileFolder}";

        if ($type == 'folder') {
            if (!Storage::disk($this->filesystem)->deleteDirectory($fileFolder)) {
                $error = 'error_deleting_folder';
                $success = false;
            }
        } elseif (!Storage::disk($this->filesystem)->delete($fileFolder)) {
            $error = 'error_deleting_file';
            $success = false;
        }

        return compact('success', 'error');
    }


    public function getAllDirs(Request $request)
    {
        $folderLocation = $request->folder_location;

        if (is_array($folderLocation)) {
            $folderLocation = rtrim(implode('/', $folderLocation), '/');
        }

        $location = "{$this->directory}/{$folderLocation}";

        return response()->json(
            str_replace($location, '', Storage::disk($this->filesystem)->directories($location))
        );
    }


    public function move_file(Request $request)
    {
        $source = $request->source;
        $destination = $request->destination;
        $folderLocation = $request->folder_location;
        $success = false;
        $error = '';

        if (is_array($folderLocation)) {
            $folderLocation = rtrim(implode('/', $folderLocation), '/');
        }

        $location = "{$this->directory}/{$folderLocation}";
        $source = "{$location}/{$source}";
        $destination = strpos($destination, '/../') !== false
            ? $this->directory.'/'.dirname($folderLocation).'/'.str_replace('/../', '', $destination)
            : "{$location}/{$destination}";

        if (!file_exists($destination)) {
            if (Storage::disk($this->filesystem)->move($source, $destination)) {
                $success = true;
            } else {
                $error = 'error_moving';
            }
        } else {
            $error = 'error_already_exists';
        }

        return compact('success', 'error');
    }

    public function rename_file(Request $request)
    {
        $folderLocation = $request->folder_location;
        $filename = $request->filename;
        $newFilename = $request->new_filename;
        $success = false;
        $error = false;

        if (is_array($folderLocation)) {
            $folderLocation = rtrim(implode('/', $folderLocation), '/');
        }

        $location = "{$this->directory}/{$folderLocation}";

        if (!Storage::disk($this->filesystem)->exists("{$location}/{$newFilename}")) {
            if (Storage::disk($this->filesystem)->move("{$location}/{$filename}", "{$location}/{$newFilename}")) {
                $success = true;
            } else {
                $error = 'error_moving';
            }
        } else {
            $error = 'error_may_exist';
        }

        return compact('success', 'error');
    }

    public function upload(Request $request)
    {
        try {
            $path = $request->file->store($request->upload_path, $this->filesystem);
            $success = true;
            $message = 'success_uploaded_file';
            $realPath = Storage::disk($this->filesystem)->getDriver()->getAdapter()->getPathPrefix().$path;
            Image::make($realPath)->orientate()->save();
        } catch (Exception $e) {
            $success = false;
            $message = $e->getMessage();
        }

        var_dump($path);

        $path = preg_replace('/^public\//', '', $path);

        return response()->json(compact('success', 'message', 'path'));
    }

    private function getFiles($dir)
    {
        $files = [];
        $storageFiles = Storage::disk($this->filesystem)->files($dir);
        $storageFolders = Storage::disk($this->filesystem)->directories($dir);

        foreach ($storageFiles as $file) {
            if (empty(pathinfo($file, PATHINFO_FILENAME)) && false) {
                $files[] = [
                    'name'          => strpos($file, '/') > 1 ? str_replace('/', '', strrchr($file, '/')) : $file,
                    'type'          => Storage::disk($this->filesystem)->mimeType($file),
                    'path'          => parse_url(Storage::disk($this->filesystem)->url($file))['path'],
                    'size'          => Storage::disk($this->filesystem)->size($file),
                    'last_modified' => Storage::disk($this->filesystem)->lastModified($file),
                ];
            } elseif (!empty(pathinfo($file, PATHINFO_FILENAME))) {
                $files[] = [
                    'name'          => strpos($file, '/') > 1 ? str_replace('/', '', strrchr($file, '/')) : $file,
                    'type'          => Storage::disk($this->filesystem)->mimeType($file),
                    'path'          => parse_url(Storage::disk($this->filesystem)->url($file))['path'],
                    'size'          => Storage::disk($this->filesystem)->size($file),
                    'last_modified' => Storage::disk($this->filesystem)->lastModified($file),
                ];
            }
        }

        foreach ($storageFolders as $folder) {
            $files[] = [
                'name'          => strpos($folder, '/') > 1 ? str_replace('/', '', strrchr($folder, '/')) : $folder,
                'type'          => 'folder',
                'path'          => Storage::disk($this->filesystem)->url($folder),
                'items'         => '',
                'last_modified' => '',
            ];
        }

        return $files;
    }

    // REMOVE FILE
    public function remove(Request $request)
    {
        try {
            // GET THE SLUG, ex. 'posts', 'pages', etc.
            $slug = $request->get('slug');

            // GET image name
            $image = $request->get('image');

            // GET record id
            $id = $request->get('id');

            // GET field name
            $field = $request->get('field');

            // GET THE DataType based on the slug
            $dataType = Voyager::model('DataType')->where('slug', '=', $slug)->first();

            // Check permission
            Voyager::canOrFail('delete_'.$dataType->name);

            // Load model and find record
            $model = app($dataType->model_name);
            $data = $model::find([$id])->first();

            // Check if field exists
            if (!isset($data->{$field})) {
                throw new Exception('field_does_not_exist', 400);
            }

            // Check if valid json
            if (is_null(@json_decode($data->{$field}))) {
                throw new Exception('invalid', 500);
            }

            // Decode field value
            $fieldData = @json_decode($data->{$field}, true);

            // Flip keys and values
            $fieldData = array_flip($fieldData);

            // Check if image exists in array
            if (!array_key_exists($image, $fieldData)) {
                throw new Exception('image_does_not_exist', 400);
            }

            // Remove image from array
            unset($fieldData[$image]);

            // Generate json and update field
            $data->{$field} = json_encode(array_values(array_flip($fieldData)));
            $data->save();

            return response()->json([
                'data' => [
                    'status'     => 200,
                    'message'    => 'image_removed',
                ],
            ]);
        } catch (Exception $e) {
            $code = 500;
            $message = 'internal_error';

            if ($e->getCode()) {
                $code = $e->getCode();
            }

            if ($e->getMessage()) {
                $message = $e->getMessage();
            }

            return response()->json([
                'data' => [
                    'status'    => $code,
                    'message'   => $message,
                ],
            ], $code);
        }
    }

}