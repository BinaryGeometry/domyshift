import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { AngularQueryDevtools } from '@tanstack/angular-query-devtools-experimental';
import { lastValueFrom } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'list-thing',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AngularQueryDevtools],
  template:`
  <div>
    @if (query.isPending()) {
        Loading...
    }

    @if (query.error()) {
        An error has occurred: {{ query.error()?.message }}
    }

    @if (query.data(); as data) {
        <h1>Name: {{ data.name }}</h1>
        <p>Description: {{ data.description }}</p>
        <strong>👀 {{ data.subscribers_count }}</strong>
        <strong>✨ {{ data.stargazers_count }}</strong>
        <strong>🍴 {{ data.forks_count }}</strong>
    }

    <angular-query-devtools initialIsOpen />
  </div>
  `,
  styleUrl: './list-thing.component.scss'
})
export class ListThingComponent{
  
  reposService = inject(ApiService);

  query = injectQuery(() => ({
      queryKey: ['repoData'],
      queryFn: () =>
        lastValueFrom(
          this.reposService.getAllGalaxys()
        ),
    })
  )
}