import { Injectable } from '@angular/core';
import {Pet} from "./pet";
import {PetJson} from "./PetJson";
import {map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PetDataService {

  constructor(private http: HttpClient) {
  }

  private static imageFolder: string = 'http://tetervak.dev.fast.sheridanc.on.ca/exams/angular/images/';

  private static json2Pet(petJson : PetJson) : Pet {
    const pet: Pet = new Pet();
    pet.id = petJson.id;
    pet.name = petJson.name;
    pet.petKind = petJson.petKind;
    pet.breed = petJson.breed;

    pet.petFirstName = petJson.owner.firstName;
    pet.petLastName = petJson.owner.lastName;

    pet.picture = this.imageFolder + petJson.picture;

    return pet;
  }

  public getPetByUrl(url: string): Observable<Pet | undefined> {
    return this.http.get<PetJson>(url).pipe(
      map(pet => {
        return PetDataService.json2Pet(pet);
      })
    );
  }

}
