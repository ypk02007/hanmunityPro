import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { TempService } from '../../services/temp.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message: Object;
  content: String;

  constructor(
    private validateService: ValidateService, 
    private authService: AuthService,
    private tempService: TempService,
    private flashMessage: NgFlashMessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshMessage();
  }

  sendMessage() {
    const send = {
      content: this.content
    }
    
    this.authService.sendMessage(send).subscribe(data => {
      if(data.success) {
        this.refreshMessage();
      }
    })
  }

  refreshMessage() {
    this.authService.getMessage().subscribe(List => {
      this.message = List.message;
    }, 
    err => {
      console.log(err);
      return false;
    });
  }
}
