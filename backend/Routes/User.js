import express from 'express'
import getToken from '../getToken.js'
import { addVirtualMoney, buyStockVirtual, removeStock, saveStock, sellStockVirtual } from '../Controllers/User.js'

const router = express.Router()

router.put('/update-user', getToken, )

router.post('/add-virtual-money', getToken, addVirtualMoney)

router.post('/buy-stock-virtual', getToken, buyStockVirtual) // Buy stock to the user's port

router.post('/sell-stock-virtual',getToken, sellStockVirtual)  // Sell stock

router.put('/save-stock', getToken, saveStock) // Add a stock to the user's saved stocks

router.put('/remove-stock', getToken, removeStock) // Remove a stock from the user's port

router.get('/get-saved-stocks', getToken, )

export default router
