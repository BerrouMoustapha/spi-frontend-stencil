import { Formation } from "./formation";
import { Enseignant } from "./enseignant";

export interface Promotion {
    commentaire: string;
    dateRentree: Date;
    dateReponseLalp: Date;
    dateReponseLp: Date;
    enseignant: Enseignant;
    formation: Formation;
    id: {
      anneeUniversitaire: string;
      codeFormation: string
    };
    lieuRentree: string;
    nbMaxEtudiant: 0;
    processusStage: string;
    siglePromotion: string
  }