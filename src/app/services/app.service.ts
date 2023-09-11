import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { PromptUpdateService } from './prompt-update.service';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(swUpdate: SwUpdate, promptUpdate: PromptUpdateService) {}
}
