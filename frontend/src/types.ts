export interface User {
    id: number;
    name: string;
    age: number;
  }
  
  export interface Transaction {
    id: number;
    description: string;
    value: number;
    type: "despesa" | "receita";
    userId: number;
  }
  