import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './pages/form/form.component';
import { CurriculumVitaeComponent } from './pages/curriculum-vitae/curriculum-vitae.component';
import { HomeComponent } from './pages/home/home.component';
import { InvalidControlDirective } from './directives/invalid-control-directive.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    CurriculumVitaeComponent,
    HomeComponent,
    InvalidControlDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
