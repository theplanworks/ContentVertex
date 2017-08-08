import { Validation } from 'bunnyjs/src/Validation';

export default class {
    constructor()
    {
        this.forms = document.querySelectorAll('form');

        if(this.forms)
        {

            this.forms.forEach((form, index) => {

                this.setupValidation(form);

            });

        }
    }


    setupValidation(form)
    {
        Validation.init(form);
    }
}