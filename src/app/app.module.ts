import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card';
import { ManualComponent } from './manual/manual.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatIconModule, MatIconRegistry} from '@angular/material/icon';
import { MatSelectModule} from '@angular/material/select';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ManualComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  

 }
