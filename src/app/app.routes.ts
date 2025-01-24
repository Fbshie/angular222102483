import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { Dashboard3Component } from './dashboard3/dashboard3.component';
import { MahasiswaComponent } from './mahasiswa/mahasiswa.component';
import { otentikasiGuard } from './otentikasi.guard';
import { ForexComponent } from './forex/forex.component';
import { CuacaComponent } from './cuaca/cuaca.component';

export const routes: Routes = [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "admin", component: AdminComponent},
    { path: "dashboard", component: DashboardComponent, canActivate: [otentikasiGuard] },
    { path: "dashboard2", component: Dashboard2Component, canActivate: [otentikasiGuard] },
    { path: "dashboard3", component: Dashboard3Component, canActivate: [otentikasiGuard] },
    { path: "forex", component: ForexComponent, canActivate: [otentikasiGuard]},
    { path: "login", component: LoginComponent },
    { path: "mahasiswa", component: MahasiswaComponent, canActivate: [otentikasiGuard] },
    { path: "cuaca", component: CuacaComponent, canActivate: [otentikasiGuard] }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutes {}