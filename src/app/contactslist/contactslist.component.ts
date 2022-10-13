import {Component, Input, OnInit} from '@angular/core';
import {AppComponent, PhoneBookRecord} from "../app.component";

@Component({
  selector: 'app-contactslist',
  templateUrl: './contactslist.component.html',
  styleUrls: ['./contactslist.component.css']
})
export class ContactslistComponent implements OnInit {

  @Input() records: PhoneBookRecord[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
