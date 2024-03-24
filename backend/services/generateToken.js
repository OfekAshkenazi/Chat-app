import jwt from 'jsonwebtoken'

function generateTokenAndSetCookie(userId, res) {
   const token = jwt.sign({userId}, process.env.JWT_SECERT, {expiresIn: '10d'})
}