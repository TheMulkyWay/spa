import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppModuleShared } from './app.shared.module';
import { AppComponent } from './components/app/app.component';
import { HttpModule } from '@angular/http';


@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        BrowserModule, BrowserAnimationsModule,
        AppModuleShared,
        HttpModule
    ],
    providers: [
        {
            provide: 'BASE_URL',
            useFactory: getBaseUrl 
        }
        

    ]
})
export class AppModule {
}

export function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
