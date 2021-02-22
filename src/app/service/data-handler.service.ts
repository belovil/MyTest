import {Injectable} from '@angular/core';
import {Module} from '../model/module';
import {TestData} from '../data/TestData';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() {
  }

  getModules(): Module[] {
    return TestData.modules;
  }
}
