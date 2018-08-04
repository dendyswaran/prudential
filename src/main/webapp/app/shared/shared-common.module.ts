import { NgModule } from '@angular/core';

import { PrudentialSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [PrudentialSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [PrudentialSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class PrudentialSharedCommonModule {}
