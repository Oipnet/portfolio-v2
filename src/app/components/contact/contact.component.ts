import { Component, OnInit } from '@angular/core';
import { Message } from '../../interfaces/message.interface';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public message: Message = {
    sender: '',
    subject: '',
    message: ''
  };

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit() {

  }

  public sendMessage(event) {
    event.preventDefault();
    
    this.portfolioService.sendMessage(this.message).subscribe((message: Message) => {
      console.log('message sended');
    });
  }

}
