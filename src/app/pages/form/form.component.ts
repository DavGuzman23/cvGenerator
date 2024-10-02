import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CvDataService } from 'src/services/cv-data-service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  cvForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private cvDataService: CvDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cvForm = this.fb.group({
      fullName: ['', [Validators.required]],
      birthDate: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^\+?(\d{1,3})?[-.\s]?\d{1,12}$/)]],
      email: ['', [Validators.required, Validators.email]],
      nationality: ['', [Validators.required]],
      profile: ['', [Validators.required]],
      degree: ['', [Validators.required]],
      institution: ['', [Validators.required]],
      startDate: ['', [Validators.required]],
      endDate: [''],
      company: ['', [Validators.required]],
      position: ['', [Validators.required]],
      jobStartDate: ['', [Validators.required]],
      jobEndDate: [''],
      jobDescription: [''],
      skills: [''],
      languages: [''],
      courseName: [''],
      courseDate: [''],
      refName: [''],
      refPosition: [''],
      refPhone: [''],
      refEmail: ['', Validators.email]
    });
  }

  private markAllAsTouched() {
    Object.keys(this.cvForm.controls).forEach(controlName => {
      this.cvForm.get(controlName)?.markAsTouched();
    });
  }

  public onSubmit(): void {
    // if (this.cvForm.invalid) {
    //   this.markAllAsTouched();
    //   this.scrollToInvalidControl();
    // } else {
    //   this.cvDataService.setCvData(this.cvForm.value);
    //   this.router.navigate(['/cv']);
    // }
    this.cvDataService.setCvData(this.cvForm.value);
    this.router.navigate(['/cv']);
  }

  scrollToInvalidControl() {
    const firstInvalidControl: HTMLElement = document.querySelector('.ng-invalid') as HTMLElement;

    if (firstInvalidControl) {
      firstInvalidControl.scrollIntoView({ behavior: 'smooth'});
      firstInvalidControl.focus();
    }
  }

  public getControl(controlName: string) {
    return this.cvForm.get(controlName);
  }
}
