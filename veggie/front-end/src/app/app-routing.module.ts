import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { EditorComponent } from './editor/editor.component';
import { HeadingDetailsComponent } from './heading-details/heading-details.component';
import { SubheadingDetailsComponent } from './subheading-details/subheading-details.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { AboutComponent } from './about/about.component';
import { RecipeComponent} from './recipe/recipe.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'home', component: MainPageComponent },
  { path: 'about', component:  AboutComponent},
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sections/:sectionId/editor', component: EditorComponent },
  { path: 'topics/:topicId/edit', component: HeadingDetailsComponent },
  { path: 'subheadings/:subheadingId/edit', component: SubheadingDetailsComponent },
  { path: 'sections/:sectionId/explorer', component: ExplorerComponent },
  { path: 'recipes', component: RecipeComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
