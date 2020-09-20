import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from '../../Service/service.service';
import { Persona } from '../Modelo/Persona';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  personas:Persona[];

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(){
    this.service.getPersonas()
    .subscribe(data=>{
      this.personas=data;
    })
  }

}
