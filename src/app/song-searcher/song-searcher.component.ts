import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-song-searcher',
  templateUrl: './song-searcher.component.html',
  styleUrls: ['./song-searcher.component.scss']
})
export class SongSearcherComponent {
  private breakpointObserver = inject(BreakpointObserver);

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 2, rows: 2 },
          { title: 'Card 2', cols: 2, rows: 2 },

        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 2 },
        { title: 'Card 2', cols: 2, rows: 2 },



      ];
    })
  );
}
