<template>
    <div class="container">
        <div class="columns">
            <div class="column is-3">
                <div class="field has-addons">
                    <p class="control">
                        <button class="button is-primary">
                    <span class="icon is-small">
                        <i class="fa fa-upload"></i>
                    </span>
                            <span id="upload">Upload</span>
                        </button>
                    </p>
                    <p class="control">
                        <button @click="newDialogFolder" class="button is-primary">
                    <span class="icon is-small">
                        <i class="fa fa-folder-o"></i>
                    </span>
                            <span>New Folder</span>
                        </button>
                    </p>
                </div>
            </div>
            <div class="column">
                <div class="field has-addons">
                    <p class="control">
                        <a class="button">
                            <span class="icon is-small">
                                <i class="fa fa-share"></i>
                            </span>
                            <span>Move</span>
                        </a>
                    </p>
                    <p class="control">
                        <a class="button">
                            <span class="icon is-small">
                                <i class="fa fa-i-cursor"></i>
                            </span>
                            <span>Rename</span>
                        </a>
                    </p>
                    <p class="control">
                        <button @click="confirmDelete" class="button">
                            <span class="icon is-small">
                                <i class="fa fa fa-trash-o"></i>
                            </span>
                            <span>Delete</span>
                        </button>
                    </p>
                </div>
            </div>
        </div>

        <div id="uploadPreview" style="display:none;"></div>
        <nav class="breadcrumb has-arrow-separator" aria-label="breadcrumbs">
            <ul>
                <li>
                    <button @click="loadFiles('/')" class="button is-link">Media Library</button>
                </li>
                <li v-for="folder in folders">
                    <button class="button is-link" @click="changeFolder(folder)">{{folder}}</button>
                </li>
            </ul>
        </nav>
        <div columns>
            <div class="column is-8">
                <div class="columns is-multilin">
                    <div class="column is-2" v-for="(item, index) in files.items" @click="selectMedia(item)">
                        <div class="card">
                            <div class="card-content">
                                <div class="media">
                                    <template v-if="item.type.includes('image')">
                                        <div class="media-left">
                                            <figure class="image is-128x128">
                                                <img :src="item.path" alt="Image">
                                            </figure>
                                        </div>

                                    </template>
                                    <template v-else-if="item.type.includes('video')">
                                        <i class="icon voyager-video"></i>
                                    </template>
                                    <template v-else-if="item.type.includes('audio')">
                                        <i class="icon voyager-music"></i>
                                    </template>
                                    <template v-else-if="item.type == 'folder'">
                                        <div class="media-left">
                                            <div class="block has-text-centered">
                                                <b-icon size="is-large" icon="folder"></b-icon>
                                            </div>
                                        </div>
                                        <div class="media-content">
                                            <p class="title is-4">{{item.name}}</p>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <i class="icon voyager-file-text"></i>
                                    </template>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div v-if="selectedMedia" class="card">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img :src="selectedMedia.path" alt="Image">
                        </figure>
                    </div>
                    <div class="card-content">
                        <div class="content">
                            <strong>Path: </strong> {{selectedMedia.path}}
                            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                            <a>#css</a> <a>#responsive</a>
                            <br>
                            <small>11:09 PM - 1 Jan 2016</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Dropzone from 'dropzone';
    export default {
        data() {
            return {
                files: {},
                folders: [],
                directories: [],
                selectedMedia: null
            }
        },
        mounted() {
            this.loadFiles('/');
            this.loadDirectories();

            var uploader = new Dropzone("span#upload", {
                url: '/content-vertex/api/media/upload',
                previewsContainer: '#uploadPreview',
                sending: (file, xhr, formData) => this.dzSending(file, xhr, formData),
                success: (e, res) => this.dzSuccess(e, res),
                queuecomplete: () => this.dzComplete()
            });


        },
        methods: {
            loadFiles(path) {

                if(path !== '/') {
                    path = `/${path.join('/')}`;
                } else {
                    path = '/';
                    this.folders = [];
                }


                this.$http.post('/content-vertex/api/media/files', {folder: path}).then(response => {
                    this.files = response.data;
                });
            },
            loadDirectories() {

                this.$http.get('/content-vertex/api/media/directories').then(response => {
                    this.directories = response.data;
                });
            },
            newDialogFolder() {
                this.$dialog.prompt({
                    message: 'Folder Name',
                    inputMaxlength: 20,
                    inputPlaceholder: 'folder_name',
                    onConfirm: (value) => this.createNewFolder(value)
                })
            },
            createNewFolder(value) {
                let path = this.files.path + '/' + value;

                this.$http.post('/content-vertex/api/media/new-folder/', {new_folder: path}).then(response => {
                    this.loadFiles(this.folders);
                })
            },
            selectMedia(item) {
                if(item.type === 'folder') {
                    this.folders.push(item.name);
                    this.loadFiles(this.folders);
                } else {
                    this.selectedMedia = item;
                }
            },
            changeFolder(folder) {
                //remove everything forward in the array
                let index = this.folders.indexOf(folder);
                this.folders.length = (index + 1);
                this.loadFiles(this.folders);
            },
            dzSending(file, xhr, formData) {
                let token = document.head.querySelector('meta[name="csrf-token"]');
                formData.append("_token", token.content);
                formData.append('upload_path', this.files.path);
            },
            dzSuccess(e, res) {

            },
            dzComplete() {
                this.loadFiles(this.folders);
            }
        }
    }
</script>