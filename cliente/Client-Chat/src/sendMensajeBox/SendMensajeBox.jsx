import React from 'react'

export const SendMensajeBox = (setMessageInput) => {
    return (
        <form onSubmit={sendMessage}>
            <input
                type="text"
                placeholder="Escribe un mensaje"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
            />
            <button type="submit">Enviar</button>
        </form>
    )
}
