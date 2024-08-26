import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  comuna: string= ""; 
  nombre: string= "";
  edad!: number;

  constructor(private router:Router, private activateroute:ActivatedRoute) {
  //subscirbirnos a la lectura de los parametros
    this.activateroute.queryParams.subscribe(param =>{
      //valido si viene o no información en la ruta
      
      if(this.router.getCurrentNavigation()?.extras.state){
        this.edad =this.router.getCurrentNavigation()?.extras?.state?.['ed'];
        this.comuna =this.router.getCurrentNavigation()?.extras?.state?.['com'];
        this.nombre =this.router.getCurrentNavigation()?.extras?.state?.['nom'];
      }
    })

   }

  ngOnInit() {
  }

}
