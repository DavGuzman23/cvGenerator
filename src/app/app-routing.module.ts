import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FormComponent } from './pages/form/form.component';
import { CurriculumVitaeComponent } from './pages/curriculum-vitae/curriculum-vitae.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'form',
    component: FormComponent
  },
  {
    path: 'cv',
    component: CurriculumVitaeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
