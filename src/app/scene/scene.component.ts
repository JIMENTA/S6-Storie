import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {
  @Input() story:string[];
 
  currentSentence:string;
  counter=0;
  
  e:Event
  next(event:Event){
    if(this.counter >= 0 && this.counter < this.story.length-1){
      this.counter++;
    }
    this.currentSentence = this.story[this.counter];
   
  }
 
  prev(event:Event){
    if(this.counter > 0 ){
      this.counter--;
    }  
    this.currentSentence = this.story[this.counter];
  }
  



  constructor() { 
   
  }

  ngOnInit(): void {
    this.currentSentence= this.story[0];
  }

}
