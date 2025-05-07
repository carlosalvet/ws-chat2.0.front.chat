function crear_chat(ws){
	let data = {}

	data['idChat'] = document.getElementById("id").value;
	data['dependencyChat'] = document.getElementById("dependency").value;
	data['titleChat'] = document.getElementById("title").value;
	data['descriptionChat']  = document.getElementById("description").value;
	json_data = JSON.stringify(data)

	__enviarMensaje({}, json_data);


	cleanForm();
}

function cleanForm(){

	let idChat = document.getElementById("id");
	let dependencyChat = document.getElementById("dependency");
	let titleChat = document.getElementById("title");
	let descriptionChat = document.getElementById("description");

	idChat.value = "";
	dependencyChat.value = "";
	titleChat.value = "";
	descriptionChat.value = "";
}

function __enviarMensaje(header, json_data){

	let arr = [];

	arr["event"] = "chat-create";
	let request = parse_request(arr, json_data);


	ws.send(request);

	

}


// Busca la información de los chats

function get_chat_data() {
	console.log("Search Data.... ")

	let arr = [];
	arr["event"] = "chat-list";
	let request = parse_request(arr);
	ws.send(request);
}

// Elimina el acceso al chat

function delete_chat() {
	console.log("Delete chat.... ")
	console.log(document.getElementById("idchat").value)


	let data = {};
	let idChat = document.getElementById("idchat");
	data['titleChat'] = document.getElementById("idchat").value;
	data['idChat'] = idChat.options[idChat.selectedIndex].text

	let arr = [];
	json_data = JSON.stringify(data);
	arr["event"] = "chat-delete";
	let request = parse_request(arr, json_data);
	ws.send(request);
}

// Elimina el chat

function destroy_chat() {
	console.log("Destroy chat.... ")

	let idChat = document.getElementById("idchat");
	let data = {};
	data['titleChat'] = document.getElementById("idchat").value;
	data['idChat'] = idChat.options[idChat.selectedIndex].text
    json_data = JSON.stringify(data)

	let request = parse_request({"event":"chat-destroy"}, json_data);
	ws.send(request);
}


