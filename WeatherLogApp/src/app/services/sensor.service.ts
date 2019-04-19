import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sensor } from '../components/sensor-list/sensor';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  private sensorsUrl = 'http://localhost:3000/sensors';
  constructor(
    private http: HttpClient) { }

  getSensors() : Observable<Sensor[]> {
    return this.http.get<Sensor[]>(this.sensorsUrl);
  }

  getSensor(id: string) : Observable<Sensor> {
    const url = `${this.sensorsUrl}/${id}`;
    return this.http.get<Sensor>(url);
  }
}
