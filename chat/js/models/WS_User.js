WS_User = function(id, chat_id){
    this.id = id
    this.chat_id = chat_id
    this.name = ''
    this.role = 'visual'
    this.image_path = 'chat/images/admin-avatar.png'
    this.session_id = ''

    this.__init__ = function(){
    },

    this.set_from_arr = function(arr){
        this.id = arr[2]
        this.chat_id = arr[1]
        this.name = arr[4]
        this.rol = arr[3]
        this.image_path = `chat-edomex/tmp/user/${arr[1]}-${arr[2]}`
        this.session_id = ''
    }
};

WS_User_Collector = {
    collection:[],
    'collection_from_arr':function(arr){
        for(item of arr){
            ws_user = new WS_User();
            collection.push(ws_user.set_from_arr(arr))
        }

    }
};
