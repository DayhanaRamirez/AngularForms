export interface MovieModel{
    type: string;
    year?: string;
    description: string;
}

export interface CategoryModel{
    name: string,
}

export const catogories: CategoryModel[] = [
    {name: "movies"},
    {name: "series"},
    {name: "episodes"},
];

export interface DataInterface 
{
    error: boolean,
    data: {
        results: [
            {
            poster: string,
            title: string,
            type: string,
            year: string,
            selected: boolean,
            id: string,
            }
        ],
        totalResults: number,
    }
}