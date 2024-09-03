import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { AdvantageComponent } from './components/advantage/advantage.component';
import { ProductComponent } from './components/product/product.component';
import { CustomButtonDirective } from './directives/custom-button.directive';
import { PhoneMaskPipe } from './pipes/phone-mask.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AdvantageComponent,
    ProductComponent,
    CustomButtonDirective,
    PhoneMaskPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
