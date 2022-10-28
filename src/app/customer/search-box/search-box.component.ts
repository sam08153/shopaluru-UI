import { Component, OnInit,ViewEncapsulation, ViewChild, ElementRef, NgModule, NgZone,  AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormsModule} from "@angular/forms"

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  searches =[ 'All', 'Product', 'Collection', 'Offers']
  distances = [
    {'values': '5' , 'name':'5 Km'},
    {'values': '10' , 'name':'10 Km'},
    {'values': '15' , 'name':'15 Km'} ,
    {'values': '20' , 'name':'20 Km'},
    {'values': '30' , 'name':'30 Km'},
    {'values': '40' , 'name' : '40 Km' },
    {'values': '50' , 'name':'50 Km'}
  ]

  searchDiameter: string = "";

  group: boolean = true;

  latitude: number = 0;
  longitude: number = 0;
  Lat: number = 13.006150;
  Long: number = 77.711952;
  isdragable: boolean = true;
  zoom: number = 0;
  // @ViewChild("search") searchElementRef: ElementRef ;
  // @ViewChild('search2') search2: ElementRef ;
  // @ViewChild(AgmMap) public map: AgmMap = "";
  currentAddress: string= "Bengaluru, Karnataka, India";
  city: string = "";
  geoCoder: any;
  expandmap: boolean = false;
  searchAddress:string = "" ;

  constructor(
    private route: ActivatedRoute,
    // private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.searchMap();
    this.setCurrentPosition();
    this.initdia();
  }

  ngAfterViewInit() : void{
      // this.map.triggerResize();
  }

  searchMap(): void{
    this.zoom = 12;
    this.latitude = 13.006150;
    this.longitude = 77.711952;
    this.setCurrentPosition();
    // this.mapsAPILoader.load().then(() => {
    //   this.geoCoder = new google.maps.Geocoder;
    //   let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
    //     types: ["address"]
    //   });

    //   let autocomplete2 = new google.maps.places.Autocomplete(this.search2.nativeElement, {
    //     types: ["address"]
    //   });

    //   autocomplete.addListener("place_changed", () => {
    //     this.ngZone.run(() => {
    //       let place: google.maps.places.PlaceResult = autocomplete.getPlace();
    //       if (place.geometry === undefined || place.geometry === null) {
    //         return;
    //       }
    //       this.currentAddress = place.formatted_address
    //       this.latitude = place.geometry.location.lat();
    //       this.longitude = place.geometry.location.lng();
    //       this.zoom = 12;
    //     });
    //   });

      // autocomplete2.addListener("place_changed", () => {
      //   this.ngZone.run(() => {
      //     let place: google.maps.places.PlaceResult = autocomplete2.getPlace();
      //     if (place.geometry === undefined || place.geometry === null) {
      //       return;
      //     }
      //     this.currentAddress = place.formatted_address
      //     this.latitude = place.geometry.location.lat();
      //     this.longitude = place.geometry.location.lng();
      //     this.zoom = 12;
      //   });
      // });
    // });

  }

  setCurrentPosition(): void {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.Lat = this.latitude;
        this.Long = this.longitude;
        this.zoom = 12;
        });
    }
    // this.mapsAPILoader.load().then(() => {
    // this.geoCoder = new google.maps.Geocoder;
    // this.geoCoder.geocode({'location': {lat: this.latitude, lng: this.longitude }},
    // (results, status) => {
    //   if (status === 'OK') {
    //         if (results[4]) {
    //           this.currentAddress = results[4].formatted_address;
    //           this.city = results[4].address_components[2].short_name;
    //         }else if (results[0]){
    //           this.currentAddress = results[0].formatted_address;
    //           this.city = results[0].address_components[4].short_name;
    //         }
    //       }
    //     });
    //   });
  }

    // markerDragEnd($event: AGMMouseEvent): void{
    //      this.latitude = $event.coords.lat;
    //      this.longitude = $event.coords.lng;
    //      this.Lat  = this.latitude
    //      this.Long = this.longitude
    //      this.mapsAPILoader.load().then(() => {
    //      this.geoCoder = new google.maps.Geocoder;
    //      this.geoCoder.geocode({'location': {lat: this.latitude, lng: this.longitude }},
    //      (results, status) => {
    //        if (status === 'OK') {
    //          if (results[0]) {
    //            this.currentAddress = results[0].formatted_address;
    //            this.city = results[0].address_components[4].short_name;
    //          }
    //            }
    //          });
    //        });
    // }


  locationpoint(): void{
    this.expandmap = !this.expandmap;
    // this.map.triggerResize();
  }

  menuclose(): void{
    this.expandmap = false;
  }

  menuopen(): void{
      this.expandmap = true;
      // this.map.triggerResize();
  }
  searchRoute(): void{
      this.expandmap = false;
      this.router.navigate(['/search/'+this.latitude+'/'+this.longitude+'/'+this.searchDiameter+'/'+this.currentAddress+'/'+this.Lat+'/'+this.Long+'/']);
  }

  initdia(): void{
    // this.route.paramMap.subscribe(params => {
    //   if(params.get('dia') != null){
    //     this.searchDiameter = params.get('dia');
    //   }else{
    //     this.searchDiameter = '5';
    //   }
    //   if(!!params.get('lat') && !!params.get('long')){
    //   }
    // });
  }


}
