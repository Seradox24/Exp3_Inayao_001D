import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MenuController } from '@ionic/angular';
import { using } from 'rxjs';


//interfaces
interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

interface SlideCard{
  imagen: string;
  titulo: string;
  subtitulo: string;
  texto: string;
  redirectTo: string;
}

interface Slide1{
  imagen: string;
  titulo: string;
  redirectTo: string;
}

interface Destinos{
  imagen: string;
  titulo: string; 
  redirectTo: string;
}
//fin interfaces





@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private AuthService: AuthService,private menuCtrl:MenuController) { }
  
  uidUsr: string;

  ngOnInit() {
   
  }

  getUser(){
    this.AuthService.getUserLogged().subscribe(res=>{
      console.log(res?.displayName)
    })

  }

  async getUid(){
   
      return console.log("else",this.uidUsr)

    
  }
  
  logOut(){
    this.AuthService.logOut();

  }

 

  mostrarMenu(){
    this.menuCtrl.open('first')
  }
  cerrarMenu(){
    this.menuCtrl.close('first')
  }



//slides y otros 
cardslide: SlideCard[] = [ 
  {
    imagen: 'assets/img/slide/slide13.svg',
    titulo: 'Comienza tu aventura',
    subtitulo: ' ',
    texto: 'Planea tu viaje y decide tu destino con la ayuda de TravelGo',
    redirectTo: '/servicios',
  },
  {
    imagen: 'assets/img/slide/slide2.svg',
    titulo: 'Explora',
    subtitulo: '',
    texto: 'Ten la mayor cantidad de información para que tus vacaciones o escapadas sean increíbles',
    redirectTo: '/servicios',
  },
  {
    imagen: 'assets/img/slide/slide3.svg',
    titulo: 'Crea un grupo',
    subtitulo: '',
    texto: 'Conecta con otros viajeros para crear nuevas amistades y experiencias',
    redirectTo: '/servicios',
  },
  {
    imagen: 'assets/img/slide/slide8.svg',
    titulo: 'Misiones y Retos',
    subtitulo: '',
    texto: 'Completa misiones, gana experiencia y desbloquea premios al subir de nivel',
    redirectTo: '/servicios',
  },    
];

slide1: Slide1[] = [
  {
  imagen: 'assets/img/slide1/banner_1.jpg',
  titulo: '',
  redirectTo: 'https://chile.travel/',
  },
  {
  imagen: 'assets/img/slide1/banner_2.jpg',
  titulo: '',
  redirectTo: 'https://ingresorapanui.interior.gob.cl',
  },
  {
  imagen: 'assets/img/slide1/banner_3.jpg',
  titulo: '',
  redirectTo: 'https://chileestuyo.cl/wp-content/uploads/2019/09/DECALOGO-BUEN-TURISTA-RAPA-NUI-V3.pdf',
  },
  {
    imagen: 'assets/img/slide1/banner_4.jpg',
    titulo: '',
    redirectTo: 'https://www.sernatur.cl/operatividad-y-recomendaciones-de-las-regiones-del-pais/',
  },    
  {
    imagen: 'assets/img/slide1/banner_5.png',
    titulo: '',
    redirectTo: 'https://chileestuyo.cl/',
  },              
];

destinos: Destinos[] = [ 
  {
    imagen: 'assets/img/slide2/arica.jpg',
    titulo: 'Arica',   
    redirectTo: '/servicios',
  },
  {
    imagen: 'assets/img/slide2/iquique.jpg',
    titulo: 'Iquique',
    redirectTo: '/servicios',
  },
  {
    imagen: 'assets/img/destinos/rapa.png',
    titulo: 'Rapa Nui',
    redirectTo: '/servicios',
  },
  {
    imagen: 'assets/img/slide2/valdivia.jpg',
    titulo: 'Valdivia',
    redirectTo: '/servicios',
  },
];
exp: Destinos[] = [ 
  {
    imagen: 'assets/img/exp/astro.jpg',
    titulo: 'Astroturismo',   
    redirectTo: 'https://chile.travel/que-hacer/astroturismo',
  },
  {
    imagen: 'assets/img/exp/aven.png',
    titulo: 'Aventura y Deportes',
    redirectTo: 'https://chile.travel/que-hacer/aventura-y-deporte',
  },
  {
    imagen: 'assets/img/exp/cruce.jpg',
    titulo: 'Cruceros y Navegación',
    redirectTo: 'https://chile.travel/que-hacer/cruceros-y-navegaciones',
  },
  {
    imagen: 'assets/img/exp/playas.png',
    titulo: 'playas',
    redirectTo: 'https://chile.travel/que-hacer/playas',
  },
]




















//slide
public slideOpts2 = {
  slidesPerView: 1.8,
  spaceBetween:20,
}
public slideOpts3 = {
  slidesPerView: 2.4,
  spaceBetween:20,
  
}
public slideOpts4 = {
  slidesPerView: 1.2,
  spaceBetween:20,
  
}
public slideOpts = {
  slidesPerView: 1.2,
  spaceBetween: 50,
  centeredSlides: true,
  initialSlide: 2,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  on: {
    beforeInit() {
      const swiper = this;

      swiper.classNames.push(`${swiper.params.containerModifierClass}coverflow`);
      swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);

      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    setTranslate() {
      const swiper = this;
      const {
        width: swiperWidth, height: swiperHeight, slides, $wrapperEl, slidesSizesGrid, $
      } = swiper;
      const params = swiper.params.coverflowEffect;
      const isHorizontal = swiper.isHorizontal();
      const transform$$1 = swiper.translate;
      const center = isHorizontal ? -transform$$1 + (swiperWidth / 2) : -transform$$1 + (swiperHeight / 2);
      const rotate = isHorizontal ? params.rotate : -params.rotate;
      const translate = params.depth;
      // Each slide offset from center
      for (let i = 0, length = slides.length; i < length; i += 1) {
        const $slideEl = slides.eq(i);
        const slideSize = slidesSizesGrid[i];
        const slideOffset = $slideEl[0].swiperSlideOffset;
        const offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

        let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
        let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
        // var rotateZ = 0
        let translateZ = -translate * Math.abs(offsetMultiplier);

        let translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
        let translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

        // Fix for ultra small values
        if (Math.abs(translateX) < 0.001) translateX = 0;
        if (Math.abs(translateY) < 0.001) translateY = 0;
        if (Math.abs(translateZ) < 0.001) translateZ = 0;
        if (Math.abs(rotateY) < 0.001) rotateY = 0;
        if (Math.abs(rotateX) < 0.001) rotateX = 0;

        const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

        $slideEl.transform(slideTransform);
        $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

      }

      // Set correct perspective for IE10
      if (swiper.support.pointerEvents || swiper.support.prefixedPointerEvents) {
        const ws = $wrapperEl[0].style;
        ws.perspectiveOrigin = `${center}px 50%`;
      }
    },
    setTransition(duration) {
      const swiper = this;
      swiper.slides
        .transition(duration)
        .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
        .transition(duration);
    }
  }
}


}
