export const getUsersHandler  = (req, res) => {
    res.end("Get Users Route")
}

export const postUsersHandler = (req, res) => {
    res.end("Post users Route")
}

export const getUsersByIdHandler = (req, res) => {
    const {userId} = req.params
    res.end(`Get User by id Route:${userId}`)
}

export const putUsersByIdHandler = (req, res) => {
    const {userId} = req.params
    res.end(`Put User by id Route:${userId}`)
}

export const deleteUsersByIdHandler = (req, res) => {
    const {userId} = req.params
    res.end(`Deleeeeete User by id Route:${userId}`)
}