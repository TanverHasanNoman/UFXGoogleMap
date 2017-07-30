import { Component, OnInit , AfterContentInit} from '@angular/core';
import { CustomerService } from "app/map/shared/customer.service";
import { ICustomer, ContactsEntity, AddressesEntity } from "app/map/shared/customer";
import { NguiMapComponent } from '@ngui/map';
import { HttpGeoService } from "app/map/shared/http-geo.service";
import { IMapResponse, ResultsEntity, NortheastOrSouthwestOrLocation } from "app/map/shared/map-response";
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterContentInit {
  data: ICustomer[]=[];
  addressess:AddressesEntity[]=[];
  geoResponse: object[]=[];
  positions: any[] = [];
  
 
  constructor(private req: CustomerService, private geo: HttpGeoService) {
   //-------------------Customer service
    this.req.getEvents().subscribe(res=>this.data=res);
    //console.log(this.data);
    this.data.forEach(element => {
      element.Contacts.forEach(
        item=> item.Addresses.filter(f=>
          f.AddressLine1!=null && f.PostalCode!=null).forEach(
          address=> this.addressess.push(address)
        ));
     });
    //  console.log(this.addressess)
  }

  ngOnInit() {

    //---------------------------------Geo Service 
    this.addressess.forEach(a=>{
       this.geo.getRequest(a.AddressLine1,a.City,a.Country,a.PostalCode,a.Region)
       //.subscribe(res=>this.geoResponse.push(res as object ));
      // .subscribe(res=>console.log(res["results"] )); 
       .subscribe(res=>res["results"].forEach(s=>{this.positions.push(s.geometry.location)}) ); 
        //.subscribe(res=>res["results"].forEach(s=>{console.log(s.geometry.location)}) ); 
     });
  }
  ngAfterContentInit(): void {
  }

  marker = {
    display: true,
    lat: null,
    lng: null,
    fa: []
  };
 reverseAddress: any[]=[];
  clicked({target: marker}) {

    
    this.marker.lat = marker.getPosition().lat();
    this.marker.lng = marker.getPosition().lng();

    let reverse: any[]=[]
    this.geo.reversGeoCode(marker.getPosition().lat(), marker.getPosition().lng())
    .subscribe(res=>this.marker.fa=res.results[1].formatted_address);
    
   

    marker.nguiMapComponent.openInfoWindow('iw', marker);
  }

  hideMarkerInfo() {
    this.marker.display = !this.marker.display;
  }
  
}




















  // clicked({target: marker}) {

    
  //   this.marker.lat = marker.getPosition().lat();
  //   this.marker.lng = marker.getPosition().lng();

  //   let reverse: any[]=[]
  //   this.geo.reversGeoCode(marker.getPosition().lat(), marker.getPosition().lng())
  //   .subscribe(res=>res["results"].filter(e=> {
  //     if((e.geometry.location.lat=this.marker.lat) || (e.geometry.location.lng=this.marker.lng)){
  //    // console.log("formated addres ")
  //       console.log(e["formatted_address"])
  //     // this.marker.fa=e.formatted_address;
  //      this.reverseAddress.push(e.formatted_address);
  //     }}));
    
  //   console.log(this.reverseAddress);
  //   console.log("------------");
  //   this.marker.fa=this.reverseAddress.shift();
  //   console.log(this.marker.fa)

  //   marker.nguiMapComponent.openInfoWindow('iw', marker);
  // }

  // hideMarkerInfo() {
  //   this.marker.display = !this.marker.display;
  // }
  