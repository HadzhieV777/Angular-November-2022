import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { Test } from '../test';

@NgModule({
  declarations: [ListComponent],
  providers: [
    Test, // { provide: Test, useClass: Test }
  ],
  imports: [CommonModule],
  exports: [ListComponent],
})
export class PostModule {}
