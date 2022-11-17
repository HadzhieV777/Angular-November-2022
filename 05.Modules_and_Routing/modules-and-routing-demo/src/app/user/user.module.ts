import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './list/list.component';
import { Test } from '../test';

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule],
  // providers: [
  //   Test, // { provide: Test, useClass: Test }
  // ],
  exports: [UserListComponent],
})
export class UserModule {
  // forRoot stays in the highest lvl, will provide all the data
  static forRoot(config: any): ModuleWithProviders<UserModule> {
    return {
      ngModule: UserModule,
      providers: [{ provide: 'routes', useValue: config, multi: true }],
    };
  }

  static forChild(config: any): ModuleWithProviders<UserModule> {
    // forChild will provide only some additional data
    return {
      ngModule: UserModule,
      providers: [{ provide: 'route', useValue: config, multi: true }],
    };
  }
}
