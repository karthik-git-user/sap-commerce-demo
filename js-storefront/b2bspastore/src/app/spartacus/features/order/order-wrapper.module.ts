import { NgModule } from '@angular/core';
import { OpfOrderModule } from '@spartacus/opf/order';
import { OrderModule } from '@spartacus/order';
import { S4ServiceOrderModule } from '@spartacus/s4-service/order';

@NgModule({
  declarations: [],
  imports: [OrderModule, OpfOrderModule, S4ServiceOrderModule],
})
export class OrderWrapperModule {}
