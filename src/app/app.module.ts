import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routing } from "./app-routing.module";
import { MainLayoutModule } from "./layouts/main-layout/main-layout.module";
import { AuthGuard } from "@app-core/auth-guard/auth.guard";
import { AuthenticationService } from "@app-core/authentication/authentication.service";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    Routing,
    MainLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthenticationService, AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
