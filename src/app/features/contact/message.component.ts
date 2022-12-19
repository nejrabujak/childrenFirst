import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Message} from '../../models/message';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MessageProperty} from '../../models/MessageProperty';
import {Router} from '@angular/router';
import {PageService} from '../../services/page.service';
import {Page} from '../../models/page.model';
import {Route} from '../../constants/route.constants';
import {PageProperty} from '../../models/page-property.enum';
import {PageUuidService} from '../../services/page.uuid.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, OnDestroy{
  @Output()
  public saveMessage: EventEmitter<Message> = new EventEmitter<Message>();

  @Input()
  message: Message | undefined;

  private sub = new Subscription();
  public form!: FormGroup;
  public messageProperty = MessageProperty;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private pageService: PageService,
    private pageUuidService: PageUuidService
  ) { }

  // tslint:disable-next-line:typedef
  public getPage(){
    return 'contact';
  }
  // tslint:disable-next-line:typedef
  public getEnter(){
    return 'enter';
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [MessageProperty.id]: [this.message?.[MessageProperty.id] || ''],
      [MessageProperty.name]: [this.message?.[MessageProperty.name] || ''],
      [MessageProperty.email]: [this.message?.[MessageProperty.email] || ''],
      [MessageProperty.note]: [this.message?.[MessageProperty.note] || '']
    });
    this.savePage({
      [PageProperty.uuid]: this.pageUuidService.getDeviceId(),
      [PageProperty.page]: this.getPage(),
      [PageProperty.enterexit]: this.getEnter()
    });
    this.sub = new Subscription();
  }

  public submit(): void {
    console.log(123);
    if (!this.form.valid) {
      return;
    }
    console.log(123);
    this.saveMessage.emit(this.form.value);
    this.resetForm();
  }

  private resetForm(): void {
    this.form.reset();
  }

  savePage(page: Page): void {
    this.pageService.enter(page).subscribe(() => {
      this.router.navigate([Route.MESSAGES]);
    });
  }
  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }

}


