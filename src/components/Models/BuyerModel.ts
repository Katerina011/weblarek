import { IBuyer, IBuyerData, orderInfo, contactsInfo } from "../../types";
export class BuyerModel implements IBuyer, IBuyerData{
    protected _payment: 'card' | 'cash' | '' = '';
    protected _email: string = '';
    protected _phone: string = '';
    protected _address: string ='';

    get buyer():IBuyer {
        return {
            payment: this._payment,
            email: this._email,
            phone: this._phone,
            address: this._address,
        };
    }

    set payment(value: 'card' | 'cash' | '') {
        this._payment = value;
    }

    set email(value: string) {
        this._email = value;
    }

    set phone(value: string) {
        this._phone = value;
    }

       set address(value: string) {
        this._address = value;
    }

    setBuyerData(buyerData: IBuyer): void {
        this._payment = buyerData.payment;
        this._email = buyerData.email;
        this._phone = buyerData.phone;
        this._address = buyerData.address;
    }

     orderValidation(data: Record<keyof orderInfo, string>): boolean {
        if (!data.payment) {
            console.error('Не выбран способ оплаты');
            return false;
        }
        if (!data.address) {
            console.error('Не указан адрес доставки');
            return false;
        }
        return true;
    }

      contactsValidation(data: Record<keyof contactsInfo, string>): boolean {
        if (!data.email) {
            console.error('Не указан email');
            return false;
        }
        if (!data.phone) {
            console.error('Не указан номер телефона');
            return false;
        }
        return true;
    }
}