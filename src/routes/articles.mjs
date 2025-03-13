import express from "express"

import { postArticleHandler ,getArticleByIdHandler, getArticleHandler, putArticleByIdHandler, deleteArticleByIdHandler } from "../controllers/articles.mjs"

const articlesRouter = express.Router()

articlesRouter.route('/')
    .get(getArticleHandler)
    .post(postArticleHandler)

articlesRouter.route('/:articleId')
    .get(getArticleByIdHandler)
    .put(putArticleByIdHandler)
    .delete(deleteArticleByIdHandler)

export default articlesRouter