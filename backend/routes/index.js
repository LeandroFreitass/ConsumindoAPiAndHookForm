import express from "express";

import { 
    getAllPosts,
    createPosts,
    getPostsById,
    updatePosts,
    deletePosts
 } from "../controllers/posts.js";

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getPostsById);
router.post('/', createPosts);
router.patch('/:id', updatePosts);
router.delete('/:id', deletePosts);

export default router;