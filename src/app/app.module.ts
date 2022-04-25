import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ErrorPageComponent } from './component/error-page/error-page.component';
import { ModalComponent } from './component/modal/modal.component';

import { InterceptorService } from './service/_shared/_interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    ModalComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    ModalModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
