import { IProduct, IProductData } from "../../types";
export class CatalogModel implements IProductData{
   protected  _items: IProduct[];
   
   constructor () {
       this._items = [];
   }

   set items(data: IProduct[]) {
    this._items = data;
   }

   get items() {
      return this._items;
   }

   getItem(id: string): IProduct {
      const item = this._items.find(item => item.id === id);
      if(!item) {
         throw new Error(`Товар с ID ${id} не найден!`)
      }
      return item;
   }

}