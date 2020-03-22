import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DigimonService } from "../digimon.service";
import { Digimon } from "../digimon";

@Component({
  selector: "app-digimon-detail",
  templateUrl: "./digimon-detail.component.html",
  styleUrls: ["./digimon-detail.component.scss"]
})
export class DigimonDetailComponent implements OnInit {
  digimon: Digimon;
  constructor(
    private route: ActivatedRoute,
    private digimonService: DigimonService
  ) {}

  ngOnInit(): void {
    this.digimon = null;
    this.route.paramMap.subscribe(param => {
      this.digimon = this.digimonService.getDigimon(+param.get("id"));
    });
  }
}
