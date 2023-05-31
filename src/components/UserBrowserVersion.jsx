import React, { useEffect, useState } from 'react'

export default function UserBrowserVersion() {
    const [version, setVersion] = useState('')

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase()
        const detectedVersion = userAgent.match(/(?:chrome|safari|firefox|msie|rv(?=:))\/?\s*(\d+)/)?.[1] || 'Unknown Version'
        setVersion(detectedVersion)
    })

    return (
        <span>version {version}</span>
    )
}
