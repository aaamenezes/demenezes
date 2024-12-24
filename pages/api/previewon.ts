// export default function handler(req, res) {
//   res.setDraftMode({ enable: true });
//   res.end('Draft mode is enabled');
// }

import { NextApiRequest, NextApiResponse } from 'next'

export default async function previewOn(
  _: NextApiRequest,
  res: NextApiResponse
) {
  // const password = 'algumacoisa'

  // if (req.query.password !== password || !req.query.slug) {
  //   return res.status(401).json({ message: 'Invalid token' })
  // }

  res.setPreviewData(
    '',
    {
      maxAge: 60 * 30, // 60sec (1min) * 60 = 60min
    }
  )

  res.redirect(
    '/'
  )
  return res.end()
}
