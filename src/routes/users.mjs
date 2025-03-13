import express from "express"

import { getUsersHandler, postUsersHandler, getUsersByIdHandler, putUsersByIdHandler, deleteUsersByIdHandler } from "../controllers/users.mjs" 

const usersRouter = express.Router()

usersRouter.route('/')
    .get(getUsersHandler)
    .post(postUsersHandler)

usersRouter.route('/:userId')
    .get(getUsersByIdHandler)
    .put(putUsersByIdHandler)
    .delete(deleteUsersByIdHandler)

export default usersRouter