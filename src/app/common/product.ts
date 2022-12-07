import { Property } from './property';

export class Product {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public unitsInStock: number,
    public unitType: string,
    public unitPrice: number,
    public imageUrl: string,
    public status: string,
    public manufacturer: string,
    public country: string,
    public properties: Property[]
  ) {}
}
