import prisma from '../db.js'

function detectBrand(cardNumber){
  const first = cardNumber[0]
  const brands = {
    '4': {name: 'visa', fee: 0.025},
    '5': {name: 'mastercard', fee: 0.03},
    '3': {name: 'amex', fee: 0.035},
    '6': {name: 'elo', fee: 0.04},
  }
  return brands[first] || null
}