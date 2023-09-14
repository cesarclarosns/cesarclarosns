import { ApplicationRef, Injectable } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { concat, filter, first, interval, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(appRef: ApplicationRef, swUpdate: SwUpdate) {
    /**
     * Check for updates on a schedule
     */

    const appIsStable$ = appRef.isStable.pipe(first((isStable) => isStable));
    const everyFiveMinutes$ = interval(5 * 60 * 1000);
    const everyFiveMinutesOnceAppIsStable$ = concat(
      appIsStable$,
      everyFiveMinutes$,
    );

    everyFiveMinutesOnceAppIsStable$.subscribe(async () => {
      try {
        const updateFound = await swUpdate.checkForUpdate();
        if (updateFound) {
          document.location.reload();
        }
      } catch (err) {
        console.error(err);
      }
    });
  }
}
