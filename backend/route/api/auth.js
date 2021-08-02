const e = require('express');
const express = require('express')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')

const { body, validationResult } = require('express-validator');

const router = express.Router()
const User = require('../../models/User')


router.post('/signUp',
    body('email').isEmail().withMessage('Please enter a valid email address'),
    // password must be at least 5 chars long
    async (req, res) => {
        const email = req.body.email
        const username = req.body.username
        const password = req.body.password
        const rePassword = req.body.rePassword
        const errors = validationResult(req);
        if (!password || !username || !email) {
            return res.status(400).json({ error: [{ msg: 'all fields require' }] })
        }
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }
        if (password !== rePassword) {
            return res.status(400).json({ error: [{ msg: 'Passwords do not match' }] })
        }
        try{
            let user = []
            user = await User.findOne({username : username})
            user = await User.findOne({email : email})
            if (user) {
                return res.status(400).json({error : [{msg : 'A user with this email or username already exists'}]})
            }
            else{
                user = new User({
                    username, email,  password
                })
                const salt = await bcrypt.genSalt(10)
                user.password = await bcrypt.hash(password, salt)
                await user.save()
                const payload = {
                    user: {
                        id: user.id
                    }
                }
                jwt.sign(
                    payload,
                    config.get('jwtSecret'),
                    {expiresIn: 360000 },
                    (err, token) => {
                        if (err) throw err;
                        console.log('Token is:', token)
                        return res.json({ token })
                    }
                )
            }
        }
        catch(err){
            console.log(err)
            return res.status(500).json({error : [{msg:'Server error'}]})
        }
})
router.post('/signIn' , 
    async (req, res) => {
        const username = req.body.username
        const password = req.body.password
        if (!username || !password){
            return res.status(400).json({ error: [{ msg: 'Username and password required' }] })
        }
        try{
            let user = []
            const findedByUsername = await User.findOne({username:username})
            const findedByEmail = await User.findOne({email:username})
            if (findedByUsername){
                user = findedByUsername
            }
            if (findedByEmail){
                user = findedByEmail
            }

            if (!user){
                return res.status(401).json({ error: [{ msg: 'User not found' }] })
            }
            else{
                const isMatch = await bcrypt.compare(password, user.password)
                if (!isMatch) {
                    return res.status(400)
                        .json({ error: [{ msg: 'Password incorrect' }] })
                }
                const payload = {
                    user: {
                        id: user.id
                    }
                }
                jwt.sign(
                    payload,
                    config.get('jwtSecret'),
                    { expiresIn: 360000 },
                    (err, token) => {
                        if (err) throw err;
                        console.log('Token is:', token)
                        return res.json({ token })
                    }
                )
            }
        }
        catch(err){
            console.log(err)
            return res.status(500).json({ error: [{ msg: 'Server error' }] })
        }
    }
 )

module.exports = router