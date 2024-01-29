import { Location } from '@angular/common'; // Import Location
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as membersData from '../../database/members.json';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css',
})
export class MemberDetailComponent implements OnInit {
  memberId: number = 0;
  memberList = (membersData as any).default;
  member: any;

  constructor(private route: ActivatedRoute, private _location: Location) {} // Declare _location

  back() {
    this._location.back();
  }

  ngOnInit(): void {
    this.memberId = parseInt(this.route.snapshot.params['id']);
    this.member = this.memberList.find((member: any) => member.id === this.memberId);
  }
}
