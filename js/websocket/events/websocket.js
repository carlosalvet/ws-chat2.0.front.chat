//Super Global variable session

function ws_open(){
  console.log('Changing status: Conectado', '[OK]');
}

function ws_onerror(error){
    console.log('ERROR: ', error)
}

function ws_onclose(ws, event) {
    console.log(`cerrando socket, ready state:${ws.readyState}, code=${event.code} reason=${event.reason}: `)
}
