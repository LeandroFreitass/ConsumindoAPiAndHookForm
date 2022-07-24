import Posts from "../models/postsModel.js";

export const getAllPosts = async (req, res) => {
    try {
        const posts = await Posts.findAll();
        res.json(posts);
    } catch (error) {
        res.json({ message: error.message });
    }

}

export const getPostsById = async (req, res) => {
    try {
        const posts = await Posts.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(posts[0]);
    } catch (error) {
        res.json({ message: error.message });
    }

}

export const createPosts = async (req, res) => {
    try {
        await Posts.create(req.body);
        res.json({
            "message": "Posts criados"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
    
}

export const updatePosts = async (req, res) => {
    try {
        await Posts.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Posts atualizado"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
    
}

export const deletePosts = async (req, res) => {
    try {
        await Posts.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Posts excluidos"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
    
}

