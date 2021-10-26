import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public links = [
    { label: 'Home', route: '/all-pokemons' },
    { label: 'My collection', route: '/my-pokemons' },
  ];
}
