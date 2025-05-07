async function connect_websocket(){
    let request_id = 0
    try {
        ws = await ws_connect(SERVER_ADDRESS);
    } catch (_error){
        console.error("Error crítico:", _error);
    }
return ws
}
