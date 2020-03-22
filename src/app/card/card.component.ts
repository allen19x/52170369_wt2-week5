import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Digimon } from "../digimon";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"]
})
export class CardComponent implements OnInit {
  @Input() digimon: Digimon;
  @Output() detailClickHandler: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  detailClicked() {
    this.detailClickHandler.emit(this.digimon.id);
  }
}
