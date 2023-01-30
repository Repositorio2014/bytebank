import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransfrir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router){}

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.service.adiciona(valorEmitir)
    .subscribe(resultado => {
      console.log(resultado);
      this.limparCampo();
      this.router.navigateByUrl('extrato')
    },
    error => console.error(error));

    //this.limparCampo();
  }

  limparCampo(){
    this.valor = 0;
    this.destino = 0;
  }
}
