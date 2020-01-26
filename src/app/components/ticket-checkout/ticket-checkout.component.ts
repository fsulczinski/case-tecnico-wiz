import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-ticket-checkout',
    templateUrl: './ticket-checkout.component.html',
    styleUrls: ['./ticket-checkout.component.scss']
})
export class TicketCheckoutComponent implements OnInit {

    checkoutForm: FormGroup;
    filmeSelecionado: any;

    constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.buildForm();
        console.log(this.checkoutForm);

        this.filmeSelecionado = this.route.snapshot.params.id;
        console.log(this.filmeSelecionado);
    }

    buildForm() {
        this.checkoutForm = this.fb.group({
            primeiroNome: this.fb.control('', [Validators.required]),
            ultimoNome: this.fb.control('', [Validators.required]),
            cpf: this.fb.control('', [Validators.required]),
            dtNascimento: this.fb.control('', [Validators.required]),
            email: this.fb.control('', [Validators.required]),
            addAcompanhante: this.fb.control(''),
            primeiroNomeAcompanhante: this.fb.control('', [Validators.required]),
            ultimoNomeAcompanhante: this.fb.control('', [Validators.required]),
            cpfAcompanhante: this.fb.control('', [Validators.required]),
            dtNascimentoAcompanhante: this.fb.control('', [Validators.required]),
            emailAcompanhante: this.fb.control('', [Validators.required]),
            addAcompanhanteAcompanhante: this.fb.control(''),
        });
    }

}
