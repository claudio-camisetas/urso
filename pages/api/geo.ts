import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    if (req.method === 'POST') {
        const responseData = await fetch(`http://ip-api.com/json/${req.body.ip}`)
        const responseJson = await responseData.json()
        res.status(200).json(responseJson)
    }
}
