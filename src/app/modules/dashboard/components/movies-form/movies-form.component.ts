import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { catogories, MovieModel } from "../../../../models/movie.model";

@Component({
  selector: "app-movies-form",
  templateUrl: "./movies-form.component.html",
  styleUrls: ["./movies-form.component.scss"],
})
export class MoviesFormComponent implements OnInit {
  @Output() movieSearchEmitter = new EventEmitter<MovieModel>();

  moviesForm: FormGroup;
  myCategories = catogories;

  constructor(private fb: FormBuilder) {
    this.moviesForm = this.fb.group({
      type: [""],
      name: [""],
      year: [""],
    });
  }

  ngOnInit(): void {
    this.myCategories = catogories;
    this.moviesForm = this.fb.group({
      type: ["", Validators.required],
      name: ["", Validators.required],
      year: ["", Validators.required],
    });

  }

  onSubmit() {
    const payload = {
      type: this.moviesForm.value.type,
      description: this.moviesForm.value.name,
      year: this.moviesForm.value.year,
    };
    this.movieSearchEmitter.emit(payload);
  }

  onChangeEvent(value: string) {
    if(value === 'series'){
      this.moviesForm.controls["year"].enable();
    }
    else{
      this.moviesForm.controls["year"].disable();
    }
  }
}
