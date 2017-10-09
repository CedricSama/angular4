import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class TpService {
    urlPosts = "https://jsonplaceholder.typicode.com/posts";
    urlUsers = "https://jsonplaceholder.typicode.com/users";
    posts:any[] = [];
    users = [];
    constructor(private http: Http){
    }

    loadPosts(){
        return this.http.get(this.urlPosts).map(response=> response.json());
    }
    loadUsers(){
        return this.http.get(this.urlUsers).map(response=>{
            return response.json();
        });
    }


}