import { Api } from "../base/Api";
import { IProduct, IApiResponse, IOrderData} from "../../types";

export class ProductApi extends Api {

    constructor(baseUrl: string, options: RequestInit = {}) {
        super(baseUrl, options);
    }
    getProduct(): Promise<IProduct[]> {
        return this.get<IProduct[]>('/product/')
    }

    postOrder(orderData: IOrderData): Promise<IApiResponse> {
        return this.post<IApiResponse>('/order/', orderData)
    }

}