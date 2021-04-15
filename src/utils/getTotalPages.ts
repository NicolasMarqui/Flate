export const getTotalPages = (total: number, limit: number): number => {
    if (total <= limit) {
        return 1;
    }

    return Math.ceil(total / limit);
};
