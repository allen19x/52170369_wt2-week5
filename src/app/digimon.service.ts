import { Injectable } from "@angular/core";
import { DIGIMON } from "./digimonData";
import { Observable, of } from "rxjs";
import { Digimon } from "./digimon";

@Injectable({
  providedIn: "root"
})
export class DigimonService {
  private digimon: Array<Digimon> = DIGIMON;
  constructor() {}

  getDigimons(): Observable<Digimon[]> {
    return of(this.digimon);
  }

  getDigimon(id: number): Digimon {
    return this.digimon.find(digimon => (digimon.id === id));
  }
}
