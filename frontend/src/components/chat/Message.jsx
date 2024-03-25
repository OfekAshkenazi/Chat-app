export default function Message() {
    return (
        <section className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src="https://avatar.iran.liara.run/public/boy?username=boobi" alt="avater" />
                </div>
            </div>

            <div className={`chat-bubble text-white bg-blue-500`}>
                Hi! what upp?
            </div>
			<div className='chat-footer text-xs text-gray-900 font-bold flex gap-1 items-center'>19:31</div>


        </section>
    )
}