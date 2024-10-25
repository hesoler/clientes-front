export interface Name {
  first: string;
  last: string;
}

export interface Client {
  id: string;
  name: Name;
  email: string;
  createdAt: string;
}

export type Clients = Client[]
