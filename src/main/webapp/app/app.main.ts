import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { JoinAppModule } from './app.module';

if (module['hot']) {
    module['hot'].accept();
}

platformBrowserDynamic()
    .bootstrapModule(JoinAppModule, { preserveWhitespaces: true })
    .then(success => console.log(`Application started`))
    .catch(err => console.error(err));
