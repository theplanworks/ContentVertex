<?php

namespace thePLAN\ContentVertex\Http\Forms;

use Kris\LaravelFormBuilder\Form;

class SiteForm extends Form
{
    public function buildForm()
    {
        $this->add('name', 'text')
            ->add('slug', 'text')
            ->add('domains', 'collection', [
                'type' => 'form',
                'options' => [
                    'class' => DomainForm::class,
                    'label' => false
                ]
            ])
            ->add('submit', 'submit', ['label' => 'Save', 'attr' => ['class' => 'btn btn-default']]);
    }
}
