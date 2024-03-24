export async function signup(req, res) {
    try {
        const { fullname, username, password, confirmPassword, gender } = req.body
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords doesnt match" })
        }

        
    } catch (error) {

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
