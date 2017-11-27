import { Component, OnInit } from '@angular/core';
import { StatusService } from './status.service';
import { Status } from './status';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [StatusService]
})
export class MainComponent implements OnInit {
  statuses: Status[];
  constructor(private statusService: StatusService) { }
  ngOnInit() {
    this.statusService.getStatuses()
    .then(statuses => {
      this.statuses = statuses;
      console.log(statuses);
    });
  }
}
