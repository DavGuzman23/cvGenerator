import { Component, OnInit } from '@angular/core';
import { CvDataService } from 'src/services/cv-data-service';

@Component({
  selector: 'app-curriculum-vitae',
  templateUrl: './curriculum-vitae.component.html',
  styleUrls: ['./curriculum-vitae.component.scss']
})
export class CurriculumVitaeComponent implements OnInit {

  cvData: any

  constructor(
    private cvDataService: CvDataService
  ) { }

  ngOnInit(): void {

    this.cvData = this.cvDataService.getCvData();
    if (!this.cvData) {
      console.log('No se ha recibido ningún dato.');
    } else {
      console.log('Datos recibidos:', this.cvData);
    }
  }

}
