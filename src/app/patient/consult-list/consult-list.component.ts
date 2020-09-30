import { Component, OnInit } from '@angular/core';
import { Consult } from '../../_shared/_models/consult';
import { ConsultService } from '../../_shared/_services/consult.service';

@Component({
  selector: 'app-consult-list',
  templateUrl: './consult-list.component.html',
  styleUrls: ['./consult-list.component.scss']
})
export class ConsultListComponent implements OnInit {
  constructor(private consultService: ConsultService) { }
  page = 1;
  pageSize = 5;
  consults: Consult[];

  ngOnInit(): void {
    this.consultService.getMyPatientConsults().subscribe((consults) => {
      this.consults = consults;
      console.log(consults);
    });
  }
}
