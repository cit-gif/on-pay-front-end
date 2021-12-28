export default function formatQuery(query: string | undefined): string {
  if (query) {
    return query;
  }
  return '';
}
