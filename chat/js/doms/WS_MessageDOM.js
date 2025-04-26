WS_MessageDOM = {
    'container':null,


    '__init__':function(id){
       this.container = document.getElementById(id); 
    },


    'get_all':function(){
    
    },


    'line_to_message': function(arr_line){
        ws_user = new WS_User();
        ws_user.id = arr_line[0]
        ws_user.role = arr_line[2]
        ws_user.name = arr_line[3]

        ws_message = new WS_Message();
        ws_message.id = arr_line[0]
        ws_message.date = arr_line[1]
        ws_message.body = arr_line[4]
        ws_message.image = ws_user.image_path
        ws_message.username = ws_user.name
        ws_message.role = ws_user.role

        component = Comp_MsgAdminHelper.create(ws_message)

        return component 
    }

}
