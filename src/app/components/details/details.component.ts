import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../../services/housing.service';
import { HousingLocation } from '../../model/housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  imports: [ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  casettaService: HousingService = inject(HousingService);

  casetta: HousingLocation | undefined;

  // const firstName = new FormControl('');
  // const lastName = new FormControl('');
  // const email = new FormControl('');
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']); //html non ha bisogno di questo
    this.casettaService.getHousingLocationById(housingLocationId).then(casettina => {
      if(casettina){
        this.casetta = casettina;
      }
    }) //this puo essere usato da html
  }

  submitApplication() {
    this.casettaService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}
