import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Model {
  value: string;
  label: string;
  make: string;
}

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor() { }


  getMakes() {
    return of([
      {"value":"Acura","label":"Acura"},
      {"value":"BMW","label":"BMW"},
      {"value":"Honda","label":"Honda"},
      {"value":"Toyota","label":"Toyota"},
    ]);
  }

  getModels(make: string = null): Observable<Model[]> {
    return of([
      {"label":"CL", "value":"CL", "make":"Acura"},
      {"label":"MDX", "value":"MDX", "make":"Acura"},
      {"label":"RDX", "value":"RDX", "make":"Acura"},
      {"label":"RL", "value":"RL", "make":"Acura"},
      {"label":"TL", "value":"TL", "make":"Acura"},

      {"label":"330I", "value":"330I", "make":"BMW"},
      {"label":"540I", "value":"540I", "make":"BMW"},
      {"label":"M3", "value":"M3", "make":"BMW"},
      {"label":"M5", "value":"M5", "make":"BMW"},
      {"label":"X5", "value":"X5", "make":"BMW"},
      {"label":"Z3", "value":"Z3", "make":"BMW"},

      {"label":"Accord", "value":"Accord", "make":"Honda"},
      {"label":"Civic", "value":"Civic", "make":"Honda"},
      {"label":"CR-V", "value":"CR-V", "make":"Honda"},
      {"label":"Passport", "value":"Passport", "make":"Honda"},
      {"label":"Pilot", "value":"Pilot", "make":"Honda"},
      {"label":"Ridgeline", "value":"Ridgeline", "make":"Honda"},
      {"label":"S2000", "value":"S2000", "make":"Honda"},

      {"label":"4Runner", "value":"4Runner", "make":"Toyota"},
      {"label":"Camary", "value":"Camary", "make":"Toyota"},
      {"label":"Corolla", "value":"Corolla", "make":"Toyota"},
      {"label":"Highlander", "value":"Highlander", "make":"Toyota"},
      {"label":"Land Cruiser", "value":"Land Cruiser", "make":"Toyota"},
      {"label":"Prius", "value":"Prius", "make":"Toyota"},
      {"label":"Tacoma", "value":"Tacoma", "make":"Toyota"},
      {"label":"Tundra", "value":"Tundra", "make":"Toyota"},
    ].filter(entry => {
      if (make) {
        return entry.make === make;
      } else {
        return true;
      }
    }));
  }

  getStates () {
    return of ([
        {
            "label": "Alabama",
            "value": "AL"
        },
        {
            "label": "Alaska",
            "value": "AK"
        },
        {
            "label": "American Samoa",
            "value": "AS"
        },
        {
            "label": "Arizona",
            "value": "AZ"
        },
        {
            "label": "Arkansas",
            "value": "AR"
        },
        {
            "label": "California",
            "value": "CA"
        },
        {
            "label": "Colorado",
            "value": "CO"
        },
        {
            "label": "Connecticut",
            "value": "CT"
        },
        {
            "label": "Delaware",
            "value": "DE"
        },
        {
            "label": "District Of Columbia",
            "value": "DC"
        },
        {
            "label": "Federated States Of Micronesia",
            "value": "FM"
        },
        {
            "label": "Florida",
            "value": "FL"
        },
        {
            "label": "Georgia",
            "value": "GA"
        },
        {
            "label": "Guam",
            "value": "GU"
        },
        {
            "label": "Hawaii",
            "value": "HI"
        },
        {
            "label": "Idaho",
            "value": "ID"
        },
        {
            "label": "Illinois",
            "value": "IL"
        },
        {
            "label": "Indiana",
            "value": "IN"
        },
        {
            "label": "Iowa",
            "value": "IA"
        },
        {
            "label": "Kansas",
            "value": "KS"
        },
        {
            "label": "Kentucky",
            "value": "KY"
        },
        {
            "label": "Louisiana",
            "value": "LA"
        },
        {
            "label": "Maine",
            "value": "ME"
        },
        {
            "label": "Marshall Islands",
            "value": "MH"
        },
        {
            "label": "Maryland",
            "value": "MD"
        },
        {
            "label": "Massachusetts",
            "value": "MA"
        },
        {
            "label": "Michigan",
            "value": "MI"
        },
        {
            "label": "Minnesota",
            "value": "MN"
        },
        {
            "label": "Mississippi",
            "value": "MS"
        },
        {
            "label": "Missouri",
            "value": "MO"
        },
        {
            "label": "Montana",
            "value": "MT"
        },
        {
            "label": "Nebraska",
            "value": "NE"
        },
        {
            "label": "Nevada",
            "value": "NV"
        },
        {
            "label": "New Hampshire",
            "value": "NH"
        },
        {
            "label": "New Jersey",
            "value": "NJ"
        },
        {
            "label": "New Mexico",
            "value": "NM"
        },
        {
            "label": "New York",
            "value": "NY"
        },
        {
            "label": "North Carolina",
            "value": "NC"
        },
        {
            "label": "North Dakota",
            "value": "ND"
        },
        {
            "label": "Northern Mariana Islands",
            "value": "MP"
        },
        {
            "label": "Ohio",
            "value": "OH"
        },
        {
            "label": "Oklahoma",
            "value": "OK"
        },
        {
            "label": "Oregon",
            "value": "OR"
        },
        {
            "label": "Palau",
            "value": "PW"
        },
        {
            "label": "Pennsylvania",
            "value": "PA"
        },
        {
            "label": "Puerto Rico",
            "value": "PR"
        },
        {
            "label": "Rhode Island",
            "value": "RI"
        },
        {
            "label": "South Carolina",
            "value": "SC"
        },
        {
            "label": "South Dakota",
            "value": "SD"
        },
        {
            "label": "Tennessee",
            "value": "TN"
        },
        {
            "label": "Texas",
            "value": "TX"
        },
        {
            "label": "Utah",
            "value": "UT"
        },
        {
            "label": "Vermont",
            "value": "VT"
        },
        {
            "label": "Virgin Islands",
            "value": "VI"
        },
        {
            "label": "Virginia",
            "value": "VA"
        },
        {
            "label": "Washington",
            "value": "WA"
        },
        {
            "label": "West Virginia",
            "value": "WV"
        },
        {
            "label": "Wisconsin",
            "value": "WI"
        },
        {
            "label": "Wyoming",
            "value": "WY"
        }
    ])
  }

}
