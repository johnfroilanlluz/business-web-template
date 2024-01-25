import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { ServicesComponent } from './services/services.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'contact', component: FooterComponent },
  { path: '**', component: HomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
