import { Component, OnInit, Input } from '@angular/core';
import { Status } from '../status';
import { CommentService } from '../../comment.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
  providers: [CommentService]
})
export class StatusComponent implements OnInit {
  @Input() status: Status;
  txtComment = '';

  constructor(private commentService: CommentService) { }

  ngOnInit() {
  }

  onSubmit(formValue) {
    console.log(formValue);
    this.txtComment = '';
  }
}
