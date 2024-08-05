import fetch from 'node-fetch';
import type { RequestInfo, RequestInit, Response } from 'node-fetch';
import {
  NoJsonApiException,
  NotFoundApiException,
  UnknownApiException,
} from './exceptions';

export const fetchJson = async <T>(
  url: URL | RequestInfo,
  init?: RequestInit,
) => {
  const res = await fetch(url, init);
  const txt = await res.text();
  let data: T | null = null;
  if (!res.ok) {
    switch (res.status) {
      case 404:
        throw new NotFoundApiException(res, txt);
      default:
        throw new UnknownApiException(res, txt);
    }
  }
  try {
    data = JSON.parse(txt) as unknown as T;
  } catch (err) {
    throw new NoJsonApiException(res, txt);
  }

  return data as unknown as T;
};
