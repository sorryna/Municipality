import { Component, OnInit, ViewChild } from '@angular/core';
import { IonAccordionGroup } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  
  @ViewChild(IonAccordionGroup, { static: true }) accordionGroup: IonAccordionGroup;

  constructor() { }

  ngOnInit() {}

  closeAccordion() {
    this.accordionGroup.value = undefined;
  }  
}
