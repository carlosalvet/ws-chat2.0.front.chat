/* WebSocket. */
var ws;
/* Establish connection. */
async function ws_connect(addr)
{
    return await new Promise((resolve, reject) => {
        ws = new WebSocket(addr);
        ws.onmessage = function (event) { __ws_onmessage(this, event) };
        ws.onclose = function(event) { ws_onclose(this, event) };

        // Control de timeout
        let timeout_id = setTimeout(() => {
            ws.close();
            reject(new Error('Tiempo de conexión excedido'));
        }, REQUEST_TIMEOUT);

        ws.onopen = (event) => { 
            clearTimeout(timeout_id);
            ws_open()
            resolve(ws) 
        };
        ws.onerror = (error) => {
            clearTimeout(timeout_id);
            ws_onerror(error)
            reject(new Error(`Error de conexión: ${error.message || 'Desconocido'}`));
        }
    });

}


/* On message react calling a event function*/
function __ws_onmessage(ws, evt){
    response = JSON.parse(evt.data)
    session = get_session()
    console.log('ws_onmessage: response petition', response['event'], response)

    prefix_funct = get_prefix_funct()
    react_function = prefix_funct + response['event'].replace('-', '_') 

    // DOM array with all function declared (reflection, call a function by string name)
    console.log('Reaccionando (ejectuando) la función', react_function)
    window[react_function](session, response)
}
