export const daysAgo = (buildDateStr: string) => {
    const diffTime = Date.now() - new Date(buildDateStr).getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
};