import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Message} from '../../models/message';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MessageProperty} from '../../models/MessageProperty';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit{
  @Output()
  public saveMessage: EventEmitter<Message> = new EventEmitter<Message>();

  @Input()
  message: Message | undefined;

  public form!: FormGroup;
  public messageProperty = MessageProperty;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      [MessageProperty.id]: [this.message?.[MessageProperty.id] || ''],
      [MessageProperty.name]: [this.message?.[MessageProperty.name] || ''],
      [MessageProperty.email]: [this.message?.[MessageProperty.email] || ''],
      [MessageProperty.note]: [this.message?.[MessageProperty.note] || '']
    });
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

}


