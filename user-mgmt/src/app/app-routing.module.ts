import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { UsersComponent } from "./pages/users/users.component";

const routes: Routes = [
  { path: "", redirectTo: "", pathMatch: "full" },
  { path: "user", component: UsersComponent },
  { path: "messsage", component: UsersComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
