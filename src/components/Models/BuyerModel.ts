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

    isValid(): Record<string, string> {
        const errors: Record<string, string> = {};

        if (!this._payment) {
            errors.payment = 'Не выбран способ оплаты!';
        }

        if (!this._email) {
            errors.email = 'Не указан email!';
        }

        if (!this._phone) {
            errors.phone = 'Не указан номер телефона!';
        }

        if (!this._address) {
            errors.address = 'Не указан адрес доставки!';
        }

        return errors;
    }
}