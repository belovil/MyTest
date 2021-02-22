import {Module} from '../model/module';
import {Right} from '../model/right';
import {User} from '../model/User';

export class TestData {

  static modules: Module[] = [
    {id: 1, title: 'Firewall'},
    {id: 2, title: 'Loadbalancer'},
    {id: 3, title: 'Storage and Backup'},
    {id: 4, title: 'Idaas'}
  ];

  static rights: Right[] = [
    {id: 1, rightName: 'admin', rightDescription: 'Can do everything'},
    {id: 2, rightName: 'viewer', rightDescription: 'Can observe'}
  ];

  static users: User[] = [
    {
      id: 1,
      userName: 'root',
      firstName: 'Ilya',
      lastName: 'Belov',
      right: TestData.rights[1]
    }
  ];

}
