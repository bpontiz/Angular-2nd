import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  alumnos: {nombre: string, nota: number}[] = [
    {nombre: "Nikola Testa", nota: 0.6531},
    {nombre: "Merceditas Benz", nota: 0.9801},
    {nombre: "Victor Vagen", nota: 0.2333},
    {nombre: "René", nota: 0.1781},
    {nombre: "Mitsu Bici", nota: 0.0873},
    {nombre: "Fierari", nota: 0.6753}
  ]
}
