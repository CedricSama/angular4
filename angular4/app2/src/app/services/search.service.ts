import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {

    url: string = "https://jsonplaceholder.typicode.com/posts";
    todosList: any[] = [];
    constructor(private http: Http) {
    }
    getAllTodos() {
        return this.http.get(this.url).map(res => res.json());
    }
    findTodos(titre) {
        return this.http.get(this.url + '/search/' + titre).map(res => res.json());
    }


    delete(todo) {
        return this.http.delete(this.url, {body: todo}).map(res => res.json());
    }

    update(todo) {
        return this.http.post(this.url, todo).map(res => res.json());
    }

    add(todo) {
        return this.http.put(this.url,  todo).map(res => res.json());
    }




}
