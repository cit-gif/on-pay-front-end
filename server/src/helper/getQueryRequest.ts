export interface GetQueryRequestInterface {
  query: string;
  page: number;
  limit: number;
  skip: number;
}

export default function getQueryRequest(
  query: string | undefined,
  page: string | undefined,
  limit: string | undefined,
): GetQueryRequestInterface {
  const newPage = getPageOrLimit(page);
  const newLimit = getPageOrLimit(limit);

  return {
    query: formatQuery(query),
    limit: newPage,
    page: newLimit,
    skip: getSkipResult(newPage, newLimit),
  };
}
export function formatQuery(query: string | undefined): string {
  if (query) {
    return query;
  }
  return '';
}
export function getSkipResult(page: number, limit: number): number {
  return (page - 1) * limit;
}
export function getPageOrLimit(params: undefined | string) {
  try {
    if (params && parseInt(params) > 0) {
      return parseInt(params);
    } else {
      return 1;
    }
  } catch (error) {
    return 1;
  }
}
