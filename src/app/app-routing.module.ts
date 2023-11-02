import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

//const routes: Routes = [];
const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: "my-resume", 
  component: MyResumeComponent,
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
