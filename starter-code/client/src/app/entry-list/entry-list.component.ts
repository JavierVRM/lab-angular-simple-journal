import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../contacts.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [ContactsService]
})
export class EntryListComponent implements OnInit {
  contactList: Array <any>;
  constructor(private contacts: ContactsService) {}
  ngOnInit() {
    this.getAllContacts();
  }
  getAllContacts() {
    this.contacts.getContacts().subscribe((list) => this.contactList = list);
  }
}
