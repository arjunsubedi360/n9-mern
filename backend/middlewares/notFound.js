export const notFound =(req, res) => {
    res.status(400).json("Route does not exist")
}