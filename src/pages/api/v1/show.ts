// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { ShowResponse } from '@/types';
import { API_BASE } from '@/utils/constants';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ShowResponse | Error>
) {
  try {
    const response = await fetch(`${API_BASE}shows/${req.query.id}`);

    if (!response.ok) {
      throw new Error(response.statusText)
    }

    const results = (await response.json()) as ShowResponse;
    res.status(200).json(results)
  }
  catch (error) {
    res.status(500).json(error as Error)
  }
}
