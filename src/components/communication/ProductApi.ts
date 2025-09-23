import { Api } from "../base/Api";
import { IProductServer, IApiResponse, IOrderData} from "../../types";

export class ProductApi extends Api {

    constructor(baseUrl: string, options: RequestInit = {}) {
        super(baseUrl, options);
    }
    getProduct(): Promise<IProductServer[]> {
        return this.get<IProductServer[]>('/product/')
    }

    postOrder(orderData: IOrderData): Promise<IApiResponse> {
        return this.post<IApiResponse>('/order/', orderData)
    }

}