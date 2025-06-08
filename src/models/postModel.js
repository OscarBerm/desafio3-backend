import pool from '../../db/config.js'

export const getPostsModel = async () => {
    const sqlQuery = 'SELECT * FROM posts'
    const res = await pool.query(sqlQuery)
    console.log(res.rows)
    return res.rows
}

export const createPostsModel = async (titulo, img, descripcion) => {
    const sqlQuery = {
        text: 'INSERT INTO posts (titulo, img, descripcion, likes) VALUES ($1, $2, $3, $4)',
        values: [titulo, img, descripcion, 0]
    }
    const res = await pool.query(sqlQuery)
    console.log(res.rows)
    return res.rows
}