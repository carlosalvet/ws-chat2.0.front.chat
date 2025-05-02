/* WebSocket. */
var ws;
/* Establish connection. */
async function ws_connect(addr)
{
    return await new Promise((resolve, reject) => {
        const ws = new WebSocket(addr);
        ws.onmessage = function (event) { ws_onmessage(this, event) };
        ws.onclose = function(event) { ws_onclose(this, event) };

        // Control de timeout
        let timeout_id = setTimeout(() => {
            ws.close();
            reject(new Error('Tiempo de conexión excedido'));
        }, REQUEST_TIMEOUT);

        ws.onopen = (event) => { 
            clearTimeout(timeout_id);
            ws_open(ws_chat)
            resolve(ws) 
        };
        ws.onerror = (error) => {
            clearTimeout(timeout_id);
            ws_onerror(error)
            reject(new Error(`Error de conexión: ${error.message || 'Desconocido'}`));
        }
    });

}
