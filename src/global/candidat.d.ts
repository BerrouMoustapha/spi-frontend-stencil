import { Enseignant } from "./enseignant";
import { Formation } from "./formation";
import { Promotion } from "./promotion";

export interface Candidat {
    adresse: string;
    codePostal: string;
    confirmationCandidat: string;
    dateNaissance: string;
    dateReponseCandidat: Date;
    email: string;
    lieuNaissance: string;
    listeSelection: string;
    mobile: string;
    nationalite: string;
    noCandidat: BigInteger;
    nom: string;
    paysOrigine: string;
    prenom: string;
    promotion: Promotion;
    selectionNoOrdre: 0;
    sexe: string;
    telephone: string;
    universiteOrigine: string;
    ville: string
  }