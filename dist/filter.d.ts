import 'dayjs/locale/ja';
export declare const cut: (str: string, limit?: number, decoration?: string) => string;
export declare const combinationFromArrayToStr: (list: any[], key?: string, decoration?: string) => any;
export declare const minorUnit: (val: string, prefix?: string) => string;
export declare const spaceSplit: (val: string) => string[] | string;
export declare const dateFormat: (val: string | number, format?: string) => string;
