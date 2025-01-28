const express = require("express");

const { createPost, updatePost, deletePost, getPost, getAllPosts } = require("../controllers/post-controller.js");
const { uploadImage, getImage } = require("../controllers/image-controller.js");
const { newComment, getComments, deleteComment } = require('../controllers/comment-controller.js');
const { loginUser, singupUser, logoutUser } = require('../controllers/user-controller.js');
const { authenticateToken, createNewToken } = require('../controllers/jwt-controller.js');

const { upload } = require('../utils/upload.js'); 

const router = express.Router();

router.post('/login', loginUser);
router.post('/signup', singupUser);
router.post('/logout', logoutUser);

router.post('/token', createNewToken);

router.post('/create', authenticateToken, createPost);
router.put('/update/:id', authenticateToken, updatePost);
router.delete('/delete/:id', authenticateToken, deletePost);

router.get('/post/:id', authenticateToken, getPost);
router.get('/posts', authenticateToken, getAllPosts);

// router.post('/file/upload', upload.single('file'), uploadImage);
router.get('/file/:filename', getImage);

router.post('/comment/new', authenticateToken, newComment);
router.get('/comments/:id', authenticateToken, getComments);
router.delete('/comment/delete/:id', authenticateToken, deleteComment);


module.exports = router;