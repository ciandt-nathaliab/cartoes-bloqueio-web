import { registerLocaleData } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import localePtBr from '@angular/common/locales/pt';
import { AppComponent } from './app/app.component';

registerLocaleData(localePtBr);

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
