import {Component, OnInit} from '@angular/core';
import {Message} from '../../models/message.model';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MessageProperty} from '../../models/message-property.enum';
import {Router} from '@angular/router';
import {PageService} from '../../services/page.service';
import {Route} from '../../constants/route.constants';
import {PageName} from '../../models/page-name.enum';
import {BaseComponent} from '../common/base/base.component';
import {MessageService} from '../../services/message.service';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent extends BaseComponent implements OnInit{

  message: Message | undefined;
  public route = Route;

  public form!: FormGroup;
  public messageProperty = MessageProperty;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private pageService: PageService,
    private messageService: MessageService
  ) {
    super();
    super.ngOnInit();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [MessageProperty.id]: [this.message?.[MessageProperty.id] || ''],
      [MessageProperty.name]: [this.message?.[MessageProperty.name] || ''],
      [MessageProperty.email]: [this.message?.[MessageProperty.email] || ''],
      [MessageProperty.note]: [this.message?.[MessageProperty.note] || '']
    });
    this.enterPage();
  }

  public submit(): void {
    if (!this.form.valid) {
      return;
    }
    this.handleSaveMessage(this.form.value);
    this.resetForm();
  }

  private resetForm(): void {
    this.form.reset();
  }

  protected enterPage(): void {
    this.pageService.enter(PageName.contact).subscribe(() => {
      this.navigatePage();
    });
  }

  protected navigatePage(): void {
    this.router.navigate([Route.MESSAGES]);
  }

  handleSaveMessage(message: Message): void {
    this.messageService.create(message).subscribe(() => {
      this.router.navigate([Route.MESSAGES]);
    });
  }
}


