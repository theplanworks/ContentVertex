<?php

namespace thePLAN\ContentVertex\Http\Forms;

use Kris\LaravelFormBuilder\Form;

class DomainForm extends Form
{
    public function buildForm()
    {
        $this->add('domain', 'text')
            ->add('is_prod', 'select', [
                'choices' => [true => 'True', false => 'False']
            ])
            ->add('id', 'hidden');
    }
}
