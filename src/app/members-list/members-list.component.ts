import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import * as membersData from '../../database/members.json';

@Component({
  selector: 'app-members-list',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './members-list.component.html',
  styleUrl: './members-list.component.css',
})
export class MembersListComponent {
  memberList = (membersData as any).default;
}
