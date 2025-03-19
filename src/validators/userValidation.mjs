import { celebrate, Joi, Segments } from "celebrate"

const userSchema = Joi.object ({
    name: Joi.string().required().min(3).max(10),
    email: Joi.string().required().email(),
    age: Joi.number().integer().min(0).max(100),
})

const validateUserPost = celebrate({
    [Segments.BODY]: userSchema,
})

const validateUserPut = celebrate({
    [Segments.BODY]: userSchema,
})

const validateParamsUserId = celebrate({
    [Segments.PARAMS]: {
        userId: Joi.number().integer().required()
    }
})

export { validateUserPost, validateUserPut, validateParamsUserId }