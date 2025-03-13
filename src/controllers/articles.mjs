export const getArticleHandler  = (req, res) => {
    res.end("Get articles Route")
}

export const postArticleHandler = (req, res) => {
    res.end("Post articles Route")
}

export const getArticleByIdHandler = (req, res) => {
    const {articleId} = req.params
    res.end(`Get Article by id Route:${articleId}`)
}

export const putArticleByIdHandler = (req, res) => {
    const {articleId} = req.params
    res.end(`Put Article by id Route:${articleId}`)
}

export const deleteArticleByIdHandler = (req, res) => {
    const {articleId} = req.params
    res.end(`Delete Article by id Route:${articleId}`)
}