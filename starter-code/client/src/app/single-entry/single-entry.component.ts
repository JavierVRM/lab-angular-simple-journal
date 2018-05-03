import { Component, OnInit } from '@angular/core';
import {ContactsService} from '../contacts.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [ContactsService]
})
export class SingleEntryComponent implements OnInit {
  singleContact: object;
  id: number = 0;
  constructor(private contacts: ContactsService, private router: ActivatedRoute) { 
    this.router.params.subscribe(p => (this.id = p.id));
  }
  ngOnInit() {
    this.getOneContact(this.id);
    console.log(this.id);
  }
  getOneContact(id) {
    this.contacts.getSingleContact(id).subscribe((list) => this.singleContact = list);
  }
}
