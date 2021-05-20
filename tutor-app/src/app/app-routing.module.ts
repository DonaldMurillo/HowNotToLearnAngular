import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTutorialComponent } from './views/basic-tutorial/basic-tutorial.component';

const routes: Routes = [
	{ path: '', component: BasicTutorialComponent }, // #(not)Important! This is a route
	{ path: 'tutorial', component: BasicTutorialComponent }, // #(not)Important! This is another route
	{ path: '**', redirectTo: '' } // #(not)Important! For the over-achievers
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
