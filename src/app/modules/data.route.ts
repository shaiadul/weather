import express from 'express'
import { DataController } from './data.controller'

const router = express.Router()

router.get('/information', DataController.getData)

export const DataRoute = router
