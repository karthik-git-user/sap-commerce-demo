import { NgModule } from '@angular/core';
import { CartBaseModule } from '@spartacus/cart/base';
import { CpqQuoteModule } from '@spartacus/cpq-quote';

@NgModule({
  declarations: [],
  imports: [CartBaseModule, CpqQuoteModule],
})
export class CartBaseWrapperModule {}
