import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  BRANDS_PATH,
  CAMPAIGNS_PATH,
  LOGIN_PATH, MESSAGES_PATH,
  PRODUCTS_PATH,
  PUBS_PATH, QUIZZES_PATH, STATISTICS_PATH,
  USERS_PATH
} from "./core/util/route.properties";

const routes: Routes = [
  { path: USERS_PATH, loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule) },
  { path: BRANDS_PATH, loadChildren: () => import('./pages/brands/brands.module').then(m => m.BrandsModule) },
  { path: CAMPAIGNS_PATH, loadChildren: () => import('./pages/campaigns/campaigns.module').then(m => m.CampaignsModule) },
  { path: LOGIN_PATH, loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: PRODUCTS_PATH, loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule) },
  { path: PUBS_PATH, loadChildren: () => import('./pages/pubs/pubs.module').then(m => m.PubsModule) },
  { path: QUIZZES_PATH, loadChildren: () => import('./pages/quizzes/quizzes.module').then(m => m.QuizzesModule) },
  { path: STATISTICS_PATH, loadChildren: () => import('./pages/statistics/statistics.module').then(m => m.StatisticsModule) },
  { path: MESSAGES_PATH, loadChildren: () => import('./pages/messages/messages.module').then(m => m.MessagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
