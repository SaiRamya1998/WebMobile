import { Component, OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  restaurantSearch: boolean = false;
  recipeSearch: boolean = false;
  restaurantsResponse;
  
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  openRestaurant() {
    this.restaurantSearch = true;
    this.recipeSearch = false;
  }

  findRecipe() {
    this.recipeSearch = true;
    this.restaurantSearch = false;
  }

  getPlaceDetails(place){
    console.log(place);
    this.searchService.getPlaces(place).subscribe(res => {
      console.log('Test the response',res);
      if(res){
        this.restaurantsResponse = res;
      }
    })
  }

}
