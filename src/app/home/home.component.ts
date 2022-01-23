import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  show:boolean = false;

  story: string[];
  
 constructor(){
 
  this.story = [

    "Nuestro héroe estaba flotando por el espacio sideral cuando a lo lejos divisó una nave espacial",
  
    "Sentía curiosidad por el interior de la nave y se puso a inspeccionarla. Llegó a una sala con dos puertas.",
  
    "El héroe decidió atravesar la puerta que le llevaba a casa",
  
    "Mientras tanto, otras heroes no tuvieron tanta suerte en su elección..."
  
  ]
  
}


  ngOnInit(): void {
  }

}
