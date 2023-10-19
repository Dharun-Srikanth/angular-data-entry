import { Component } from '@angular/core';
import { EntryType } from 'src/app/models/entry-type';
import { EntryServiceService } from 'src/app/services/entry-service.service';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css'],
})
export class DataEntryComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  id: number = 0;
  status:boolean = false;

  detailsList: EntryType[] = [];

  constructor(private dataObj: EntryServiceService) {
    this.detailsList = dataObj.getAllDetails();
  }

  save(id: number): void {
    if (this.id == 0) {
      this.detailsList = this.dataObj.saveData(
        this.name,
        this.email,
        this.phone
      );
      this.name = '';
      this.email = '';
      this.phone = '';
      this.status = true;
    } else {
      this.detailsList = this.dataObj.editData(
        this.id,
        this.name,
        this.email,
        this.phone
      );
      this.name = "";
      this.email = "";
      this.phone = "";
      
    }
  }

  edit(id: number): void {
    this.id = id;
    const values = this.dataObj.value(id);
    this.name = values.name;
    this.email = values.email;
    this.phone = values.phone;
  }

  delete(id: number) {
    this.detailsList = this.dataObj.deleteData(id);
  }
}
