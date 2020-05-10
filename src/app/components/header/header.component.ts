import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public active = 'Categorias';
  public menu = [
    {
      description: 'Categorias',
      route: '/list',
    },
    {
      description: 'Nova categoria',
      route: '/new',
    },
  ];

  constructor(activatedRoute: Router) {
    activatedRoute.events.subscribe((routeType) => {
      if (routeType instanceof NavigationEnd) {
        this.active = routeType.urlAfterRedirects;
      }
    });
  }

  toggleActive(description) {
    this.active = description;
  }
}
