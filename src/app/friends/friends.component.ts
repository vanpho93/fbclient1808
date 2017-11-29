import { Component, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';

interface User {
  _id: string;
  name: string;
  relationship: Relationship;
}

enum Relationship {
  SENT_REQUESTED, INCOMMING_REQUEST, NONE, FRIEND
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
  sentRequested: User[];
  incomingRequests: User[];
  friends: User[];
  myId: string;
  async ngOnInit() {
    await Promise.all([
      this.friendService.getAllPeople()
      .then(people => this.users = people),
      this.friendService.getAllRelationship()
      .then(me => {
        this.sentRequested = me.sentRequested;
        this.friends = me.friends;
        this.incomingRequests = me.incomingRequests;
        this.myId = me._id;
      })
    ]);
    this.friends.forEach(user => {
      const yourFriend = this.users.find(u => u._id === user._id);
      yourFriend.relationship = Relationship.FRIEND;
    });
    this.sentRequested.forEach(user => {
      this.users.find(u => u._id === user._id).relationship = Relationship.SENT_REQUESTED;
    });
    this.incomingRequests.forEach(user => {
      this.users.find(u => u._id === user._id).relationship = Relationship.INCOMMING_REQUEST;
    });
  }
  addFriend(id) {
    this.friendService.addFriend(id);
    this.users.find(user => user._id === id).relationship = Relationship.SENT_REQUESTED;
  }

  acceptFriend(id) {
    this.friendService.acceptFriend(id);
    this.users.find(user => user._id === id).relationship = Relationship.FRIEND;
  }
}
