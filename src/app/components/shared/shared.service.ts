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

  private _tickets = [
    {
      id: 1,
      name: '5 ordenes de tacos',
      description: '5 ordenes de tacos en la hacienda zona norte',
      cliente: 'La hacienda',
    },
    {
      id: 2,
      name: '10 kilos de tortillas',
      description: '10 kilos de tortillas de maiz',
      cliente: 'tortilleria lucas'
    },
    {
      id: 3,
      name: 'branding completo',
      description: 'desarrollo de imagen corporativa',
      cliente: 'marketing cerouno'
    }
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
      author: "Lucia Rosas",
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

  public getProfile(id): any {
    return this.profiles[id];
  }

  private profiles = [
    {
      ...this.feeds[0],
      telefono: '8446575657',
      email: 'laura@gmail.com',
      fechaNacimiento: 'Diciembre 7',
      socioDesde: 'Abril 2020',
      ultimaVenta: 'Mayo 2020',
      tickets: [...this._tickets]
    },
    {
      ...this.feeds[1],
      telefono: '84465453657',
      email: 'juan@gmail.com',
      fechaNacimiento: 'Diciembre 8',
      socioDesde: 'Abril 2020',
      ultimaVenta: 'Mayo 2020',
      tickets: [...this._tickets]
    },
    {
      ...this.feeds[2],
      telefono: '8445453657',
      email: 'lucia@gmail.com',
      fechaNacimiento: 'Diciembre 9',
      socioDesde: 'Abril 2020',
      ultimaVenta: 'Mayo 2020',
      tickets: [...this._tickets]
    },
    {
      ...this.feeds[3],
      telefono: '844644657',
      email: 'miguel@gmail.com',
      fechaNacimiento: 'Diciembre 10',
      socioDesde: 'Abril 2020',
      ultimaVenta: 'Mayo 2020',
      tickets: [...this._tickets]
    },
    {
      id: 5,
      telefono: '84465453657',
      email: 'jaime@gmail.com',
      fechaNacimiento: 'Diciembre 27',
      socioDesde: 'Abril 2020',
      thumbnailImg: "user_2.jpg",
      ultimaVenta: 'Mayo 2020',
      coverImg: "cover.jpg",
      author: "Jaime Martinez",
      tickets: [...this.personalInfo.tickets]
    }
  ];

  public addHistorial(data): void {
    this._historial.push(data);
  }
  public getHistorial(): any {
    return this._historial;
  }

  private _historial = [
    {
      id: 1,
      hash: '3c31b50c19e2429f7aef952093cf84cd',
      timestamp: '2017-10-19',
      owner: 'Jaime Martinez'
    },
    {
      id: 2,
      hash: '3c31dsfdd9e2429f7aef952093cf84cd',
      timestamp: '2017-10-19',
      owner: 'Raul Perez'
    }
  ]
}
