import { Component, OnInit } from '@angular/core';


interface Destinos{
  imagen: string;
  titulo: string;
  subtitulo: string;
  
  redirectTo: string;
}

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  destinos: Destinos[] = [ 
    {
      imagen: 'assets/img/destinos/arica.jpg',
      titulo: 'Arica',
      subtitulo: ' Vestigios históricos y cultura ancestral',   
      redirectTo: 'https://chile.travel/donde-ir/norte-desierto-atacama/arica',
    },
    {
      imagen: 'assets/img/destinos/iquique.jpg',
      titulo: 'Iquique',
      subtitulo: 'Sol, playa, tradición y modernidad',
      redirectTo: 'https://chile.travel/donde-ir/norte-desierto-atacama/iquique',
    },
    {
      imagen: 'assets/img/destinos/rapa.png',
      titulo: 'Rapa Nui',
      subtitulo: 'Una isla que es enigma y fascinación',
      redirectTo: 'https://chile.travel/donde-ir/rapa-nui',
    },
    {
      imagen: 'assets/img/destinos/spedro.jpg',
      titulo: 'San Pedro de Atacama',
      subtitulo: 'La capital arqueológica de chile ',
      redirectTo: 'https://chile.travel/donde-ir/norte-desierto-atacama/san-pedro-atacama',
    },  
    {
      imagen: 'assets/img/destinos/valdivia.jpg',
      titulo: 'Valdivia',
      subtitulo: 'Gastronomía, modernidad y naturaleza',
      redirectTo: 'https://chile.travel/donde-ir/sur-lagos-volcanes/valdivia-y-corral',
    },
    {
      imagen: 'assets/img/destinos/valpo.jpg',
      titulo: 'Valparaíso',
      subtitulo: 'Todo el encanto de la joya del Pacífico',
      redirectTo: 'https://chile.travel/donde-ir/centro-santiago-valparaiso/valparaiso',
    },
    {
      imagen: 'assets/img/destinos/chiloe.jpg',
      titulo: 'Isla de Chiloé',
      subtitulo: 'Naturaleza, patrimonio y gastronomía',
      redirectTo: 'https://chile.travel/donde-ir/sur-lagos-volcanes/chiloe',
    },  
  ];

  constructor() { }

  ngOnInit() {
  }

}
