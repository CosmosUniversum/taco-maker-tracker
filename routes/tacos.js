import { Router } from 'express'
import * as tacosCtrl from '../controllers/tacos.js'
const router = Router()

router.get('/', tacosCtrl.index)
router.get('/:id', tacosCtrl.show)
router.delete('/:id', tacosCtrl.delete)
router.put('/:id', tacosCtrl.update)
router.post('/', tacosCtrl.create)

export {
  router
}
