import { BsSend } from "react-icons/bs"
import { toast } from 'react-hot-toast';
import useSendMessage from "../../hooks/useSendMessage";
import { IoMdImages } from "react-icons/io";
import useUploadImg from "../../hooks/useUploadImg.js";

import { useEffect, useState } from "react";
import useSendPhoto from "../../hooks/usesSendPhoto.js";


export default function MessageInput() {
    const [msg, setMsg] = useState('')
    const { loading, sendMessage } = useSendMessage()
    const {sendPhoto} = useSendPhoto()
    const { isUploading, uploadImg, imgData } = useUploadImg()

    async function handleSubmit(e) {
        e.preventDefault()
        if (!msg) return toast.error("pls enter a message")

        try {
            await sendMessage(msg)
            setMsg('')

        } catch (error) {
            toast.error(error.message)
        }
    }

    async function handleUpload(ev) {
        try {
            uploadImg(ev, async (url) => {
                let imgUrl = url
                await sendPhoto(imgUrl)
            })

        } catch(error) {
            error.toast(error.message)
        }

    }

    return (
        <form onSubmit={handleSubmit}
            className="px-4 my-3"
        >
            <div className="w-full relative">

                <input type="text"
                    className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 text-white"
                    placeholder="Send a message"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                />

                <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3 " title="Send">
                    {loading ? <div className="loading loading-spinner"></div> : <BsSend className="text-white hover:animate-pulse" />}
                </button>


                <button type="button" className="absolute inset-y-0 end-6 flex items-center pe-3">
                    {isUploading ?
                        <div className="loading loading-spinner"></div>
                        :
                        <div>
                            <label htmlFor="imgUploadMsg" title="Send image" className="cursor-pointer hover:animate-pulse">
                                <IoMdImages className={`'hover:animate-pulse' ${imgData.imgUrl.length > 5 ? 'text-green-500' : 'text-white'} `} />
                            </label>

                            <input
                                hidden={true}
                                type="file"
                                className=""
                                onChange={handleUpload}
                                id="imgUploadMsg"
                            />
                        </div>}
                </button>
            </div>

        </form>
    )
}