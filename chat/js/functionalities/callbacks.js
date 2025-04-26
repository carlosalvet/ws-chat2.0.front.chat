async function init_chat(chat_id){
    let request_id = 0
    var ws = null
    try {
        ws_chat = new WS_ChatController("ws-chat").__init__();
        ws_chat.set_status('Conectando...')
        ws = await ws_connect(SERVER_ADDRESS);
        request_id = await send_request_conversation(ws, chat_id)

        
    } catch (_error){
        console.error("Error crítico:", _error);
    }

    return ws_chat
}


function send_request_conversation (_ws, chat_id=0) {
    let request_id = 0
    if (_ws.readyState !== WebSocket.OPEN) {
      reject(new Error('WebSocket no está conectado'));
      return request_id;
    }

    request_id = `req-${Date.now()}`;
    strheader = `request-id:${request_id}\nchat-id:${chat_id}\nevent:chat-get`
    console.log(`Sending in get chat: "${strheader}"`, );
    _ws.send(strheader);
    return request_id
}
