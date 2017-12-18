import { Injectable } from '@angular/core';
import { Members } from './members.model';
import { MEMBERS } from './mock-members';


@Injectable()
export class MembersService {

  constructor() { }

  getMembers() {
    return MEMBERS;
  }

  getMembersById(membersId: number){
    for (var i = 0; i <= MEMBERS.length - 1; i++) {
      if (MEMBERS[i].id === membersId) {
        return MEMBERS[i];
      }
    }
  }

}
