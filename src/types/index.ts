export type Guitar = {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
};

export type CartItem = Guitar & {
  quantity: number;
};

// export type CartItem = Pick<Guitar, "id" | "name" | "price"> & { //Utility types mas usados pick y omit
//   quantity: number;
// };

// export interface CartItem extends Guitar {
//   quantity: number;
// }

// export type GuitarId = Pick<Guitar, "id">;
// export type GuitarId = Guitar["id"]; //Lookup
