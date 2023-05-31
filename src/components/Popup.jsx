import React from 'react'

import './Popup.scss'

export default function Popup({ id, title, children }) {
    function openModal (event) {
        event.stopPropagation()
        const dialogElement = document.getElementById(id) || null
        dialogElement && dialogElement.showModal()
    }

    function closeModal() {
        const dialogElement = document.getElementById(id) || null
        dialogElement && dialogElement.close()
    }

    return (
        <>
            <button type="button" onClick={openModal}>{title || 'Popup'}</button>
            <dialog id={id}>
                <button type="button" onClick={closeModal}>❌</button>
                <h2>{title || 'Popup'}</h2>
                {children || 'Popup content'}
            </dialog>
        </>
    )
}
