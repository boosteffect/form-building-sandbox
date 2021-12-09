import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditAppComponent } from './edit-app/edit-app.component';
import { DndModule } from 'ngx-drag-drop';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { FormlyStaticComponent } from './formly-static/formly-static.component';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyDesignerComponent } from './formly-designer/formly-designer.component';
import { FormlyDynamicComponent } from './formly-dynamic/formly-dynamic.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: '', component: EditAppComponent },
  { path: 'formly-static', component: FormlyStaticComponent },
  { path: 'formly-designer', component: FormlyDesignerComponent },
  { path: 'formly-dynamic', component: FormlyDynamicComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    EditAppComponent,
    FormlyStaticComponent,
    FormlyDesignerComponent,
    FormlyDynamicComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    SweetAlert2Module.forRoot(),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DndModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({ extras: { lazyRender: true } }),
    FormlyBootstrapModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
