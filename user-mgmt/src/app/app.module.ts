import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { UsersComponent } from "./pages/users/users.component";
import { MessagesComponent } from "./pages/messages/messages.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { HttpErrorHandler } from "./services/http-error-handler.service";
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    MessagesComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, HttpClientModule],
  providers: [HttpErrorHandler],
  bootstrap: [AppComponent],
})
export class AppModule {}
