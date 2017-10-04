import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class SearchService {

    url: string = "http://127.0.0.1:8080/todo";

    constructor(private http: Http) {
    }

    getAllTodos() {
        return this.http.get(this.url).map(res => res.json());
    }

    findTodos(titre) {
        return this.http.get(this.url + '/search/' + titre).map(res => res.json());
    }







}
