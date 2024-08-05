import { fetchJson } from '@nonlux/fetcher';
import {
  NoJsonApiException,
  NotFoundApiException,
  UnknownApiException,
} from './exceptions';

describe('fetcher', () => {
  it('get  success object', async () => {
    const url = 'https://fakestoreapi.com/products';
    await expect(fetchJson(url)).resolves.toBeInstanceOf(Object);
  });

  it('get  no json error', async () => {
    const url = 'https://google.com';
    await expect(fetchJson(url)).rejects.toBeInstanceOf(NoJsonApiException);
  });

  it('get  404 error', async () => {
    const url = 'https://google.com/foo';
    await expect(fetchJson(url)).rejects.toBeInstanceOf(NotFoundApiException);
  });

  it('other errors', async () => {
    const url = 'https://api.binance.com/api/v3/account';
    await expect(fetchJson(url)).rejects.toBeInstanceOf(UnknownApiException);
  });
});
