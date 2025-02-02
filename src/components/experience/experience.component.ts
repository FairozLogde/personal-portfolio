import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experienceList = [
    {
      "id":1,
      "logo":"/assets/experience/cropped-weg-logo-1.png",
      "company":"WEQ Technologies LLP",
      "experienceRange":"Oct 2024 - Present",
      "designation":"Tech Lead",
      "description":"WEQ Technologies LLP is a software development company that provides software solutions to clients. I am responsible for leading the development team, managing the project, and ensuring the project is delivered on time. I also work closely with the client to understand their requirements and provide them with the best possible solution."
    },
    {
      "id":2,
      "logo":"/assets/experience/cropped-weg-logo-1.png",
      "company":"WEQ Technologies LLP",
      "experienceRange":"Oct 2022 - Oct 2024",
      "designation":"Sr. Software Developer (Java)",
      "description":"WEQ Technologies LLP is a software development company that provides software solutions to clients. I am responsible for leading the development team, managing the project, and ensuring the project is delivered on time. I also work closely with the client to understand their requirements and provide them with the best possible solution."
    },
    {
      "id":3,
      "logo":"/assets/experience/cropped-weg-logo-1.png",
      "company":"WEQ Technologies LLP",
      "experienceRange":"April 2021 - Oct 2022",
      "designation":"Jr. Software Developer (Java)",
      "description":"WEQ Technologies LLP is a software development company that provides software solutions to clients. I am responsible for leading the development team, managing the project, and ensuring the project is delivered on time. I also work closely with the client to understand their requirements and provide them with the best possible solution."
    },
  ]
}
