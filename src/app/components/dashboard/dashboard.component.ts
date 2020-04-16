import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit {
  feeds = [
    {
      id: 1,
      name: "Reparación de tuberías",
      date: "2 h",
      description: "Servicio de Detección, Reparación, Mantenimiento y más. Tecnicos Altamente Capacitados, Soluciones Definitivas. Plomeros y Electricistas Urgentes.",
      stock: 3,
      thumbnailImg: "user_1.jpg",
      serviceImage: "service_1.jpg",
      endDate: "10/12/2020",
      type: "servicio",
      author: "Laura Perez"
    },
    {
      id: 2,
      name: "Fruteria De la Rosa",
      date: "1 h",
      description: "El delicioso antojo saludable",
      stock: 2,
      thumbnailImg: "user_2.jpg",
      serviceImage: "service_2.jpg",
      endDate: "8/12/2020",
      type: "producto",
      author: "Juan Perez"
    },
    {
      id: 3,
      name: "Comida para lleva la Costeña",
      date: "5 h",
      description: "Cabrito, Arrachera, Agujas y Tablitas. Casa Fundadora de la Auténtica Cocina Norestense.",
      stock: 3,
      thumbnailImg: "user_1.jpg",
      serviceImage: "service_3.jpg",
      endDate: "10/11/2020",
      type: "producto",
      author: "Laura Rosas"
    },
    {
      id: 4,
      name: "Arquitectura Ramirez",
      date: "1 h",
      description: "Ganarse la confianza del cliente sin importar las dimensiones del proyecto a realizar es indispensable, porque tan importante es el que quiere construir un muro como el que quiere construir un edificio.",
      stock: 2,
      thumbnailImg: "user_2.jpg",
      serviceImage: "service_4.jpg",
      endDate: "10/10/2020",
      type: "servicio",
      author: "Miguel Martinez"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
