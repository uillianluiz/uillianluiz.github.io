import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ResumeComponent } from './components/resume/resume.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectComponent } from './components/portfolio/project/project.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent , data: { state: 'home'}},
  // { path: 'resume', component: ResumeComponent, data: { state: 'resume'} },
  { path: 'portfolio', component: PortfolioComponent , data: { state: 'portfolio'}},
  { path: 'portfolio/:project', component: ProjectComponent , data: { state: 'project'}},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule {}
