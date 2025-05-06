//Super Global variable session

function ws_open(ws, timeout_id){
  console.log('Changing status: Conectado', '[OK]');
  return ws
}


function ws_onerror(error, ws){
    console.log('ERROR: ', error)
}

function ws_onclose(ws, event) {
    console.log(`cerrando socket, ready state:${ws.readyState}, code=${event.code} reason=${event.reason}: `)
}
