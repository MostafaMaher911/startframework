import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [StarComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  modelSrc :string=''
  
  PortfolioScr:string[]=[
    './assets/poert1.png',
    './assets/port2.png',
    './assets/port3.png',
    
    './assets/poert1.png',
    './assets/port2.png',
    './assets/port3.png',
  ]

  flag:boolean=true;



  titelhome :string='portfolio component';
  clolorHome :string =' #2C3E50 ' ;

hideWindow(element:EventTarget|null,img:HTMLImageElement):void
{
  if (element==img)return; 
    this.flag=true;
  

}

  

}



