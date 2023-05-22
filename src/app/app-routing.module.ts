import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  {path:"", component:BodyComponent},
  {path:"skills", component:SkillsComponent},
  {path:"experience", component:ExperienceComponent},
  {path:"projects", component:ProjectsComponent},
  {path:"contact", component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
