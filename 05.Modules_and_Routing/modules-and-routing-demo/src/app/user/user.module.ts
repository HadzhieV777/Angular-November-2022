import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './list/list.component';
import { Test } from '../test';
import { UserDetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { UserResolver } from './user-detail.resolver';
import { AuthGuard } from './user-detail.guard';

@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'user/list', // we dont add "/" because the path is relative to the current location
        component: UserListComponent,
      },
      {
        // before rendering the component(UserDetailComponent)
        // we must wait for  resolve: { user: UserResolver } to resolve first
        
        path: 'user/detail/:id',
        resolve: { user: UserResolver },
        canActivate: [AuthGuard],
        component: UserDetailComponent,
      },
    ]),
  ],
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
