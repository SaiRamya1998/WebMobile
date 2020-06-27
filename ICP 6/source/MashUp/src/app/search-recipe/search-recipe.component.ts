import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  @ViewChild('recipe') recipes: ElementRef;
  @ViewChild('place') places: ElementRef;
  recipeValue: any;
  placeValue: any;
  venueList = [];
  recipeList;

  currentLat: any;
  currentLong: any;
  geolocationPosition: any;

  constructor(private _http: HttpClient, private searchService: SearchService) {
  }

  ngOnInit() {

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
      });
  }

  getVenues(recipeitem) {

    // this.recipeValue = this.recipes.nativeElement.value;
    // this.placeValue = this.places.nativeElement.value;

    // if (this.recipeValue !== null) {
      /**
       * Write code to get recipe
       */
      console.log('Recipe value........',recipeitem);
      this.searchService.getRecipe(recipeitem).subscribe(res => {
        console.log('Recipe details.......', res);
        this.recipeList = res;
      })
    // }

    if (this.placeValue != null && this.placeValue !== '' && this.recipeValue != null && this.recipeValue !== '') {
      /**
       * Write code to get place
       */
    }
  }
}
