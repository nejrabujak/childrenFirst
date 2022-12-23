import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Route} from '../../constants/route.constants';
import {Message} from '../../models/message.model';
import {MessageService} from '../../services/message.service';


@Component({
  selector: 'message-container',
  templateUrl: './message-container.component.html',
})
export class MessageContainerComponent implements OnInit {

  public message: Message | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void { }

  handleSaveMessage(message: Message): void {
    this.messageService.create(message).subscribe(() => {
      this.router.navigate([Route.MESSAGES]);
    });
    }
}
