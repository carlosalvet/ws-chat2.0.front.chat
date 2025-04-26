WS_ChatDOM = { 
    'container':null, 
    'status':null, 
    'description':null,
    'title':null,
    'conversation':null,
    'selection_btns':null,
    'message':null,

    '__init__':function(id_component){
        this.container = document.getElementById(id_component)
        if (!this.container) {
            console.log(`no existe el contendor ${id_componente}`)
            return false
        } else {
            this.selection_btns = WS_SelectionButtons.__init__(this.container),
            this.status = this.container.querySelector('.status-connection')
            this.description = this.container.querySelector('.ws-chat-description')
            this.title = this.container.querySelector('.ws-chat-title')
            this.conversation = this.container.querySelector('.msg-area')
            this.message = this.container.querySelector('.ws-send-message > input[name=ws-msg]')
            this.notification = this.container.querySelector('#notification-area > .ws-notificacion-screen')
        }
        return this
    },
    'print_description':function(str){ this.description.textContent = str },
    'print_title':function(str){ this.title.textContent = str },
    'print_status':function(str){ this.status.textContent = str },
    'print_notification':function(str){this.notification.textContent = str },
    'add_component_message':function(component){
        this.conversation.appendChild(component)
    },


    'add_message':function(string){
        component = document.createTextNode(string);
        this.add_component_message(component);

    },


    'print_all_messages':function(arr_chat_log){
        for (line of arr_chat_log){
            if(line.length > 1){ //FIX esta arrojando una línea vácia al final de los registros
                message = WS_MessageDOM.line_to_message(line)
                this.add_component_message(message)
            }
        }
    }
}

