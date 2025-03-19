import express from "express"

import { getUsersHandler, postUsersHandler, getUsersByIdHandler, putUsersByIdHandler, deleteUsersByIdHandler } from "../controllers/users.mjs" 
import { validateUserPost, validateUserPut, validateParamsUserId } from "../validators/userValidation.mjs"

const usersRouter = express.Router()

usersRouter.route('/')
    .get(getUsersHandler)
    .post(validateUserPost, postUsersHandler)

usersRouter.route('/:userId')
    .get(validateParamsUserId, getUsersByIdHandler)
    .put(validateParamsUserId, validateUserPut, putUsersByIdHandler)
    .delete(validateParamsUserId, deleteUsersByIdHandler)

export default usersRouter