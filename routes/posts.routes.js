import { Router } from 'express'
import { getAllPosts, addPosts } from '../src/controllers/postsControllers.js'

const router = Router()

router.get('/posts', getAllPosts)

router.post('/posts', addPosts)

export default router