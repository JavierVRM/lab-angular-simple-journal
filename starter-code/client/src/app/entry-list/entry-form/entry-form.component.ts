import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../contacts.service';
import {ActivatedRoute, Router} from "@angular/router";
import {EntryListComponent} from '../entry-list.component';
@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.css'],
  providers: [ContactsService]
})
export class EntryFormComponent implements OnInit {

  constructor(private contacts: ContactsService, public router: Router, public entryList: EntryListComponent) { }

  ngOnInit() {
  }
  submitForm(myForm) {
    const title = myForm.value.title;
    const content = myForm.value.content;
    this.contacts.createContact({title, content}).subscribe(() =>  this.entryList.getAllContacts());
    myForm.resetForm();
  }

}
