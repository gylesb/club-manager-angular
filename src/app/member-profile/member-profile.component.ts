import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Members } from '../members.model';
import {  MembersService } from '../members.service'

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css'],
  providers: [MembersService]
})
export class MemberProfileComponent implements OnInit{

  memberId: number;
  memberToDisplay: Members;

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.membersId = parseInt(urlParameters['id']);
    });
    this.membersToDisplay = this.memberService.getMembersById(this.memberId);
  }

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private membersService: MembersService
  ){}
}

//name: string, public year: string, public major: string, public inMajor: string, public id: number)
