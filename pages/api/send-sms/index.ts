import type { NextApiRequest, NextApiResponse } from 'next'

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const messagingServiceSid = process.env.TWILIO_SERVICE_SID

type TwilioResponseData = {
  sid: string
  status: string
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<TwilioResponseData>,
) => {
  const { message: body, to } = JSON.parse(req.body)
  const client = require('twilio')(accountSid, authToken)

  const { sid, status } = await client.messages.create({
    body,
    messagingServiceSid,
    to,
  })

  res.statusCode = 200
  res.json({ sid, status })
}
