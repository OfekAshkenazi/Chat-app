import User from "../../models/user.model.js"

export async function getUsersForRendering(req, res) {
    try {
        const loggedInUserId = req.user._id
        const filterUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password")

        res.status(200).json(filterUsers)

    } catch (error) {
        console.log("Error in getUsersForRendering controller", error.message)
        res.status(500).json({ error: "Internal server Error" })
    }
}