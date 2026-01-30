const db = require("../data/connection");

const listarposts = async (req, res) => {
    const posts = db.query("SELECT * FROM posts");
    res.status(200).send(posts).end();
}

module.exports = {
    listarposts
}