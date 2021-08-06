import { Router } from 'express'
import * as tripsCtrl from '../controllers/trips.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()


// Public Routes

// Protected Routes
router.use(decodeUserFromToken)
router.post('/', tripsCtrl.create)

export {
    router
}