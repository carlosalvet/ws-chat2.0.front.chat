#! /usr/bin/env python3

import asyncio
import websockets
import traceback
from websockets.asyncio.server import serve
from websockets.exceptions import ConnectionClosedOK
'''
'''


"""
 await Esta directiva da un problema, si intento pasar como argumento a otra 
       función async, la variable da problema en su tratamiento, es por eso
       que message no se llama dentro de la función consumer
"""
async def front_controller(ws, path=''):
    print("\n===============    OPEN CONNECTION  ==========================")
    async for request in ws: 
        try:
            print("\n===============   GETTING NEW REQUEST  ==========================")
            await ws.send(request)
            print('Respondiendo ', request)
        except websockets.ConnectionClosedError as error: 
            console_log('Error al cerrar conexión {}'.format(traceback.format_exc()), 4)
            ws.close()
        except Exception as error: 
            console_log(f'Error desconocido {error}', 4)
            console_log('Generic Exception caught in {}'.format(traceback.format_exc()), 1)
            ws.close()



# Open WebSocket server
async def main():
    async with websockets.serve(front_controller, "10.33.241.239", 8081):
        await asyncio.Future()  # run forever


if __name__ == "__main__":
    asyncio.run(main(), debug=True)
