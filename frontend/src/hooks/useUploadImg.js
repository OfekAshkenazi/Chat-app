import { useState } from "react"
import toast from "react-hot-toast"
import uploadImge from "../services/upload.service.js"

const useUploadImg = () => {
    const [isUploading, setIsUploading] = useState(false)

    const [imgData, setImgData] = useState({
        imgUrl: '',
        height: 500,
        width: 500,
    })



    const uploadImg = async (ev, onUploaded = null) => {
        setIsUploading(true)
        try {
            const { secure_url, height, width } = await uploadImge(ev)
            setImgData({ imgUrl: secure_url, width, height })
            onUploaded && onUploaded(secure_url)

        } catch (error) {
            toast.error(error.message)

        } finally {
            setIsUploading(false)
        }
    }
    
    return { isUploading, uploadImg, imgData }
}

export default useUploadImg
