import { getPostsModel, createPostsModel } from "../models/postModel.js";

export const getAllPosts = async (req, res) => {
    try {
        const posts = await getPostsModel()
        res.json(posts)
    } catch (error) {
        res.status(500).json({ error: 'Error getting posts' })
        console.log(error)
    }
}

export const addPosts = async (req, res) => {
    try {
        const { titulo, url, descripcion } = req.body
        const newPosts = await createPostsModel(titulo, url, descripcion)
        res.json({ posts: newPosts })
        console.log(newPosts)
    } catch (error) {
        res.status(500).json({ error: 'Error getting posts' })
        console.log(error)
    }
}