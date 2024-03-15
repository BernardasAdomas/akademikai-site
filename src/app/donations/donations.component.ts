import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface FormGuide{
  fields: string;
  name: string;
  additionalInfo: string;
}

const FORM_DATA: FormGuide[] = [
  {fields: "1-4", name: '', additionalInfo: 'Užpildykite informaciją apie save. Dalis duomenų jau gali būti užpildyta automatiškai.'},
  {fields: "5", name: 'Mokestinis laikotarpis', additionalInfo: '2018'},
  {fields: "6s", name: 'Mokesčio dalį skiriu vienetams, turintiems teisę gauti paramą', additionalInfo: 'Pažymėkite varnelę'},
  {fields: "E1", name: 'Gavėjo tipas', additionalInfo: '2 (Paramos gavėjas)'},
  {fields: "E2", name: 'Paramos gavėjo identifikacinis numeris (kodas)', additionalInfo: '195779314'},
  {fields: "E3", name: 'Mokesčio dalies paskirtis', additionalInfo: 'SSO'},
  {fields: "E4", name: 'Mokesčio dalies dydis', additionalInfo: 'Įveskite 2, jei paremsite tik Studentų skautų organizaciją.\nĮveskite 1, jei paremsite dar vieną organizaciją.'},
  {fields: "E5", name: 'Mokesčio dalies skyrimas laikotarpiui', additionalInfo: 'Pildomas, jeigu pajamų mokesčio dalį pageidaujate skirti ilgiau kaip vienerius metus. Tokiu atveju E5 laukelyje įrašomi laikotarpio pabaigos metai, t.y. paskutinis mokestinis laikotarpis, kurios pajamų mokesčio dalį prašoma pervesti. E5 laukelyje įrašomas laikotarpis neturi būti ilgesnis kaip 5 metai, pradedant skaičiuoti nuo prašymo 5 laukelyje nurodytų metų. Pavyzdžiui, siekiant paskirti 2018-2022 m. mokestinių laikotarpių pajamų mokesčio dalį, pakaks pateikti tik vieną šių metų prašymą, kurio E5 laukelyje yra įrašyta 2022 m. Atsižvelgiant į tokį prašymą, pajamų mokesčio dalis bus pervesta automatiškai už 2018, 2019, 2020, 2021 ir 2022 m. mokestinį laikotarpį, todėl 2018-2022 m. laikotarpiu prašymų Jums teikti nereikės.'},
];


@Component({
  selector: 'app-donations',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './donations.component.html',
  styleUrl: './donations.component.css'
})
export class DonationsComponent {
  requestImageUrl: string = "../assets/donations/2proc_1.jpg";
  formImageUrl: string = "../assets/donations/2proc_2.jpg";
  formUrl: string = "../assets/donations/fr0512.pdf";
  howToFillOutFormUrl: string = "../assets/donations/formos_pildymo_taisykles.pdf";
  declarationUrl: string = "https://deklaravimas.vmi.lt/lt/Pradinis_Prisijungimo_puslapis/Prisijungimasperisorinessistemas.aspx";
  helpUrl: string = "https://www.vmi.lt/evmi/pagalbos-sistema";

  displayedColumns: string[] = ['fields', 'name', 'additionalInfo'];
  dataSource = FORM_DATA;
}
