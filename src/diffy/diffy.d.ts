import { AddressResponse } from "../types";
export declare function checkValues(obj1: any, obj2: any, originalObject1: any, originalObject2: any, rootname: any): AddressResponse;
export declare function getOnlyFirstValues(obj1: any, obj2: any, originalObject1: any, originalObject2: any, key: any, rootname: any): Promise<void>;
export declare function getOnlySecondValues(obj1: any, obj2: any, originalObject1: any, originalObject2: any, key: any, rootname: any): void;
export declare function getDifferentValues(obj1: any, obj2: any, originalObject1: any, originalObject2: any, key: any, rootname: any): void;
export declare function getSameValues(obj1: any, obj2: any, originalObject1: any, originalObject2: any, key: any, rootname: any): void;
export declare function uniqueFirstAndSecond(arr: any): any;
export declare function unique(arr: any): any;
