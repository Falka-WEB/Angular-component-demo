import { Component } from '@angular/core';

export class PhoneBookRecord{
  id: number = 0;
  name: string = '';
  surname: string = '';
  phone: string = '';
  email?: string = "";
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contacts-Book';
  PhoneBookRecords: PhoneBookRecord[] = [
    {id:1, name:"Vlad", surname: "Surname", phone:"+380000000000", email:"vladislav@example.com"},
    {id:2, name:"Anna", surname: "AnotherSurname", phone:"+380000000001", email:"anna@example.com"},
    {id:3, name:"ななみ", surname: "SomeSurname", phone:"+380000000002", email:"ななみ@example.com"},
  ];
}
