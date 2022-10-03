export type Houses = {
  name: string;
  region: string;
  coatOfArms: string;
  words?: string;
  url?: string;};

export interface IProductsStore {
  getHousesList(selectedCategory: string): Promise<void>;
  
}
