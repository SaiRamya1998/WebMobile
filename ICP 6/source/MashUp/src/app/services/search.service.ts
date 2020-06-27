import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  placesApi = 'https://api.foursquare.com/v2/venues/search?';
  clientdId = 'client_id=VHQ44O2U04OLGSE0BZOJLC4BOMDIHMHII0LHA35RAQKIVNZQ';
  clientSecret = '&client_secret=E5TO3M2RAE5PMDTCVEIOAQPJXGTC4IBWDZNF4TI3SSC1MND4';
  version = '&v=20180323';
  near = '&near=';
  query = '&query=';

  recipeApi = 'https://api.edamam.com/search?q=';
  recepieAppid = '&app_id=78be87ac';
  recepieKey = '&app_key=71d360aa90cfa6a1fcc4e05aa29d9e09';

  constructor(private http: HttpClient) { }

  getPlaces(place){
    return this.http.get(this.placesApi + this.clientdId + this.clientSecret + this.version + this.near + place )
  }

  getRecipe(item){
    return this.http.get(this.recipeApi + item + this.recepieAppid + this.recepieKey);
  }
}
