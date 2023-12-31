export interface PageableModel{
    size: number,
    index: number,
    count: number,
    pages: number,
    hasPrevious: boolean,
    hasNext: boolean
}