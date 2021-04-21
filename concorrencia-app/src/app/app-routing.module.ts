import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { MenuComponent } from './menu/menu.component';
import { BandeiraComponent } from './bandeira/bandeira.component';
import { RegiaoComponent } from './regiao/regiao.component';
import { PostoComponent } from './posto/posto.component';
import { PrecoVendaComponent } from './precoVenda/precoVenda.component';
import { PrecoCompraComponent } from './precoCompra/precoCompra.component';
import { AuthGuard } from './auth/auth.guard';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { GestaoPrecosComponent } from './gestaoPrecos/gestaoPrecos.component';

const routes: Routes = [
  { path: 'user', component: UserComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
    ]
  },
  { path: 'menu', component: MenuComponent, canActivate: [AuthGuard] },
  { path: 'bandeira', component: BandeiraComponent, canActivate: [AuthGuard] },
  { path: 'regiao', component: RegiaoComponent, canActivate: [AuthGuard] },
  { path: 'posto', component: PostoComponent, canActivate: [AuthGuard] },
  { path: 'venda', component: PrecoVendaComponent, canActivate: [AuthGuard] },
  { path: 'compra', component: PrecoCompraComponent, canActivate: [AuthGuard] },
  { path: 'financeiro', component: FinanceiroComponent, canActivate: [AuthGuard] },
  { path: 'precos', component: GestaoPrecosComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'menu', pathMatch: 'full'},
  { path: '**', redirectTo: 'menu', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
