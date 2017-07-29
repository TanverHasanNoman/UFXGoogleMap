import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { NguiMapModule} from '@ngui/map';
import { FormsModule } from "@angular/forms";
import { CustomerService } from "app/map/shared/customer.service";
import { HttpModule }    from '@angular/http';
import { HttpGeoService } from "app/map/shared/http-geo.service";

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    
  ],
  imports: [
    BrowserModule,
      FormsModule, 
      HttpModule,
      
      NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyB_qsuVl2OWbSebil6ab_IqiWP5nzTzdwc'})
  
  ],
  providers: [CustomerService,HttpGeoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
