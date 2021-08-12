import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog'
import { LayoutModule } from '@angular/cdk/layout';
import { ProfilComponent } from './components/profil/profil.component';
import { MatCarouselModule } from '@ngbmodule/material-carousel';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HTMLEscapeUnescapeModule } from 'html-escape-unescape';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { MatSelectModule } from '@angular/material/select';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AdminComponent } from './pages/admin/admin.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Page404Component } from './pages/page404/page404.component';
import { InputTechsModalComponent } from './components/input-techs-modal/input-techs-modal.component';
import { TechsListComponent } from './components/techs-list/techs-list.component';
import { TechArticlesComponent } from './components/tech-articles/tech-articles.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    ProfilComponent,
    CarouselComponent,
    AdminComponent,
    Page404Component,
    InputTechsModalComponent,
    TechsListComponent,
    TechArticlesComponent,
    ContactFormComponent,
  ],
  imports: [
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HTMLEscapeUnescapeModule,
    LayoutModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDividerModule,
    MatDividerModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatCarouselModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatToolbarModule,
  ],
  providers: [
    InputTechsModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
