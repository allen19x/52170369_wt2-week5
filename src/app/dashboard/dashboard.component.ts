import { Component, OnInit } from "@angular/core";
import { Digimon } from "../digimon";
import { DigimonService } from "../digimon.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  digimons: Array<Digimon>;

  constructor(private digimonService: DigimonService, private router: Router) {}

  ngOnInit(): void {
    this.digimonService
      .getDigimons()
      .subscribe(digimons => (this.digimons = digimons));
  }

  goToDetail(id: number) {
    this.router.navigate(["/digimon", id]);
  }
}
