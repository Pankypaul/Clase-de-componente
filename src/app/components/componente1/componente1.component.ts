import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1', // Con este nombre app-componente1 puedo llamar a la etiqueta
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.scss'],
})
export class Componente1Component  implements OnInit {
  comuna: string = ""; //Debo crear la variable para que no tire error.
  //Libreria @Input()

  @Input() titulo:string = ""; //Debe ser indentico al nombre, si se llama edad, delclaramos que es edad.
  @Input() datos:any;

  constructor() { }

  ngOnInit() {}

}
