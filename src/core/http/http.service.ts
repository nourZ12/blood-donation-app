import { HttpClient} from '@angular/common/http';
import { SignUp } from '../../models/signup.model';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpService {
    constructor(private http: HttpClient){}

    signUpUser(infoUser: SignUp) {
        console.log(infoUser);
        this.http.post('http://localhost:3000/signup', infoUser);
    }
}