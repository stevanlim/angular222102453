import { RouterModule, Routes } from '@angular/router'; 
import { DashboardComponent } from './dashboard/dashboard.component'; 
import { LoginComponent } from './login/login.component'; 
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { SignupComponent } from './signup/signup.component';

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" }, 
    { path: "admin", component: AdminComponent },
    { path: "dashboard", component: DashboardComponent }, 
    { path: "login", component: LoginComponent },
    { path: "signup", component: SignupComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot (routes) ], 
    exports: [ RouterModule ]
})

export class AppRoutes {}