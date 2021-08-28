
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RequestInterceptor } from './shared/interceptors/request.interceptor';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { BlogComponent } from './pages/blog/blog.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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
import { NavListComponent } from './components/nav-list/nav-list.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { ProjectsListComponent } from './components/projects-list/projects-list.component';
import { RecommandationsListComponent } from './components/recommandations-list/recommandations-list.component';
import { LightboxComponent } from './components/lightbox/lightbox.component';
import { LightboxImageComponent } from './components/lightbox/lightbox-image/lightbox-image.component';
import { UnescapePipe } from './shared/pipes/unescape.pipe';
import { AdminTechsComponent } from './components/admin-techs/admin-techs.component';
import { AdminProjectsComponent } from './components/admin-projects/admin-projects.component';
import { InputRatingModaleComponent } from './components/input-rating-modale/input-rating-modale.component';
import { RaitingComponent } from './components/input-rating-modale/raiting/raiting.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutComponent } from './pages/about/about.component';
import { ArticlesComponent } from './pages/blog/articles/articles.component';
import { ShowArticleComponent } from './pages/blog/show-article/show-article.component';

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
    AboutComponent,
    NavListComponent,
    ServicesListComponent,
    ProjectsListComponent,
    RecommandationsListComponent,
    LightboxComponent,
    LightboxImageComponent,
    UnescapePipe,
    AdminTechsComponent,
    AdminProjectsComponent,
    InputRatingModaleComponent,
    RaitingComponent,
    ContactPageComponent,
    ArticlesComponent,
    ShowArticleComponent,
  ],
  imports: [
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    FlexLayoutModule,
    FormsModule,
    HTMLEscapeUnescapeModule,
    LayoutModule,
    MatBadgeModule,
    MatSnackBarModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDividerModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatInputModule,
    MatListModule,
    MatCarouselModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatRadioModule,
    MatToolbarModule,
  ],
  entryComponents: [
    InputTechsModalComponent,
    LightboxComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
