"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyPaginationSearchSort = applyPaginationSearchSort;
const typeorm_1 = require("typeorm");
function applyPaginationSearchSort(queryParams, searchFields) {
    const { page, limit, search = '', sortBy, order = 'ASC' } = queryParams;
    const skip = page && limit ? (page - 1) * limit : undefined;
    const take = limit || undefined;
    const searchConditions = search
        ? searchFields.map((field) => ({ [field]: (0, typeorm_1.Like)(`%${search}%`) }))
        : [];
    return {
        skip,
        take,
        order: sortBy ? { [sortBy]: order.toUpperCase() === 'DESC' ? 'DESC' : 'ASC' } : undefined,
        where: searchConditions.length > 0 ? searchConditions : {},
    };
}
//# sourceMappingURL=paginationSearchSort.js.map