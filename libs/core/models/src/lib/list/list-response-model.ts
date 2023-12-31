import { ResponseModel } from './../api/response-model';

export interface ListResponseModel<T extends ResponseModel> extends ResponseModel{
    items: T[]
}