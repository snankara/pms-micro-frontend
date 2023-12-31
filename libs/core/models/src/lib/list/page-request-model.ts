import { RequestModel } from "../api/request-model";

export interface PageRequestModel extends RequestModel{
    pageIndex: number,
    pageSize: number
}