import wretch from 'wretch'

const LOCAL_API = `${process.env.NEXT_PUBLIC_LOCAL_API_URL}/api`

export const fetchAllCryptoData = () =>
  wretch(`${LOCAL_API}/crypto`).get().json()

export const fetchAllCryptoSymbols = () =>
  wretch(`${LOCAL_API}/crypto/all-symbols`).get().json()

export const fetchAllStockSymbols = () =>
  wretch(`${LOCAL_API}/stock/all-symbols`).get().json()

export const fetchStockPriceBySymbol = (symbol) =>
  wretch(`${LOCAL_API}/stock/${symbol}`).get().json()

export const fetchPortfolioPrices = (cryptos, stocks) =>
  wretch(`${LOCAL_API}/portfolio`)
    .post(JSON.stringify({ cryptos, stocks }))
    .json()

/*
  sendSms('Hello and welcome from Next PWA app.', '+13104308876')
*/
export const sendSms = (message, to) =>
  wretch(`${LOCAL_API}/send-sms`).post(JSON.stringify({ message, to })).json()

/*
  sendEmail(
    'myles.oconnor@gmail.com',
    'myles.oconnor@gmail.com',
    'Sending with SendGrid is Fun',
    'and easy to do anywhere, even with Node.js',
    '<strong>and easy to do anywhere, even with Node.js</strong>',
  )
*/
export const sendEmail = (to, from, subject, text, html) =>
  wretch(`${LOCAL_API}/send-email`)
    .post(JSON.stringify({ to, from, subject, text, html }))
    .json()
