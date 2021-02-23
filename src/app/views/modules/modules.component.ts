import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Module} from '../../model/module';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  modules: Module[];

  constructor(private dataHandler: DataHandlerService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.modules = this.dataHandler.getModules();
  }

}
