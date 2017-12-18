import {  MembersService } from '../members.service'
import { Component, OnInit } from '@angular/core';
import { Members } from '../members.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.css'],
  providers: [MembersService]
})
export class ListMembersComponent implements OnInit{
  members: Members[];
  // = [
  //   new Members("Gyles", "Senior", "Programming", "Yes", 1),
  //   new Members("RJ", "Junior", "Public Health", "Yes", 2),
  //   new Members("Theana", "Sophomore", "Undeclared", "No", 3),
  //   new Members("Cherry", "Freshman", "Undeclared", "No", 4)
  // ];

  constructor(private router: Router, private membersService: MembersService){}

  ngOnInit(){
    this.members = this.membersService.getMembers();
  }

  goToDetailPage(clickedMembers: Members) {
    this.router.navigate(['members', clickedMembers.id]);
  };
}
