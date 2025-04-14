import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  carrito = [
    { titulo: 'Audifonos', imagen: './assets/images/audifonos.jpg', precio: '100'},
    { titulo: 'Smartwacht', imagen: './assets/images/smartwacht.jpg', precio: '200'},
    { titulo: 'camara', imagen: './assets/images/camara.jpeg', precio: '250'},
    { titulo: 'discoduro', imagen: './assets/images/discoduro.jpeg', precio: '200'},
    { titulo: 'bocina', imagen: './assets/images/bocina.jpg', precio: '200'}
  ];

  Pagar(){
    alert('Pago exitoso');
  }

}
