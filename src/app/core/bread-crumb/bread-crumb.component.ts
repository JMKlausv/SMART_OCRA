import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss']
})
export class BreadCrumbComponent implements OnInit {
  public data: any = null;
  @Input() title: any;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.data = JSON.parse(localStorage.getItem('url')!)
    console.log(this.data)
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
      
        let currentRoute:ActivatedRoute | null = this.route.root;
         
        
        do {
          const childrenRoutes = currentRoute.children;
          currentRoute = null;
          childrenRoutes.forEach(route => {
            if (route.outlet === 'primary') {

              this.data = route.snapshot.data;
              localStorage.setItem('url', JSON.stringify(this.data));
              currentRoute = route;
            }
          });
        } while (currentRoute);
      });
   
  }

}
