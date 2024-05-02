import { env } from '@/env';
import { apiDomain, apiPath } from './constants';

type Request = Record<'limit', string>;

type Response = {
  success: string;
  result: Record<string, unknown>;
  records: {
    Earthquake: [
      {
        /** 地震報告內容 */
        ReportContent: string;
        /** 地震報告圖 */
        ReportImageURI: string;
        /** 震度圖 */
        ShakemapImageURI: string;
        /** 詳細網址 */
        Web: string;
      },
    ];
  };
};

export const getEarthquake = (data?: Request): Promise<Response> => {
  const domain = apiDomain.cwa;
  const path = apiPath.cwa.earthquake;
  const searchParams = new URLSearchParams({
    Authorization: env.CWA_TOKEN,
    ...data,
  });
  const url = `${domain}/${path}?${searchParams}`;

  return fetch(url, {
    method: 'GET',
  }).then((res) => res.json());
};
