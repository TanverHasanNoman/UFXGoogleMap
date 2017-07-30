import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { Observable } from "rxjs/Observable";
import {  IMapResponse } from "app/map/shared/map-response";

@Injectable()
export class HttpGeoService {

  url: string;
  apiKey: string="AIzaSyD6H6JHx3sEfOG6A5pakQFUgfLlLTfK1Sw";
  
  constructor(private http: Http) {
    this.url="https://maps.googleapis.com/maps/api/geocode/json?";
   }
 

  getRequest(address: string, city:string, country: string, postalCode: string, region: string ): Observable<IMapResponse[]>{
    let formatedAddress: string =address.replace(' ','+');
    let formatedCity: string=city.replace(' ', '+');
    let formatedCountry: string=country.replace(' ', '+');
    let formatedPostalCode: string=postalCode.replace(' ','+');
    let formatedRegion: string =region.replace(' ', '+');
    return this.http.get(this.url+"address="+formatedAddress+"+"+formatedCity+"+"+formatedCountry+"+"+formatedPostalCode+"+"+formatedRegion+"&key="+this.apiKey)
    .map(response => response.json()) 
    .catch(this.handleError);
  }

  reversGeoCode(lat: any, lng: any){
   let api: string="https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key="+this.apiKey;
    return this.http.get(api)
    .map(res=> res.json())
    .catch(this.handleError)
  }
  private handleError(error: any): Observable<any[]> {
       console.error('An error occurred', error); // for demo purposes only
       return Observable.throw(error.message || error.json());
    }
}
