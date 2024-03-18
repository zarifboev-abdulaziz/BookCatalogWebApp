export interface Book{
    id:number,
    title: string,
    description: string,
    categoryId: number,
    category:{
        id:number,
        name: string
    }
}