// cv-data-service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CvDataService {
  private cvData: any = null;

  setCvData(data: any) {
    this.cvData = data;
  }

  getCvData() {
    return this.cvData;
  }
}
