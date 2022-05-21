import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataInterface, MovieModel } from '@app-models/movie.model';

@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.scss']
})
export class MoviesTableComponent implements OnInit, OnChanges {

  @Input() search: MovieModel;
  dataSource: DataInterface [];

  constructor() {
    this.search = {
      type : "",
      year: "",
      description : "",
    },

    this.dataSource = [];
   }

  ngOnInit(): void {
    console.log("table", this.search);
  }

  ngOnChanges(changes: SimpleChanges): void {

    const data = changes['search'].currentValue;

    if(data){
      console.log("changes", this.search);

    }
  }

}
