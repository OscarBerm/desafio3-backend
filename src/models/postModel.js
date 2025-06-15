import pool from '../../db/config.js'

export const getPostsModel = async () => {
    const sqlQuery = 'SELECT * FROM posts ORDER BY id DESC'
    const res = await pool.query(sqlQuery)
    return res.rows
}

export const createPostsModel = async (titulo, img, descripcion) => {
    const sqlQuery = {
        text: 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4)',
        values: [titulo, img, descripcion, 0]
    }
    const res = await pool.query(sqlQuery)
    return res.rows
}

export const updatePostsModel = async (id) => {
    const sqlQuery = {
        text: 'UPDATE posts SET likes = likes + 1 WHERE id = $1',
        values: [id]
    }
    const res = await pool.query(sqlQuery)
    return res.rows
}

export const deletePostsModel = async (id) => {
    const sqlQuery = {
        text: 'DELETE FROM posts WHERE id = $1',
        values: [id]
    }
    const res = await pool.query(sqlQuery)
    return res.rows
}