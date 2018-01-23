import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Project } from './project';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ProjectService {

  constructor(private http: HttpClient) { }

  /*async getPosts(tag: string): Observable<Project[]> {
    let params: URLSearchParams = new URLSearchParams();
    let projects: Project[] = null;
// set params to go to URL
    //params.set('email', model.email);
    //params.set('first_name', model.first_name);

    projects = this.getProjectsRest(tag);

    return of(projects);
  }

  async getProjectsRest(tag: string): Projects[]{
    let projects: Project[] = null;

    this.http.get('https://public-api.wordpress.com/rest/v1.1/sites/stonemonkeystudioscom.wordpress.com/posts')
        .subscribe((res) => {
            //console.log(res);
            projects = this.toProjects(res);
            return of(projects);
// Map the values in the response to useable variables
            //this.auth.user.email = res.user.email;
            //this.auth.user.first_name = res.user.first_name;
        },
      err => {
        console.log('Error retrieving WP posts');
        return of(projects);
      });
  }

  toProjects(res: Object): Project[]{
    let posts: Object[] = res['posts'];
    let projects: Project[] = new Array<Project>(posts.length);

    for (var i = 0; i < posts.length; i++){
      if (posts[i] == null || posts[i] == undefined || posts[i] == '')
        continue;

      let project: Project = new Project();

      projects[i] = project;
      projects[i].srcpath = posts[i]['featured_image'];
      projects[i].title = posts[i]['title'];
      projects[i].description = posts[i]['content'];
    }

    console.log('Returning: ' + projects.length);
    return projects;
  }*/
}