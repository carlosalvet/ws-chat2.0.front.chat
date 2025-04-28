function message_send(session, response){
  	console.log("[OK] Procesando reacción Message Send", session, response)
    console.log(`message: ${response['message']}`, `role: ${response['user-role']}`)
    //validar chat_log
    ws_message = Object.assign({}, WS_Message);
    console.log('[DEBUG]', 'Ws_Message', WS_Message)
    ws_message.body = response['message']
    ws_message.role = response['user-role']
    ws_message.username = response['user-name']
    ws_message.date = session['chat-date']

    component = Comp_MsgAdminHelper.create(ws_message)
    WS_ChatDOM.add_component_message(component)
    /*console.log("chat conversation response", ws_message)*/
    /*WS_ChatDOM.print_all_messages(message)*/

}

