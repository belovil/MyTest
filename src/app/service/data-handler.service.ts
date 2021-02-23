import {Injectable} from '@angular/core';
import {Module} from '../model/module';
import {TestData} from '../data/TestData';
import {Application} from '../model/application';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() {
  }

  getModules(): Module[] {
    return TestData.modules;
  }

  getApps(): Application[] {
    return TestData.applications;
  }
}
