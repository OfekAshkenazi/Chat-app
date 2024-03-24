import User from "../../models/user.model.js"
import bcrypt from "bcryptjs"

export async function signup(req, res) {

    try {
        const { fullName, username, password, confirmPassword, gender } = req.body


        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords doesnt match" })
        }

        const user = await User.findOne({ username })

        if (user) {
            return res.status(400).json({ error: "Username is allready exists" })
        }

        const boyImage = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlImage = `https://avatar.iran.liara.run/public/girl?username=${username}`

        const salt = await bcrypt.genSalt(10)

        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            image: gender === "male" ? boyImage : girlImage
        })

        if (newUser) {
            await newUser.save()

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                image: newUser.image
            })
            
        } else {
            res.status(400).json({error: "Invalid user data"})
        }

    } catch (error) {
        console.log("Error in signup controller", error.message)
        res.status(500).json({ error: "Internal server Error" })
    }
}

export async function login(req, res) {
    try {

    } catch (error) {

    }
}

export async function logout(req, res) {
    try {

    } catch (error) {

    }
} 
