export interface ownerJson {
  firstName : string;
  lastName: string;
}

export interface PetJson {

  id: number;
  name: string;
  petKind : string;
  breed : string;

  owner : ownerJson;

  picture : string;
}


