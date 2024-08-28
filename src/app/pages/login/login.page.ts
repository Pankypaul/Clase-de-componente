import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router'; /*importar re direccion*/ 
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  comuna:string = "Lo Espejo";
  edad:number = 25;
  nombre:string = "julian";

  arregloPersona: any=[
    {
      nombre: 'José',
      apellido: 'Muñoz',
      edad: 24

    },
    {
      nombre: 'Maria',
      apellido: 'Rodriguez',
      edad: 23

    },
    {
      nombre: 'Alma',
      apellido: 'Rara',
      edad: 22

    },

  ]

  datosP :any = {
    id: 1,
    dato:'Programación'

  }

  constructor(private router:Router,private alertController: AlertController,private toastController: ToastController  ) { }/*indenta la importacion */

  ngOnInit() {
  }
  /* redireccionar*/ 
  irPagina(){

    /*ejemplo contexto  "ojala no sea la misma variable es opcional solo envia una por cada redireccion"*/
  let  navigationextras:NavigationExtras ={

    state:{
      com:this.comuna,
      ed : this.edad,
      nom: this.nombre
    }
  
  }

    //crear el codigo dque quiera de la logica
    //this.presentAlert();
    this.presentToast('bottom');
    this.router.navigate(['/agregar'],navigationextras);
 /* fin ejemplo contexto*/
  }
  
  // Alerta intrusiva (El usuario interatua con el)
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Soy una alerta intrusiva',
      subHeader: 'Soy un subtitule Bienvenido a la página del login',
      message: 'Bienvenido a la página del login',
      buttons: ['ok'],
    });

    await alert.present();
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Bienvenido al apartado de agregar',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

  





}
