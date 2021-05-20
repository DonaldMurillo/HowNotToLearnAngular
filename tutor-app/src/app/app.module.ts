import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ViewsModule, // #(not)Important! hmmm...
	],
	providers: [],
	bootstrap: [AppComponent] // #(not)Important! For over-achievers only
})
export class AppModule { }
