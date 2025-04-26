function chat_get(session, response){
    console.log('REACTION chat_get executing')
    //validar chat_log
    arr_conversation = response['conversation'];
    WS_ChatDOM.print_all_messages(arr_conversation)
}
