import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post/list/list.component';

import { UserListComponent } from './user/list/list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/user-list',
  },
  {
    path: 'user-list', // we dont add "/" because the path is relative to the current location
    component: UserListComponent,
  },
  {
    path: 'post-list',
    component: PostListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
