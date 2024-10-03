import { Component } from '@angular/core';
import { StarComponent } from "../star/star.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [StarComponent,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  titelhome :string='conatct section';
  clolorHome :string ='#2c3e50';
  userName :string =''
  userAge !:number ;
  userEmail :string =''
  userPassword :string =''

}

