import { IProduct } from "../../types";
export class CartModel {
    protected _items: IProduct[] = [];

    constructor () {};

    hasItem(id: string | number): boolean {
    return this._items.some(item => item.id === id);
}

    addItem(item: IProduct): void {
        if(this.hasItem(item.id)) {
            throw new Error(`Товар с ID ${item.id} уже добавлен!`)
        }
        const itemClone: IProduct = {...item, added: true};
        this._items.push(itemClone);
    
    }

    deleteItem(id: string | number): void {
        this._items = this._items.filter(item => item.id !== id);
    }

     get items() {
      return this._items;
   }

    getTotalItem() {
        return this._items.length;
    }

    getTotalPrice(): number {
        return this._items.reduce((total, item) => total + (item.price ?? 0), 0);
    };

    clear(): void {
        this._items = [];
    }

}