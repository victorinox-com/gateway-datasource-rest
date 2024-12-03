import type {
  KeyValueCache,
  KeyValueCacheSetOptions,
} from '@apollo/utils.keyvaluecache';

export class NoopKeyValueCache<
  V = string,
  SO extends KeyValueCacheSetOptions = KeyValueCacheSetOptions,
> implements KeyValueCache<V, SO>
{
  async get(_key: string): Promise<V | undefined> {
    return;
  }

  async set(_key: string, _value: V, _options?: SO): Promise<void> {
    return;
  }

  async delete(_key: string): Promise<boolean | void> {
    return;
  }
}
