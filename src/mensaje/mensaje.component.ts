import { Component,Input,Output, OnInit,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  standalone: true,
  styleUrls: ['./mensaje.component.css'],
  template: `
    <button (click)="sendMessage()">Enviar mensaje al padre</button>
  `
})
export class MensajeComponent implements OnInit{
  
  @Input() name = 'Kevin'
  constructor() { }
  @Output() messageEvent = new EventEmitter<string>(); 
  
  ngOnInit() {
  }
  sendMessage(){
    this.messageEvent.emit('Este es un mensaje enviado desde el  MensajeComponent.ts')
  }

}