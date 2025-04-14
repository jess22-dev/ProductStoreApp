import { Component } from '@angular/core';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent {
  producto = {
    id: 1,
    nombre: 'Audifonos',
    descripcion: 'Soundcore Anker Life Q30 Audífonos Inalámbricos Diadema, Bluetooth, Cancelación de Ruido Multimodo, Alta Resolución, 40H, Carga Rápida, Almohadillas Suaves',
    imagen: '.assets/images/audifonos.jpg',
    precio: 100
  };

  agregarAlcarrito(){
    alert('Producto agregado al carrito');
  }

  
}
