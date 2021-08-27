import { Page404Component } from './pages/page404/page404.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "contacts", component: ContactPageComponent },
  { path: "blog", component: BlogComponent,
      children: []
  },
  { path: "admin", component: AdminComponent },
  { path: "**", component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
