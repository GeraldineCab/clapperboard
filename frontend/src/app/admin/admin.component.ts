import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public dataSource = [{ imagen:"", nombre: 'Cisne Negro', genero:'Drama', }, 
  { nombre: '500 días con ella', genero:'Romantica' }, 
  { nombre: 'Algo pasa con Mary',  genero:'Comedia', },
  { nombre: 'Amelie', genero:'Drama', }, 
  { nombre: 'Titanic', genero:'Romantica' }, 
  { nombre: 'Chicas malas',  genero:'Comedia', },
  { nombre: 'A los 13', genero:'Drama', }, 
  { nombre: 'No es romantico', genero:'Comedia' }, 
  { nombre: 'Scary movie',  genero:'Comedia', }
]
  tableColumns: string[] = ['imagen','pelicula', 'genero','accion']
  constructor() { }

  ngOnInit() {
  }

}
