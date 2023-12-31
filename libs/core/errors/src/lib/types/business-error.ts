import { HttpStatusCode } from "@angular/common/http";

export interface BusinessError{
    title: string,
    detail: string,
    status: HttpStatusCode
    type: string,
    instance: string
}