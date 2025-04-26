async function init_chat(chat_id){
    let request_id = 0
    var ws = null
    try {
        ws_chat = new WS_ChatController("ws-chat").__init__();
        ws_chat.set_status('Conectando...')
    } catch (_error){
        console.error("Error crítico:", _error);
    }

    return ws_chat
}

