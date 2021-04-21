import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegiaoComponent } from './regiao/regiao.component';
import { PostoComponent } from './posto/posto.component';
import { BandeiraComponent } from './bandeira/bandeira.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PrecoBandeiraComponent } from './precoBandeira/precoBandeira.component';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';
import { PrecoVendaComponent } from './precoVenda/precoVenda.component';
import { NgxCurrencyModule } from 'ngx-currency';
import { PrecoCompraComponent} from './precoCompra/precoCompra.component';
import { AlertModule } from './alert/alert.module';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { NavComponent } from './nav/nav.component';
import { BandeiraService } from './_services/bandeira.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { PostoService } from './_services/posto.service';
import { RegiaoService } from './_services/regiao.service';
import { PrecoVendaService } from './_services/precoVenda.service';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { GestaoPrecosComponent } from './gestaoPrecos/gestaoPrecos.component';

@NgModule({
  declarations: [
    AppComponent,
      MenuComponent,
      RegiaoComponent,
      PostoComponent,
      BandeiraComponent,
      PrecoBandeiraComponent,
      PrecoVendaComponent,
      PrecoCompraComponent,
      UserComponent,
      LoginComponent,
      RegistrationComponent,
      NavComponent,
      FinanceiroComponent,
      GestaoPrecosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({timeOut: 100,
    positionClass: 'toast-top-right'}),
    HttpClientModule,
    NgxCurrencyModule,
    FormsModule,
    RxReactiveFormsModule,
    ReactiveFormsModule,
    AlertModule,
    NgbModule
  ],
  providers: [
    BandeiraService,
    {
       provide: HTTP_INTERCEPTORS,
       useClass: AuthInterceptor,
       multi: true
    },
    PostoService,
    {
       provide: HTTP_INTERCEPTORS,
       useClass: AuthInterceptor,
       multi: true
    },
    RegiaoService,
    {
       provide: HTTP_INTERCEPTORS,
       useClass: AuthInterceptor,
       multi: true
    },
    PrecoVendaService,
    {
       provide: HTTP_INTERCEPTORS,
       useClass: AuthInterceptor,
       multi: true
    }
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
