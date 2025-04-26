Comp_MsgAdminHelper = {

	'create': function(ws_message){
		wrapper_left = this.create_wrapper_left(ws_message)

		msg_date = this.create_date(ws_message)
		title_admin = this.create_title(ws_message)
		body = this.create_div_message(ws_message)		
		wrapper_right = this.create_wrapper_right(title_admin, msg_date, body)


		component = this.create_post(wrapper_left, wrapper_right)
		return component
	},

	'create_date':function(ws_message){
		text = document.createTextNode(ws_message.date)
		msg_date = document.createElement('div')
		msg_date.classList.add('ws-post-date')
		msg_date.appendChild(text)
		return msg_date
	},

	'create_title':function(ws_message){
		text = document.createTextNode(`${ws_message.username}(${ws_message.role})`)
		title_admin = document.createElement('h3')
		title_admin.classList.add('post-title-admin')
		title_admin.appendChild(text)
		return title_admin
	},
	
	'create_wrapper_right':function(title_admin, msg_date, body){
		wrapper_right = document.createElement('div')
		wrapper_right.classList.add('ws-post-right')
		wrapper_right.appendChild(title_admin)
		wrapper_right.appendChild(msg_date)
		wrapper_right.appendChild(body)
		return wrapper_right
	},

	'create_wrapper_left':function(ws_meessage){
		img = document.createElement('img')
		img.src = ws_message.image 

		ws_image = document.createElement('div')
		ws_image.classList.add('ws-image')
		ws_image.appendChild(img)
		return ws_image
	},

	'create_div_message':function(ws_message){
		ws_post_message = document.createElement('div')
		ws_post_message.classList.add('ws-post-message')
		ws_post_message.appendChild(document.createTextNode(ws_message.body))
		return ws_post_message	
	},

	'create_post':function(wrapper_left, wrapper_right){
		ws_post = document.createElement('div')
		ws_post.classList.add('ws-post', 'border-shadow')

		ws_post.appendChild(wrapper_left)
		ws_post.appendChild(wrapper_right)
        return ws_post
	}
}
