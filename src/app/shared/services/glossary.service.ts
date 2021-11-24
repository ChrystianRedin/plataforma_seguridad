import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlossaryService {

  constructor(private http: HttpClient) { }

  getGlossaryTechnicalities() {
    const urlTechnicalities = environment.geoserverTechnicalitiesApi;
    return this.http.get<any>(urlTechnicalities)
  }

  getGlossaryLaboratory() {
    const urlGlossaryLaborator = environment.geoserverLaboratoryApi;
    return this.http.get<any>(urlGlossaryLaborator)
  }

  getGlossaryComparative() {
    const urlGlossaryComparative = environment.geoserverComparativeApi;
    return this.http.get<any>(urlGlossaryComparative)
  }
}


