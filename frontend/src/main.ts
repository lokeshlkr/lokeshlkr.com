import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './00_app/app.config';
import { AppComponent } from './00_app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
