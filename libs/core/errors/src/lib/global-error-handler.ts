
import { ErrorHandler } from '@angular/core';
import { ValidationError } from './types/validation-error';
import { HttpErrorResponse } from '@angular/common/http';
import { BusinessError } from './types/business-error';

export class GlobalErrorHandler implements ErrorHandler{

    handleError(error: Error): void {
        if(error instanceof HttpErrorResponse) this.handleHttpErrorResponse(error)
        else this.handleAppError(error);
    }

    handleHttpErrorResponse(httpError: HttpErrorResponse){
        switch (httpError.error?.instance){
            case 'ValidationError':
                this.handleHttpValidationError(httpError.error)
                break;  
            case 'BusinessError':
                this.handleHttpBusinessError(httpError.error)
                break;  
            default:
                this.handleHttpError(httpError);
        }
    }

    handleAppError(error: Error){
        console.log(error.message ?? 'Undefined client error !');
    }

    handleHttpBusinessError(error: BusinessError){
        console.log("Business Error", error);
    }

    handleHttpValidationError(error: ValidationError){
        console.log("Validation Error !", error);
    }
    
    handleHttpError(error: HttpErrorResponse){
        console.log("Something went wrong !", error)
    }
}