import { Component } from '@angular/core';

@Component({
  selector: 'informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
  constructor(){}
  ngOnInit(): void{}
  deducibles=[{name:'Vivienda',img:"/assets/casa.jpeg"},{name:'Salud',img:"/assets/educacion.jpeg"},{name:'Educacion',img:"/assets/salud.jpeg"}];
  informacion(){
    alert('Esta es información adicional');
  }
  borrarDeducible(deducible: any){
    for (let i = 0; i < this.deducibles.length; i++) {
      if (deducible==this.deducibles[i]) {
        this.deducibles.splice(i,1);
      }
      
    }
  }
}
