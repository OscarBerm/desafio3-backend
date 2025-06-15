import { Router } from 'express'
import { getAllPosts, addPosts, updatePosts, deletePosts } from '../src/controllers/postsControllers.js'

const router = Router()

router.get('/posts', getAllPosts)

router.post('/posts', addPosts)

router.put('/posts/like/:id', updatePosts)

router.delete('/posts/:id', deletePosts)

export default router