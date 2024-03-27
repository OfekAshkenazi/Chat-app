import { useEffect } from "react"

const useSendNotification = () => {

    useEffect(() => {
        Notification.requestPermission()
    }, [])

    const sendNotification = (message) => {
        if (Notification.permission === 'granted') {
            const notification = new Notification('New Message', {
                body: message,
                icon: '/path/to/icon.png'
            })
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    const notification = new Notification('New Message', {
                        body: message,
                        icon: '/path/to/icon.png'
                    })
                }
            })
        }
    }

    return {sendNotification}
}

export default useSendNotification
