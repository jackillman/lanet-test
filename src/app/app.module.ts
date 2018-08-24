import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { MyMaterialModule } from './shared/material.module';
import { AuthService } from './shared/services/auth.service';
import { ToastrModule } from 'ngx-toastr';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { HttpClientModule } from '@angular/common/http';
import { NgxPasswordToggleModule } from 'ngx-password-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminPanelComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    AngularSvgIconModule ,
    HttpClientModule,
    NgxPasswordToggleModule,
    ToastrModule.forRoot() // ToastrModule added
    
  ],
  providers: [AuthService],
  entryComponents:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
