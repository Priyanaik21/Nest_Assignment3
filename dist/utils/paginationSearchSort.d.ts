interface QueryParams {
    page?: number;
    limit?: number;
    search?: string;
    sortBy?: string;
    order?: 'ASC' | 'DESC';
}
export declare function applyPaginationSearchSort(queryParams: QueryParams, searchFields: string[]): {
    skip: number;
    take: number;
    order: {
        [x: string]: string;
    };
    where: {};
};
export {};
