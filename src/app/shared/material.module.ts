import {MatButtonModule, MatDialogModule,MatCardModule,MatInputModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatDialogModule,MatCardModule,MatInputModule],
  exports: [MatButtonModule, MatDialogModule,MatCardModule,MatInputModule],
})
export class MyMaterialModule { }