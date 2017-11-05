import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '../../services/projects.service';
import { Router } from '@angular/router';
import {
  ScrollToService,
  ScrollToConfigOptions
} from '@nicky-lenaers/ngx-scroll-to';
import * as _ from 'lodash';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  public pageLoaded = -1;
  public projectItems = null;

  constructor(
    private _projectsService: ProjectsService,
    private _router: Router,
    private _scrollToService: ScrollToService
  ) {
    if (this._router.url === '/portfolio') {
      const config: ScrollToConfigOptions = {
        target: 'portfolio',
        duration: 1000
      };

      this._scrollToService.scrollTo(config);
    }
  }

  ngOnInit() {}

  get page(){
    return this._projectsService.page;
  }

  set page(page){
    this._projectsService.page = page;
  }

  get pages() {
    return Array(Math.ceil(this._projectsService.projects.length / 6)).fill(1);
  }

  get projects() {
    if (this._projectsService.projects && this.page !== this.pageLoaded) {
      this.projectItems = _.slice(
        this._projectsService.projects,
        6 * this.page,
        6 * this.page + 6
      );
      this.pageLoaded = this.page;
    }
    return this.projectItems;
  }
}
