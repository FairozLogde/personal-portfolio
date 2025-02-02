import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../common/header/header.component";
import { AboutMeComponent } from "../components/about-me/about-me.component";
import { SkillsComponent } from "../components/skills/skills.component";
import { ExperienceComponent } from "../components/experience/experience.component";
import { HeroComponent } from "../components/hero/hero.component";
import { MyProjectsComponent } from "../components/my-projects/my-projects.component";
import { ContactMeComponent } from "../components/contact-me/contact-me.component";
import { FooterComponent } from '../common/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [FooterComponent, HeaderComponent, AboutMeComponent, SkillsComponent, 
    ExperienceComponent, HeroComponent, MyProjectsComponent, ContactMeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fairoz-portfolio';
}
