import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CepService } from '../../services/cep/cep.service';
import { ESTADOS } from '../../Util/Estados';
import { OrderService } from '../../services/order/order.service';

@Component({
    selector: 'app-ticket-checkout',
    templateUrl: './ticket-checkout.component.html',
    styleUrls: ['./ticket-checkout.component.scss']
})
export class TicketCheckoutComponent implements OnInit {

    checkoutForm: FormGroup;
    filmeSelecionado: any;
    estados: string[] = ESTADOS;

    constructor(
        private fb: FormBuilder,
        private cepService: CepService,
        private orderService: OrderService) {
    }

    ngOnInit() {
        this.buildForm();
        this.filmeSelecionado = window.history.state.movie;
    }

    buildForm() {
        this.checkoutForm = this.fb.group({
            primeiroNome: this.fb.control('', [Validators.required]),
            ultimoNome: this.fb.control('', [Validators.required]),
            cpf: this.fb.control('', [Validators.required]),
            dtNascimento: this.fb.control('', [Validators.required]),
            email: this.fb.control('', [Validators.required]),
            addAcompanhante: this.fb.control(''),
            primeiroNomeAcompanhante: this.fb.control(''),
            ultimoNomeAcompanhante: this.fb.control(''),
            cpfAcompanhante: this.fb.control(''),
            dtNascimentoAcompanhante: this.fb.control(''),
            emailAcompanhante: this.fb.control(''),
            cep: this.fb.control('', [Validators.required]),
            endereco: this.fb.control('', [Validators.required]),
            cidade: this.fb.control('', [Validators.required]),
            telefone: this.fb.control('', [Validators.required]),
        });
    }

    getAddress() {
        const cep = this.checkoutForm.get('cep').value;
        if (cep.length === 8) {
            this.cepService.getAdressByCep(cep).subscribe(r => {
                if (!r.erro) {
                    this.checkoutForm.controls.cep.setValue(r.cep);
                    this.checkoutForm.controls.endereco.setValue(r.logradouro);
                    this.checkoutForm.controls.cidade.setValue(r.localidade);
                }
            });
        }
    }

    getSelectedOption(ev: any) {
        console.log(ev);
    }

    enviarReserva() {
        this.orderService.postOrder(this.checkoutForm.value);
    }
}
