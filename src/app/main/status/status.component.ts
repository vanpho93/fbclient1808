import { Component, OnInit, Input } from '@angular/core';
import { Status } from '../status';
import { CommentService } from '../../comment.service';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  providers: [CommentService]
})
export class StatusComponent implements OnInit {
  @Input() status: Status;
  txtComment = '';

  constructor(
    private commentService: CommentService,
    private statusService: StatusService
  ) { }

  ngOnInit() {
  }

  onSubmit(formValue) {
    this.commentService.sendComment(this.status._id, formValue.comment)
    .then(comment => this.status.comments.push(comment));
    this.txtComment = '';
  }

  onHitLike() {
    this.statusService.hitLike(this.status._id)
    .then(x => console.log(x));
  }
}
