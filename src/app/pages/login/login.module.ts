import { NgModule } from '@angular/core';
import {LoginComponent} from './login.component';
import {HeroRoutingModule} from './login-routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [HeroRoutingModule],
  providers: [],
  bootstrap: []
})
export class LoginModule {}


