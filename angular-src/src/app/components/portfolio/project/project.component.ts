import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { ProjectsService } from '../../../services/projects.service';
import * as _ from 'lodash';
import {
  ScrollToConfigOptions,
  ScrollToService
} from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  private index: number = null;
  private projectId: string = null;
  public viewSubProject = 0;

  private swipeCoord?: [number, number];
  private swipeTime?: number;

  public isLoadingImg = true;

  constructor(
    private _projectsService: ProjectsService,
    private _router: Router,
    private _scrollToService: ScrollToService,
    private _route: ActivatedRoute
  ) {
    const config: ScrollToConfigOptions = {
      target: 'portfolio',
      duration: 0
    };

    this._scrollToService.scrollTo(config);

    this.projectId = this._route.snapshot.params['project'];
  }

  ngOnInit() {}

  get project() {
    if (!this.projectId) {
      return null;
    }
    if (!this.index) {
      this.index = _.findIndex(this._projectsService.projects, project => {
        return project.id === this.projectId;
      });
    }
    if (this.index === -1) {
      return null;
    }
    return this._projectsService.projects[this.index];
  }

  next() {
    if (this.viewSubProject === this.project.subProjects.length - 1) {
      return;
    }
    this.isLoadingImg = true;
    this.viewSubProject++;
  }

  previous() {
    if (this.viewSubProject === 0) {
      return;
    }
    this.isLoadingImg = true;
    this.viewSubProject--;
  }

  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [
      e.changedTouches[0].pageX,
      e.changedTouches[0].pageY
    ];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [
        coord[0] - this.swipeCoord[0],
        coord[1] - this.swipeCoord[1]
      ];
      const duration = time - this.swipeTime;

      if (
        duration < 1000 &&
        Math.abs(direction[1]) < Math.abs(direction[0]) &&
        Math.abs(direction[0]) > 30
      ) {
        const swipe = direction[0] < 0 ? 'next' : 'previous';
        if (swipe === 'next') {
          this.next();
        } else {
          this.previous();
        }
      }
    }
  }

  onLoad() {
    this.isLoadingImg = false;
  }
}
