import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { SubheadingDetailComponent } from './subheading-detail/subheading-detail.component';
import { AboutComponent } from './about/about.component';
import { RecipeComponent} from './recipe/recipe.component';
import { HomeComponent } from './home/home.component';
import {HeadingDetailsComponent} from './heading-details/heading-details.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component:  AboutComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'headings/:headingId/edit', component: HeadingDetailsComponent },
  { path: 'subtopics/:subtopicId/edit', component: SubheadingDetailComponent },
  { path: 'recipes', component: RecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
