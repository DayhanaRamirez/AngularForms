import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutingModule } from "../dashboard/dashboard-routing.module";
import { AngularMaterialModule } from "@shared/angular-material/angular-material.module"; 
import { ReactiveFormsModule } from "@angular/forms";
import { MoviesFormComponent } from './components/movies-form/movies-form.component';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { PipesModule } from '../../shared/pipes/pipes.module';
import { MoviesTableComponent } from './components/movies-table/movies-table.component';


@NgModule({
  declarations: [DashboardComponent, MoviesFormComponent, MoviesTableComponent, ],
  imports: [CommonModule, DashboardRoutingModule, AngularMaterialModule, ReactiveFormsModule, DirectivesModule, PipesModule],
})
export class DashboardModule {}
