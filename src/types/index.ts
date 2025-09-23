export type ApiPostMethods = 'POST' | 'PUT' | 'DELETE';

export interface IApi {
    get<T extends object>(uri: string): Promise<T>;
    post<T extends object>(uri: string, data: object, method?: ApiPostMethods): Promise<T>;
}

export interface IOrderData {
    products: IProduct[];
    buyer: IBuyer;
}

export interface IApiResponse {
    status: number;
    data: any;
}

export interface IProduct {
    id: string | number;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number | null;
    added?: boolean;
}

export interface IProductData {
    items: IProduct[];
    getItem(id: string | number):IProduct;
}


export interface IBuyer {
    payment: 'card' | 'cash' | '';
    email: string;
    phone: string;
    address: string;
}

export interface IBuyerData {
    setBuyerData(buyerData: IBuyer): void;
    isValid(): Record<string, string>;
}

export type orderInfo = Pick<IBuyer, 'payment' | 'address'>;
export type contactsInfo = Pick<IBuyer, 'email' | 'phone'>;

