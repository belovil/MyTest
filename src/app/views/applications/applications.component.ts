import {Component, OnInit} from '@angular/core';
import {Application} from '../../model/application';
import {DataHandlerService} from '../../service/data-handler.service';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {

  applications: Application[];

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.applications = this.dataHandler.getApps();
  }

}
