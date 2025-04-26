function WS_ChatController(id_component){
   console.log(`Creating chat controller id:${id_component}`)

   this.dom = WS_ChatDOM.__init__(id_component);
   this.model = WS_Chat;
   this.arr_message = [];


    /****** Constructor **********/
    this.__init__ = function(){
        // Setting model
        _container = this.dom.container
        chat_id = _container.querySelector('input[name=chat-id]').value;

        this.model.id = parseInt(chat_id)
        this.model.title = _container.querySelector('input[name=chat-title]').value;
        this.model.description = _container.querySelector('input[name=chat-description]').value;
        this.model.date = _container.querySelector('input[name=chat-date]').value;
        this.model.notification = _container.querySelector('input[name=chat-notification]').value
        console.log('Incializando ChatController', this.model)

        return this
    };

    this.get_chat_id = function() {
        return this.model.id
    }

    this.set_messages = function(){
        this.set_status('Connecting...');
        if(this.model.title) this.set_title()
        this.dom.selection_btns.vhide()
        this.set_notification()
    };

    this.vshow_selection_btns = function(){
        this.dom.selection_btns.vshow()
    };


    this.message_collection
    /*****************************/


    this.add_component_message = function(component){
        this.dom.conversation.appendChild(component)
    };

    
    this.add_converesation_by_array = function(arr_conversation_component){
        for (line of arr_conversation_component){
            if(line.length > 1){ //FIX esta arrojando una línea vácia al final de los registros
                message = WS_MessageDOM.line_to_message(line)
                this.add_component_message(message)
            }
        }
    };


    this.print_all_messages = function(){
        arr_messages = this.message.get_all()
        for( message of arr_messages){
            //component_msg = MessageHelper:log_to_message()
            //this.add_messages(component_msg)
        }
        //thils.dom.set_components(this.arr_message)


    };
    this.add_message = function(component){
        this.dom.add_message(component)
    };
    this.get_components = function(){};
    
    this.set_title = function(str){
        if(!str) str = this.model.title
        this.dom.print_title(str)
    
    };

    this.set_notification = function(str){
        if(!str) str = this.model.notification
        this.dom.print_notification(str)
    };


    this.set_description = function(str){
        if(!str) str = this.model.description
        /*this.dom.print_description(str)*/
    
    };

    
    this.set_status = function(str){
        this.dom.print_status(str)
    
    };


    this.print_message = function(message){
    };

}


