export interface User {
  id: number;
  name: string;
  img: string;
  username: string;
}

export interface DataUser {
  user: {
    item: User
  }
}