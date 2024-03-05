import express from 'express'
import { forgotPassword, login, register, resetPassword } from '../Controllers/Auth.js'

const router = express.Router()

router.post('/login', login)

router.post('/register', register)

router.post('/forgotPassword', forgotPassword)

router.post('/resetPassword', resetPassword)

export default router

