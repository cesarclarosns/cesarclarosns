import { Injectable } from '@angular/core';
import { SwUpdate, VersionReadyEvent } from '@angular/service-worker';
import { filter, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromptUpdateService {
  constructor(swUpdate: SwUpdate) {
    swUpdate.versionUpdates
      .pipe(
        tap((evt) => {
          console.log('Version event:', { evt });
        }),
        filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'),
      )
      .subscribe((evt) => {
        document.location.reload();
      });
  }
}
