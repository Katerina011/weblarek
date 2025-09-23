import { Api } from "./Api";
import { IProductServer, IApiResponse, IOrderData, IApi, ApiPostMethods} from "../../types";

export class ProductApi extends Api implements IApi{

    constructor(baseUrl: string, options: RequestInit = {}) {
        super(baseUrl, options);
    }
    getProduct(): Promise<IProductServer[]> {
        return this.get<IProductServer[]>('/product/')
    }

    postOrder(orderData: IOrderData): Promise<IApiResponse> {
        return this.post<IApiResponse>('/order/', orderData)
    }

    get<T extends object>(uri: string): Promise<T> {
        return this.get<T>(uri);
    }

    post<T extends object>(uri: string, data: object, method?: ApiPostMethods): Promise<T> {
        return this.post<T>(uri, data, method);
    }
}