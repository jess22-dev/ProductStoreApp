import { Component} from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productos = [
    { id: 1, nombre: 'Audifonos', precio: 100, imagen: 'assets/images/audifonos.jpg' },
    { id: 2, nombre: 'SmartWacht', precio: 200, imagen: 'assets/images/smartwacht.jpg' },
    { id: 3, nombre: 'Camara', precio: 300, imagen: 'assets/images/camara.jpeg' }
  ];
}
