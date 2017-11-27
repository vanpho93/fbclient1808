import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';

interface User {
  _id: string;
  name: string;
}

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
  providers: [FriendService]
})

export class FriendsComponent implements OnInit {
  constructor(private friendService: FriendService) { }
  users: User[];
  ngOnInit() {
    this.friendService.getAllPeople()
    .then(people => this.users = people);
  }
  addFriend(id) {
    this.friendService.addFriend(id);
  }
}
