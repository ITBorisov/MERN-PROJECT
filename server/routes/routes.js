const express = require("express");
const router = express.Router();

const { User } = require('../models/user');
const { Review } = require('../models/review');
const { auth } = require('../middleware/auth');



//USERS

router.post('/register', (req, res) => {
    console.log('vliza');
    console.log(req.body);
    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({ success: false });
        res.status(200).json({
            success: true,
            user: doc
        })
    })
})

router.post('/login', (req, res) => {
    User.findOne({ 'email': req.body.email }, (err, user) => {
        if (!user) return res.json({ isAuth: false, message: 'Auth failed, email not found' })

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch) return res.json({
                isAuth: false,
                message: 'Wrong password'
            });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie('auth', user.token).json({
                    isAuth: true,
                    id: user._id,
                    email: user.email
                })
            })
        })
    })
})

router.get('/auth', auth, (req, res) => {
    res.json({
        isAuth: true,
        id: req.user._id,
        email: req.user.email,
        name: req.user.name,
        image: req.user.image,
        isAdmin: req.user.isAdmin,
        description: req.user.description,
        registerAt: req.user.registerAt
    })
});


router.get('/logout', auth, (req, res) => {
    req.user.deleteToken(req.token, (err, user) => {
        if (err) return res.status(400).send(err);
        res.sendStatus(200)
    })
})


router.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        if (err) return res.status(400).send(err);
        res.status(200).send(users)
    })
})


// REVIEWS

//GET REVIEWS
router.get('/reviews', (req, res) => {
    // locahost:3001/api/reviews?skip=3&limit=2&order=asc
    let skip = parseInt(req.query.skip);
    let limit = parseInt(req.query.limit);
    let order = req.query.order;

    // ORDER = asc || desc
    Review.find().skip(skip).sort({ _id: order }).limit(limit).exec((err, doc) => {
        if (err) return res.status(400).send(err);
        res.send(doc);
    })
})

// POST //
router.post('/review', (req, res) => {
    const review = new Review(req.body)

    review.save((err, doc) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({
            post: true,
            bookId: doc._id
        })
    })
})


router.get('/getReview', (req, res) => {
    let id = req.query.id;

    Review.findById(id, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.send(doc);
    })
})



router.get('/getReviewer', (req, res) => {
    let id = req.query.id;

    User.findById(id, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json({
            name: doc.name,
            lastname: doc.lastname
        })
    })
})



router.get('/user_reviews', (req, res) => {
    Review.find({ ownerId: req.query.user }).exec((err, docs) => {
        if (err) return res.status(400).send(err);
        res.send(docs)
    })
})








// UPDATE //
router.post('/review_update', (req, res) => {
    Review.findByIdAndUpdate(req.body._id, req.body, { new: true }, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json({
            success: true,
            doc
        })
    })
})

// DELETE //

router.delete('/delete_review', (req, res) => {
    let id = req.query.id;
    console.log(id);
    console.log('dwdw');
    Review.findByIdAndRemove(id, (err, doc) => {
        if (err) return res.status(400).send(err);
        res.json(true)
    })
})

module.exports = router;