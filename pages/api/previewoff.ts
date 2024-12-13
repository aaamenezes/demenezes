import type { NextApiRequest, NextApiResponse } from "next"

export default function previewOff(req: NextApiRequest, res: NextApiResponse) {
  res.clearPreviewData()
  res.redirect('/')
  return res.end()
}
