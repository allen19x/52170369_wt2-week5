import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShellComponent } from "./shell/shell.component";
import { AboutComponent } from "./about/about.component";
import { Page404Component } from "./page404/page404.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DigimonDetailComponent } from "./digimon-detail/digimon-detail.component";
import { LoginComponent } from "./login/login.component";
import { LoginGuard } from "./login.guard";

const routes: Routes = [
  {
    path: "",
    component: ShellComponent,
    canActivateChild: [LoginGuard],
    children: [
      {
        path: "",
        redirectTo: "/dashboard",
        pathMatch: "full"
      },
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "digimon/:id",
        component: DigimonDetailComponent
      },
      {
        path: "about",
        component: AboutComponent
      }
    ]
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "**",
    component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
