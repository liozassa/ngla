import { NgModule, ModuleWithProviders } from '@angular/core';
import { OverlayModule } from '@angular/cdk/overlay';
import { LaToastComponent } from './toast.component';
import { defaultToastConfig, TOAST_CONFIG_TOKEN } from './toast-config';
import { CommonModule } from '@angular/common';
import { LaToastService } from './toast.service';

@NgModule({
    declarations: [
        LaToastComponent
    ],
    imports: [
        CommonModule,
        OverlayModule
    ],
    exports: [
        LaToastComponent
    ],
    providers: [
      LaToastService
    ],
    entryComponents: [LaToastComponent]
})
export class LaToastModule {
    /*public static forRoot(config = defaultToastConfig): ModuleWithProviders<LaToastModule> {
        return {
            ngModule: LaToastModule,
            providers: [
                {
                    provide: TOAST_CONFIG_TOKEN,
                    useValue: { ...defaultToastConfig, ...config },
                },
            ],
        };
    }*/
}