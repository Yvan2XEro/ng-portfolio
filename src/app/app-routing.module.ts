import { InputRatingModaleComponent } from './components/input-rating-modale/input-rating-modale.component';
import { Page404Component } from './pages/page404/page404.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ShowArticleComponent } from './pages/blog/show-article/show-article.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "contacts", component: ContactPageComponent },
  { path: "about", component: AboutComponent },
  { path: "blog", component: BlogComponent, },
  { path: "blog/articles/:slug", component: ShowArticleComponent },
  { path: "raiting-new", component: InputRatingModaleComponent },
  { path: "admin", component: AdminComponent },
  { path: "not-found", component: Page404Component },
  { path: "**", redirectTo: "not-found" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
