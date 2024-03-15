import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ILink } from '../../shared/link';
import { LinkTableComponent } from '../link-table/link-table.component';

const KORP_LINKS_DATA: ILink[] = [
  { url: "http://www.korp.lt", description: "Lietuvos studentų korporacijų puslapis", type: "url" },
  { url: "http://www.akademikai.lt/", description: "Korp! Vytis ir ASD", type: "url" },
  { url: "http://www.republica.lt/", description: "Corp! RePublica", type: "url" },
  { url: "http://www.neolithuania.lt/", description: "Korp! NeoLithuania", type: "url" },
  { url: "http://internet.ktu.lt/lt/student/organiz/tautito.html", description: "Korp! Tautito", type: "url" },
  { url: "http://www.plienas.ktu.lt/", description: "Korp! Plienas", type: "url" },
  { url: "http://www.ateitis.lt/node/97", description: "Korp! Gaja", type: "url" },
  { url: "http://www.kmusa.lt/index.php?Itemid=83&option=com_content", description: "Korp! Fraternitas Lituanica", type: "url" },
  { url: "http://samogitia.mch.mii.lt/KULTURA/Samogitia_laikr.htm", description: "Korp! Samogitia (Akademinio žemaičių jaunimo korporacija)", type: "url" },
];
const SCOUT_ORGS_LINKS_DATA: ILink[] = [
  { url: "http://www.skautai.lt/_juru/", description: "Jūrų skautų konferencija", type: "url" },
  { url: "http://www.lietuvosjuruskautija.lt/", description: "Lietuvos jūrų skautija", type: "url" },
  { url: "http://www.europosskautai.lt/Skautai/", description: "Lietuvos nacionalinė Europos skautų asociacija", type: "url" },
  { url: "http://www.scout.lt, http://www.skautai.lt/", description: "Lietuvos skautija", type: "url" },
  { url: "http://www.skautas.lt/", description: "Lietuvos skautų sąjunga", type: "url" },
  { url: "http://www.skautuva.lt", description: "Lietuvos skaučių seserija", type: "url" },
  { url: "http://www.skautai.lt/_oro_skautai/", description: "Oro skautai", type: "url" },
  { url: "http://scouts.tts.lt/", description: "Visagino skautų organizacija", type: "url" },
  { url: "http://zemaitijosskautai.lt/", description: "Žemaitijos skautų organizacija", type: "url" },
];
const FOREIGN_SCOUT_LINKS_DATA: ILink[] = [
  { url: "http://akademikai.skautai.net/", description: "Akademinis Skautų Sąjūdis", type: "url" },
  { url: "http://www.juruskautai.org/", description: "Lietuvių jūrų skautai JAV (Jūrų skautų tinklas)", type: "url" },
  { url: "http://sese.skautai.net/", description: "Lietuvių skaučių seserija", type: "url" },
  { url: "http://broli.skautai.net/", description: "Lietuvių skautų brolija", type: "url" },
  { url: "http://www.skautai.org/", description: "Lietuvių skautų sąjunga", type: "url" },
];
const LITHUANIAN_UNIVERSITY_LINKS_DATA: ILink[] = [
  { url: "http://www.lka.lt/", description: "Generolo Jono Žemaičio Lietuvos karo akademija", type: "url" },
  { url: "http://www.ism.lt/", description: "ISM Vadybos ir ekonomikos universitetas", type: "url" },
  { url: "http://www.kmu.lt/", description: "Kauno medicinos universitetas", type: "url" },
  { url: "http://www.ktu.lt/lt/", description: "Kauno technologijos universitetas", type: "url" },
  { url: "http://www.ku.lt/", description: "Klaipėdos universitetas", type: "url" },
  { url: "http://www.lkka.lt/", description: "Lietuvos kūno kultūros akademija", type: "url" },
  { url: "http://lmta.lt/web/index.php", description: "Lietuvos muzikos ir teatro akademija", type: "url" },
  { url: "http://www.lva.lt/", description: "Lietuvos veterinarijos akademija", type: "url" },
  { url: "http://www.lzuu.lt/pradzia/lt/", description: "Lietuvos žemės ūkio universitetas", type: "url" },
  { url: "http://www.mruni.eu/lt/", description: "Mykolo Romerio universitetas", type: "url" },
  { url: "http://www.su.lt/", description: "Šiaulių universitetas", type: "url" },
  { url: "http://www.tks.lt/", description: "Telšių kunigų seminarija", type: "url" },
  { url: "http://www.vda.lt/", description: "Vilniaus dailės akademija", type: "url" },
  { url: "http://www.vgtu.lt/", description: "Vilniaus Gedimino technikos universitetas", type: "url" },
  { url: "http://www.vpu.lt/", description: "Vilniaus pedagoginis universitetas", type: "url" },
  { url: "http://www.vu.lt/lt/", description: "Vilniaus universitetas", type: "url" },
  { url: "http://www.vdu.lt/", description: "Vytauto Didžiojo universitetas", type: "url" },
];
const YOUTH_ORGS_LINKS_DATA: ILink[] = [
  { url: "http://www.aiesec.lt/", description: "AIESEC", type: "url" },
  { url: "http://www.ateitis.lt/", description: "Ateitininkų federacija", type: "url" },
  { url: "http://www.jrd.lt/", description: "Jaunimo reikalų departamentas", type: "url" },
  { url: "http://www.jtba.lt/", description: "Jaunimo tarptautinio bendradarbiavimo agentūra", type: "url" },
  { url: "http://www.kaunostalas.lt/", description: "Kauno jaunimo organizacijų sąjunga „Apskritasis stalas“", type: "url" },
  { url: "http://www.moksleiviai.lt/", description: "Lietuvos moksleivių sąjunga", type: "url" },
  { url: "http://www.lsas.lt/", description: "Lietuvos studentų atstovybių sąjunga", type: "url" },
  { url: "http://www.lss.lt/", description: "Lietuvos studentų sąjunga", type: "url" },
  { url: "http://www.lijot.lt/", description: "LiJOT", type: "url" },
  { url: "http://www.vjosas.lt/index.php?cid=406", description: "Vilniaus jaunimo organizacijų sąjunga „Apskritasis stalas“", type: "url" },
];
const OTHER_LINKS_DATA: ILink[] = [
  { url: "http://senas.akademikai.lt/", description: "Senoji akademikų svetainės versija", type: "url" },
  { url: "http://www.vydunofondas.com/", description: "Vydūno fondas", type: "url" },
  { url: "http://www.vdu.lt/Social/edukologija/vyduno.html", description: "Apie Vydūno fondą ir akademikus", type: "url" },
  { url: "http://www.skautai.org/skautu_aidas.php", description: "Skautų Aidas", type: "url" },
  { url: "http://www.smm.lt/", description: "Švietimo ir mokslo ministerija", type: "url" },
  { url: "http://www.scout.org/en", description: "World Organization of the Scout Movement (WOSM)", type: "url" },
  { url: "http://www.osf.lt/", description: "Atviros Lietuvos Fondas", type: "url" },
];

@Component({
  selector: 'app-links-list',
  standalone: true,
  imports: [MatTableModule, LinkTableComponent],
  templateUrl: './links-list.component.html',
  styleUrl: './links-list.component.css'
})
export class LinksListComponent {
  KorpDataSource = KORP_LINKS_DATA;
  ScoutOrgsDataSource = SCOUT_ORGS_LINKS_DATA;
  ForeignScoutDataSource = FOREIGN_SCOUT_LINKS_DATA;
  LithuanianUniversityDataSource = LITHUANIAN_UNIVERSITY_LINKS_DATA;
  YouthOrgsDataSource = YOUTH_ORGS_LINKS_DATA;
  OtherDataSource = OTHER_LINKS_DATA;

  displayedColumns: string[] = ['description', 'url'];
}
