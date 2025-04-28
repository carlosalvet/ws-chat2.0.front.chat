function user_login(session, response){
    console.log('Funcion que reaccionó "user_login", response: ', response)

    session['session-name'] = response['response']
    session['user-role'] = response['user-role']
    session['user-name'] = response['user-name']

    event_name = response['event']

    if (response.status == '200'){
        session['logged'] = true
        WS_Message.date = '2022-06-30'
        WS_Message.image = 'images/admin-avatar.png'
        WS_Message.username = response['user-role']
        

        WS_SelectionButtons.show('txt-msg') //TODO DOM_Chat.logged(bool:status)
    }
    console.log('window array', window)
    return true;
}

/*function session_create_visual(session){*/
/*session['logged'] = false*/
/*}*/

/*function session_create_citizen(session){*/
/*if(session['session-name']){*/
/*alert(`se creo la sesión de ciudadano: ${session['session-name']}`);*/
/*session['logged'] = true*/
/*WS_SelectionButtons.show('txt-msg')*/
/*return true*/
/*}*/

/*alert(`datos incorrectos, usuario o contraseña`);*/
/*return false*/
/*}*/

/*function session_create_expert(session){*/
/*if(session['session-name']){*/
/*alert(`se creo la sesión de experto: ${session['session-name']}`);*/
/*session['logged'] = true*/
/*WS_SelectionButtons.show('txt-msg')*/
/*return true*/
/*}*/
/*alert(`datos incorrectos, usuario o contraseña`);*/
/*return false*/
/*}*/
