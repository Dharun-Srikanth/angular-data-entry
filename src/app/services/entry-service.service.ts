import { Injectable } from '@angular/core';
import { EntryType } from '../models/entry-type';

@Injectable({
  providedIn: 'root'
})
export class EntryServiceService {

  details:EntryType[] = [];
  constructor() { }

  getAllDetails():EntryType[]{
    return this.details;
  }

  saveData(name:string, email:string, phone:string):EntryType[]{
    this.details.push({id:this.details.length+1, name:name, email:email, phone:phone});
    return this.details;
  }

  editData(id:number, name:string, email:string, phone:string):EntryType[]{
    const index = this.details.findIndex(val => val.id===id);
    this.details[index] = {id:id, name:name, email:email, phone:phone};
    return this.details;
  }

  value(id:number):EntryType{
    const index = this.details.findIndex(val => val.id===id);
    return this.details[index];
  }

  deleteData(id:number):EntryType[]{
    const index = this.details.findIndex(val => val.id===id);
    this.details.splice(index, 1);
    return this.details;
  }
}
