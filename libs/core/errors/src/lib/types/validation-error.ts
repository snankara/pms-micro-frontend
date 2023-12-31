import { HttpStatusCode } from "@angular/common/http";
import { ValidationErrorModel } from "../models/validation-error-model";

export interface ValidationError {
    errors: ValidationErrorModel[];
    type: string;
    title: string;
    status: HttpStatusCode;
    detail: string;
}