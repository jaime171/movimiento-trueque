import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private _isLoadded = false;
  public setIsLoadded(value): void {
    this._isLoadded = value;
  }
  public getIsLoadded(): boolean {
    return this._isLoadded;
  }

  public getProperty(property): any {
    return this.personalInfo[property]
  }

  public getTips(index): string {
    return this.tips[index];
  }

  private tips = [
    'Recuerda que puedes utilizar tus tickets guardados para generar mas valor a tu propuesta',
    'Los servicios de lavado de carros se estan intercambiando muy seguido',
    'Tus ventas estan algo bajas, ¿Y si ofreces algun otro servicio a cambio?'
  ]


  private personalInfo = {
    name: 'Jaime Martinez',
    tickets: [
      {
        id: 1,
        name: 'lavado de carros',
        description: 'lavado de carros en Typhon',
        cliente: 'Tyhpo carwash'
      },
      {
        id: 2,
        name: 'Reparacion de computadora express',
        description: 'reparacion de algun equipo de computo o farmateo',
        cliente: 'hospital de computadoras'
      }
    ]
  };

  public feeds = [
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
      author: "Laura Perez",
      coverImg: "cover.jpg"
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
      author: "Juan Perez",
      coverImg: "cover.jpg"
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
      author: "Laura Rosas",
      coverImg: "cover.jpg"
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
      author: "Miguel Martinez",
      coverImg: "cover.jpg"
    }
  ];
}
