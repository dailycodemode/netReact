let data : number | string;

data = 'hi';

export interface ICar {
  color:string,
  model: string,
  topSpeed?:number
}
const car1:ICar = {
  color:'blue',
  model:'bmw'
}
const car2:ICar = {
  color:'red',
  model:'Merc',
  topSpeed:100
}
const multiply = (x:number, y:number) => {
  return x*y
}

export const cars = [car1, car2];