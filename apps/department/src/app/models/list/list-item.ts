import { ResponseModel } from "@pms/models"

export interface ListItem extends ResponseModel{ 
    id: number
    name: string
    createdDate: string
}