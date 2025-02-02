import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

  skillList = [
    {
      'id':1,
      'name': 'Spring Boot',
      'path': '/assets/skills/spring-boot.svg'
    },
    {
      'id':1,
      'name': 'Java',
      'path': '/assets/skills/java.svg'
    },
    {
      'id':2,
      'name': 'Angular',
      'path': '/assets/skills/angular.svg'
    },
    {
      'id':3,
      'name': 'React',
      'path': '/assets/skills/react.svg'
    },
    {
      'id':4,
      'name': 'MySQL',
      'path': '/assets/skills/mysql.svg'
    },
    {
      'id':5,
      'name': 'PostgreSQL',
      'path': '/assets/skills/postgresql.svg'
    },
    {
      'id':6,
      'name': 'JavaScript',
      'path': '/assets/skills/javascript-js-square.svg'
    },
    {
      'id':7,
      'name': 'TypeScript',
      'path': '/assets/skills/typescript.svg'
    },
    {
      'id':8,
      'name': 'Docker',
      'path': '/assets/skills/docker.svg'
    },
    {
      'id':9,
      'name': 'Jenkins',
      'path': '/assets/skills/jenkins.svg'
    },
    {
      'id':10,
      'name': 'Socket.io',
      'path': '/assets/skills/socket.svg'
    },
    {
      'id':11,
      'name': 'AWS',
      'path': '/assets/skills/amazon-aws.svg'
    }
  ]

}
