import { Component } from "@angular/core";
import { MovieModel } from "@app-models/movie.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent {
  
  search: MovieModel;

  constructor(){
    this.search = {
      type: "",
      description: "",
      year: "",
    }
  }

  getSearch(newSearch: MovieModel ){
    this.search.type = newSearch.type;
    this.search.description = newSearch.description;
    this.search.year = newSearch.year;
  }
}
