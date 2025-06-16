import { getPostsModel, createPostsModel, updatePostsModel, deletePostsModel } from "../models/postModel.js";

export const getAllPosts = async (req, res) => {
    try {
        const posts = await getPostsModel()
        res.json(posts)
    } catch (error) {
        res.status(500).json({ error: 'Error getting posts' })
    }
}

export const addPosts = async (req, res) => {
    try {
        const { titulo, url, descripcion } = req.body
        if (!titulo || !url || !descripcion) {
            return res.status(400).json({ error: 'All fields are required' });
        }
        const newPosts = await createPostsModel(titulo, url, descripcion)
        res.json({ posts: newPosts })
    } catch (error) {
        res.status(500).json({ error: 'Error adding post' })
    }
}

export const updatePosts = async (req, res) => {
    try {
        const { id } = req.params
        const updatePost = await updatePostsModel(id)
        if (!updatePost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json({ posts: updatePost })
    } catch (error) {
        res.status(500).json({ error: 'Error updating post' })
    }
}

export const deletePosts = async (req, res) => {
    try {
        const { id } = req.params
        const deletePost = await deletePostsModel(id)
        if (!deletePost) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.json({ posts: deletePost })
    } catch (error) {
        res.status(500).json({ error: 'Error deleting post' })
    }
}