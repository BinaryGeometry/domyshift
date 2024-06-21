import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListThingComponent } from './list-thing/list-thing.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListThingComponent],
  template: `
  <main class="main">
    <div class="content">
      <router-outlet />
      <list-thing />
    </div>
  </main>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front';
}
