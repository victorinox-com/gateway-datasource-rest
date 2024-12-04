import type { FetcherResponse } from '@apollo/utils.fetcher';

export function parseResponseBody(
  response: FetcherResponse,
): Promise<object | string> {
  const contentType = response.headers.get('Content-Type');
  const contentLength = response.headers.get('Content-Length');
  if (
    // As one might expect, a "204 No Content" is empty! This means there
    // isn't enough to `JSON.parse`, and trying will result in an error.
    response.status !== 204 &&
    contentLength !== '0' &&
    contentType &&
    (contentType.startsWith('application/json') ||
      contentType.endsWith('+json'))
  ) {
    return response.json();
  } else {
    return response.text();
  }
}
