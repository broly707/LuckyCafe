export type Product = { id:string; name:string; category:string; price:number; description:string; image:string; vegetarian?:boolean };
export type CartItem = { product:Product; quantity:number };
