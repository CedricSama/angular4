import {Component, OnInit} from '@angular/core';
import {TpService} from "../../services/tp.service";

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
data: any[] = [];
    fieldsTodos: any[] = ['id', 'titre','body','user.email'];
    constructor(private tpService: TpService) {
    }

    ngOnInit() {
        this.tpService.loadPosts().subscribe((posts) => {
            this.tpService.posts = posts;
            this.tpService.loadUsers().subscribe((users) => {
                this.tpService.users = users;
                this.reorganise();
                //ici reorganiser les tableaux pour le croisement des informations

            });
        });
    }


    reorganise() {
        for (var i in this.tpService.posts) {
            var post = this.tpService.posts[i];
            post.user = this.tpService.users.filter(function (user) {
                return user.id == post.userId;
            })[0];
        }
        this.data=this.tpService.posts;
        console.log(this.tpService.posts)
    }

    findUserById(id) {

    }
}
