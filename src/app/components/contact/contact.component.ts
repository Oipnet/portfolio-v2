import { Component, OnInit } from '@angular/core';
import { Message } from '../../interfaces/message.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public message: Message;
  constructor() { }

  ngOnInit() {
  }

}
