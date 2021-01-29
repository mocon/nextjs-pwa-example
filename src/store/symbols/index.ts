import { createSlice } from '@reduxjs/toolkit'

const symbolsSlice = createSlice({
  name: 'symbols',
  initialState: { cryptos: [], stocks: [] },
  reducers: {
    // Usage: dispatch(addCryptoSymbol({ symbol, quantity }))
    addCryptoSymbol: (state, action) => {
      state.cryptos = [...state.cryptos, action.payload]
    },
    // Usage: dispatch(removeCryptoSymbol({ symbol: 'DOGE' }))
    removeCryptoSymbol: (state, action) => {
      state.cryptos = state.cryptos.filter(
        (c) => c.symbol !== action.payload.symbol,
      )
    },
    // Usage: dispatch(addStockSymbol({ symbol, quantity }))
    addStockSymbol: (state, action) => {
      state.stocks = [...state.stocks, action.payload]
    },
    // Usage: dispatch(removeStockSymbol({ symbol: 'GME' }))
    removeStockSymbol: (state, action) => {
      state.stocks = state.stocks.filter(
        (s) => s.symbol !== action.payload.symbol,
      )
    },
    // Usage: dispatch(resetAllSymbols())
    resetAllSymbols: (state) => {
      state.cryptos = []
      state.stocks = []
    },
  },
})

const { actions, reducer } = symbolsSlice

export const {
  addCryptoSymbol,
  removeCryptoSymbol,
  addStockSymbol,
  removeStockSymbol,
  resetAllSymbols,
} = actions

export default reducer
