import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ECreationComponent } from './e-creation/e-creation.component';
import { EDetailsComponent } from './e-details/e-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'event', component: ECreationComponent },
    { path: 'event/{id}', component: EDetailsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
