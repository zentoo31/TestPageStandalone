import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { Housinglocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housinglocation : Housinglocation | undefined;
  
  constructor(){
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housinglocation = this.housingService.getHousingLocationById(housingLocationId);
  }

}
