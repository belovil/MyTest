import {Module} from '../model/module';
import {Right} from '../model/right';
import {User} from '../model/User';
import {Application} from '../model/application';

export class TestData {

  static modules: Module[] = [
    {id: 1, title: 'Firewall', subtitle: 'Firewall Rulesets', icon: 'local_fire_department', orderButton: 'Ruleset'},
    {id: 2, title: 'Loadbalancer', subtitle: 'loadbalancing', icon: 'storage', orderButton: 'VIP'},
    {id: 3, title: 'Storage and Backup', subtitle: 'Some shares', icon: 'dns', orderButton: 'Share'},
    {id: 4, title: 'Idaas', subtitle: 'Identity as a service', icon: 'supervisor_account', orderButton: 'Something'}
  ];

  static applications: Application[] = [
    {id: 1, name: 'Dummy'},
    {id: 2, name: 'Some other app'}
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
    },
    {
      id: 2,
      userName: 'bob',
      firstName: 'bob',
      lastName: 'bob',
      right: TestData.rights[2]
    }
  ];

}
