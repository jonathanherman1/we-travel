import { Router } from 'express'
import * as checklistsCtrl from '../controllers/checklists.js'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'

const router = Router()


// Public Routes


// Protected Routes
router.use(decodeUserFromToken)
router.get('/', checkAuth, checklistsCtrl.index)
router.get('/:id', checkAuth, checklistsCtrl.show)
router.post('/', checkAuth, checklistsCtrl.create)
router.put('/:id', checkAuth, checklistsCtrl.update)
router.delete('/:id', checkAuth, checklistsCtrl.delete)





export {
    router
}