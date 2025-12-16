import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

// Punto de entrada del frontend (Angular standalone bootstrap)
bootstrapApplication(AppComponent, appConfig).catch((err: unknown) =>
  console.error(err),
);
