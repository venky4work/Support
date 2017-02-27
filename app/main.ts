import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import {AppModule} from './app.module'

//Load the root by module dynamic/just-in-time compilation
//to create Module factory object
platformBrowserDynamic().bootstrapModule(AppModule);