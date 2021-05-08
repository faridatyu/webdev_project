import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { EditorComponent } from './editor/editor.component';
import { HeadingComponent } from './heading/heading.component';
import { SubheadingsComponent } from './subheadings/subheadings.component';
import { HeadingDetailsComponent } from './heading-details/heading-details.component';
import { SubheadingDetailsComponent } from './subheading-details/subheading-details.component';
import { MakeHeadingComponent } from './make-heading/make-heading.component';
import { MakeSubheadingComponent } from './make-subheading/make-subheading.component';
import { ExplorerComponent } from './explorer/explorer.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { RecipeComponent } from './recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomeComponent,
    MainPageComponent,
    SectionComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent,
    EditorComponent,
    HeadingComponent,
    SubheadingsComponent,
    HeadingDetailsComponent,
    SubheadingDetailsComponent,
    MakeHeadingComponent,
    MakeSubheadingComponent,
    AboutComponent,
    ExplorerComponent,
    RecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AppComponent,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
