import jwt from 'jsonwebtoken'

export default function generateTokenAndSetCookie(userId, res) {
    const token = jwt.sign({ userId }, process.env.JWT_SECERT, { expiresIn: '10d' })

    res.cookie("jwt-token", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //ms
        httpOnly: true, // prevent xss attacks
        sameSite:"strict", // csrf attacks
        secure: process.env.NODE_ENV !== "development"

    })
}