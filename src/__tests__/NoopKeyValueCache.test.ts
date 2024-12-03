import { NoopKeyValueCache } from '../NoopKeyValueCache';

describe('NoopKeyValueCache', () => {
  let cache: NoopKeyValueCache;

  const cacheKeyMock = 'key';

  beforeEach(() => {
    cache = new NoopKeyValueCache();
  });

  describe('get', () => {
    it('should return undefined', async () => {
      const result = await cache.get(cacheKeyMock);

      expect(result).toBeUndefined();
    });
  });

  describe('set', () => {
    it('should return undefined', async () => {
      const result = await cache.set(cacheKeyMock, 'data', {
        ttl: 1000,
      });

      expect(result).toBeUndefined();
    });
  });

  describe('delete', () => {
    it('should return undefined', async () => {
      const result = await cache.delete(cacheKeyMock);

      expect(result).toBeUndefined();
    });
  });
});
