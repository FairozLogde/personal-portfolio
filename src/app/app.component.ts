import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../common/header/header.component";
import { AboutMeComponent } from "../components/about-me/about-me.component";
import { SkillsComponent } from "../components/skills/skills.component";
import { ExperienceComponent } from "../components/experience/experience.component";
import { HeroComponent } from "../components/hero/hero.component";
import { MyProjectsComponent } from "../components/my-projects/my-projects.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeaderComponent, AboutMeComponent, SkillsComponent, ExperienceComponent, HeroComponent, MyProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fairoz-portfolio';
}
