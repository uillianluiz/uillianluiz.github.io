import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import {MatCardModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {MatButtonModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import { RoutingModule } from './routing.module';
import { ResumeComponent } from './components/resume/resume.component';
import {MatGridListModule} from '@angular/material';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ProjectsService } from './services/projects.service';
import { ProjectComponent } from './components/portfolio/project/project.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ResumeComponent,
    PortfolioComponent,
    ProjectComponent
  ],
  imports: [
    RoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatGridListModule,
    ScrollToModule.forRoot()
  ],
  providers: [ProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
