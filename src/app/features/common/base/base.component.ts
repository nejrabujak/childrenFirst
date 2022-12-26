import {OnInit} from '@angular/core';

export abstract class BaseComponent implements OnInit {

  ngOnInit(): void {
    this.enterPage();
  }

  protected enterPage(): void {
  }

  protected navigatePage(): void {
  }
}
