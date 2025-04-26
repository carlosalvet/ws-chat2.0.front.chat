//Super Global variable session

function ws_open(){
  WS_ChatDOM.print_status("Conectado");
  console.log('Changing status: Conectado', '[OK]');

  WS_ChatDOM.selection_btns.vshow();
  console.log('Enabling buttons', '[OK]');
}


/* On message react calling a event function*/
function ws_onmessage(ws, evt){
  response = JSON.parse(evt.data)
  console.log('ws_onmessage: response petition', response['event'], response)

  react_function = response['event'].replace('-', '_') 

  // DOM array with all function declared (reflection, call a function by string name)
  console.log('Reaccionando (ejectuando) la función', react_function)
  window[react_function](session, response)
}

function ws_onerror(error){
    WS_ChatDOM.print_status("Desconectado (ERROR)")
    WS_ChatDOM.add_message('ERROR: no se pudo conectar al servidor')
    /*alert('No se pudo conectar al servidor')*/
    console.log('ERROR: ', error)
}

function ws_onclose(ws, event) {
    text_area = document.getElementById("taLog")
    if (event.wasClean) {
        WS_ChatDOM.print_status("Desconectado (Clean)")
      console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
        WS_ChatDOM.print_status("Desconectado (Died)")
      console.log(`[close] [close] Connection died`);
  	}

    console.log(`cerrando socket, ready state:${ws.readyState}, code=${event.code} reason=${event.reason}: `)
    scroll_to_bottom();
}
