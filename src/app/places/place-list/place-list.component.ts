import { Component } from '@angular/core';
import { Place } from '../place';
import { PlaceDetailComponent } from '../place-detail/place-detail.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-place-list',
  standalone: true,
  imports: [PlaceDetailComponent, CommonModule],
  templateUrl: './place-list.component.html',
  styleUrl: './place-list.component.css'
})
export class PlaceListComponent {
  places: Place[] = [
    {
      title: 'Skautų kalnas ir aukuras Zarasuose',
      description: 'Magučių miške, rytiniame Zarasaičio ežero krante yra 170 m virš jūros lygio iškilusi kalva – aukščiausia vieta Zarasų miesto ribose, vadinama Skautų kalnu. Visa kalva apaugusi mišku, tik viena kryptimi – į šiaurės rytus, atsiveria graži apylinkių panorama. Pačioje kalno viršūnėje stovi tašyto akmens skautų aukuras, ant kurio iškaltas skautų ženklas su šūkiu „Budėk!“.',
      imageUrl: '../../assets/places/skautu-kalnas.jpg'
    },
    {
      title: 'Europos skauto Vytauto Šliogerio pėda Teatro aikštėje Klaipėdoje',
      description: "",
      imageUrl: '../../assets/places/sliogerio_peda.jpg'
    },
    {
      title: 'Lietuvių skautų sąjungos kryžius',
      description: "",
      imageUrl: '../../assets/places/lss_kryzius.jpg'
    },
    {
      title: 'LS Tautinės stovyklos „Nemunaitis 1998“ paminklinis akmuo',
      description: "",
      imageUrl: '../../assets/places/ls_stovyklos_akmui.jpg'
    },
    {
      title: 'Skautų sodintas ąžuoliukas Stasio Girėno gimtinėje-muziejuje',
      description: "",
      imageUrl: '../../assets/places/azuoliukas.jpg'
    },
  ];
}
