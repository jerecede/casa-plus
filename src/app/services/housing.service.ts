import { Injectable } from '@angular/core';
import { HousingLocation } from '../model/housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {

  readonly baseUrl = 'http://localhost:3000/locations';
  
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    // const data = fetch(this.baseUrl)
    // .then(resp => resp.json()) 
    // .catch(err => console.error(err));
    // return data;

    // const data = await fetch(this.baseUrl);
    // if(data){
    //   const locations = await data.json();
    //   if(locations){
    //     return locations;
    //   }
    // }
    // return [];

      const data = await fetch(this.baseUrl);
      return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | null> {
    // const url = this.baseUrl + '/' + id;
    // const data = await fetch(url);
    // const location = await data.json();
    // if(location){
    //   return location;
    // }
    // return null;
    
    const url = this.baseUrl + '/' + id;
    const data = await fetch(url);
    return data.json() ?? null;
  }

  submitApplication(firstName: string, lastName: string, email: string){
    console.log(`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`);
  }
}