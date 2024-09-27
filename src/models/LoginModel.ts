import {ApiModel} from "@/models/ApiModel";
import {HttpMethod} from "@/enums/httpMethods.emuns";

export class LoginModel extends ApiModel {
    async login(login: string, password: string) {
        return await this.sendRequest({
            method: HttpMethod.POST,
            url: 'login',
            body: {
                login: login,
                password: password,
            }
        });
    }
}