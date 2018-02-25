
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitProfileService {
    private username: string;
    private client_id = '3f439212f7352910dcf2';
    private client_secret = 'ae7a1c5c5d90106e9c2bfdfff8c71427af4d39d6';

    constructor(private _http: Http) {
        console.log('Github Service is ready');
         this.username='TheMulkyWay';
       // this.username = 'bradtraversy';
    }


    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());

    }


    getRepos() {
        return this._http.get('http://api.github.com/users/' + this.username + '/repos?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());

    }

    updateUser(username: string) {
        this.username = username;

    }



}

