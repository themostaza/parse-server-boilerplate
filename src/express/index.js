import express from 'express'
const router = express.Router()

router.get('/', (req, res) => res.status(200).send('I dream of being a web site.'))

export default router
