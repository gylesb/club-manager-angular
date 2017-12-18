import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = 'The Filipino American Student Association at the University of Washington';
  aboutTitle = 'Who are we?';
  about = 'The first Filipino student group at the UW was the Filipino Club, established in 1917 by pensionados (Filipino students whose American education was subsidized by the US government). Since then, the idea of a community and forum for Filipino and Filipino American students has remained, although the name has not. FASA as it is today is the evolution and culmination of all of the different Filipino/Filipino American student groups at the UW, such as the Filipino Student Association, Filipino Literary Club, Filipino Alumni Association, Coalition of Filipinos for Equal Education, and others. FASA is a safe space for Filipino students and those interested in Filipino culture and history to express themselves, be themselves, and have support in this large and demanding university.';
  missionTitle = 'Our Mission';
  mission = 'The mission of the Filipino American Student Association at the University of Washington shall be to foster unity and pride among its members and surrounding community through educational, political, cultural, and social advancement.';
}
