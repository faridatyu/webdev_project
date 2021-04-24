import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { HeadingComponent } from './heading/heading.component';
import { SubheadingComponent } from './subheading/subheading.component';
import { HeadingDetailsComponent } from './heading-details/heading-details.component';
import { SubheadingDetailComponent } from './subheading-detail/subheading-detail.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { AboutComponent } from './about/about.component';
import { RecipeComponent } from './recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SectionComponent,
    FooterComponent,
    RegistrationComponent,
    LoginComponent,
    HeadingComponent,
    SubheadingComponent,
    HeadingDetailsComponent,
    SubheadingDetailComponent,
    AboutComponent,
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
