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
    acompanhanteForm: FormGroup;
    filmeSelecionado: any;
    estadoSelecionado: string;
    paisSelecionado: string;
    estados: string[] = ESTADOS;

    constructor(
        private fb: FormBuilder,
        private cepService: CepService,
        private orderService: OrderService) {
    }

    ngOnInit() {
        this.buildForms();
        this.filmeSelecionado = window.history.state.movie;
    }

    buildForms() {
        this.checkoutForm = this.fb.group({
            primeiroNome: this.fb.control('', [Validators.required]),
            ultimoNome: this.fb.control('', [Validators.required]),
            cpf: this.fb.control('', [Validators.required]),
            dtNascimento: this.fb.control('', [Validators.required]),
            email: this.fb.control('', [Validators.required]),
            addAcompanhante: this.fb.control(''),
            cep: this.fb.control('', [Validators.required]),
            endereco: this.fb.control('', [Validators.required]),
            cidade: this.fb.control('', [Validators.required]),
            telefone: this.fb.control('', [Validators.required]),
        });

        this.acompanhanteForm = this.fb.group({
            primeiroNomeAcompanhante: this.fb.control('', [Validators.required]),
            ultimoNomeAcompanhante: this.fb.control('', [Validators.required]),
            cpfAcompanhante: this.fb.control('', [Validators.required]),
            dtNascimentoAcompanhante: this.fb.control('', [Validators.required]),
            emailAcompanhante: this.fb.control('', [Validators.required]),
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

    getSelectedEstado(ev: any) {
        this.estadoSelecionado = ev;
    }

    getSelectedPais(ev: any) {
        this.paisSelecionado = ev;
    }

    isFormValid() {
        if (this.checkoutForm.get('addAcompanhante').value === true && !this.acompanhanteForm.valid) {
            return false;
        }
        return this.checkoutForm.valid;
    }

    enviarReserva() {
        let order = this.checkoutForm.value;
        order.pais = this.paisSelecionado;
        order.estado = this.estadoSelecionado;
        order.filmeId = window.history.state.movie.id;
        if (this.checkoutForm.get('addAcompanhante').value === true) {
            order = { ...order, ...this.acompanhanteForm.value };
        }
        this.orderService.postOrder(order);
    }
}
