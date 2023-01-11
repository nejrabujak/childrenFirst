import {Component, OnInit} from '@angular/core';

@Component({
  template: ''
})
export abstract class BaseComponent implements OnInit {

  ngOnInit(): void {
    this.enterPage();
  }

  protected enterPage(): void {
  }

  protected navigatePage(): void {
  }
}
