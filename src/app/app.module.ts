import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MyResumeComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent
  ],
 
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
