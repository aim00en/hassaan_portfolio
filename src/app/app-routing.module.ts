import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { WorkComponent } from './work/work.component';
import { ServicesComponent } from './services/services.component';
import { ExperienceComponent } from './experience/experience.component';
import { HeroComponent } from './hero/hero.component';



const routes: Routes = [
  {path: 'hero', component:HeroComponent},
  {path: 'about', component:AboutComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'testimonial', component: TestimonialComponent },
  { path: 'work', component: WorkComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'experience', component: ExperienceComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
