import { InjectionToken } from '@angular/core';

export class LaToastData {
    type: ToastType;
    message: string;
    auto_hide?: boolean;
    auto_hide_interval?: number;
    show_close?: boolean;
    rtl?: boolean;
  }

export const defaultToastData: LaToastData = {
    type: 'info',
    message: 'Not enter a message',
    auto_hide: true,
    auto_hide_interval: 5000,
    show_close: true,
    rtl: false
}

export type ToastType = 'error' | 'warn' | 'info' | 'success';

export interface ILaToastConfig {
    position?: {
        top: number;
        right: number;
    },
    panelClass?: string;
    hasBackdrop?: boolean;
    backdropClass?: string;
}

export const defaultToastConfig: ILaToastConfig = {
    position: {
        top: 60,
        right: 20,
    },
    hasBackdrop: false,
    backdropClass: 'dark-backdrop',
    panelClass: 'tm-file-preview-dialog-panel'
};

export const TOAST_CONFIG_TOKEN = new InjectionToken('toast-config');