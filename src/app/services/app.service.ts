import { Injectable } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private swUpdate: SwUpdate) {
    this.swUpdate.versionUpdates
      .pipe(
        tap((evt) => {
          console.log('Version event:', { evt });
        }),
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
      )
      .subscribe((evt) => {
        console.log('Scheduling update to occur in 60s');
        setTimeout(() => {
          document.location.reload();
        }, 60 * 1000);
      });
  }
}
