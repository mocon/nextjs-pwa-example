import type { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

type SendGridResponseData = {
  message: string
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<SendGridResponseData>,
) => {
  const { to, from, subject, text, html } = JSON.parse(req.body)

  await sgMail.send({
    to,
    from,
    subject,
    text,
    html,
  })

  res.statusCode = 200
  res.json({ message: 'Email sent.' })
}
