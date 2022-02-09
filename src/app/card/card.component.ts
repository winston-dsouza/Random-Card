import { Component, Input, OnInit } from '@angular/core';
import { faEnvelope,faMapMarkedAlt,faPhone,faDatabase}  from '@fortawesome/free-solid-svg-icons'
import { AppComponent } from '../app.component';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  faEnvelope =faEnvelope;
  faMapMarkedAlt=faMapMarkedAlt;
  faPhone =faPhone;
  faDatabase = faDatabase;

  


  @Input() user:any =null;
  constructor(private userService:UserService,private appComponent:AppComponent) { }

  ngOnInit(): void {
  }
  reload(){
    this.appComponent.ngOnInit()
  }

}
