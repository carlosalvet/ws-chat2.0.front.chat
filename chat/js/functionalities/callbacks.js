async function init_chat(chat_id){
    let request_id = 0
    ws = null
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

function authenticate_citizen(ws){
    txt_input = WS_SelectionButtons['auth-citizen']
    citizen_name = txt_input.querySelector('input[name=guess-name]').value

    let arr_send = ['event','name', 'user-role']
    arr_send['event'] = 'user-login'
    arr_send['name'] = citizen_name
    arr_send['user-role'] = 'citizen'
    strheader = parse_request(arr_send)
    console.log('[DEBUG]', 'preparing string to send citizen auth:', strheader)

    ws.send(strheader);
    delete arr_send
}
