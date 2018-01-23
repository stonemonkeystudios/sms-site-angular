import { Component, OnInit } from '@angular/core';
import { ProjectComponent } from '../project/project.component';
import { Project } from '../project';
import { ProjectService } from '../project.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects : Project[];

  constructor(private projectsService: ProjectService, private http: HttpClient) { 
    this.getPosts('Test');
  }

  ngOnInit() {
  }

  getPosts(tag: string): void{

      this.http.get('https://public-api.wordpress.com/rest/v1.1/sites/stonemonkeystudioscom.wordpress.com/posts')
      .subscribe((res) => {
          this.projects = this.toProjects(res);
      },
    err => {
      console.log('Error retrieving WP posts');
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
  }
}
