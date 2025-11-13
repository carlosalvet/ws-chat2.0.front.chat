function ws_connect(url) {
    // Propiedad ws (WebSocket)
    this.url = url;
    this.isConnected = false;
    
    this.connect() = function(url='') {
        if (!this.url) this.url = url
        this.ws = new WebSocket(this.url);
    }
    // Método open
    this.open = function() {
        try {
            
            this.ws.onopen = (event) => {
                this.isConnected = true;
                console.log('Conexión WebSocket abierta');
                this.onOpenCallback && this.onOpenCallback(event);
            };
            
            this.ws.onclose = (event) => {
                this.isConnected = false;
                console.log('Conexión WebSocket cerrada');
                this.onCloseCallback && this.onCloseCallback(event);
            };
            
            this.ws.onmessage = (event) => {
                console.log('Mensaje recibido:', event.data);
                this.onMessageCallback && this.onMessageCallback(event.data);
            };
            
            this.ws.onerror = (error) => {
                console.error('Error en WebSocket:', error);
            };
            
        } catch (error) {
            console.error('Error al abrir WebSocket:', error);
        }
    };
    
    // Método close
    this.close = function(code = 1000, reason = '') {
        if (this.ws && this.isConnected) {
            this.ws.close(code, reason);
        }
    };
    
    // Método message (para enviar mensajes)
    this.message = function(data) {
        if (this.ws && this.isConnected) {
            this.ws.send(data);
        } else {
            console.error('WebSocket no está conectado');
        }
    };
    
    // Callbacks para eventos (opcionales)
    this.onOpenCallback = null;
    this.onCloseCallback = null;
    this.onMessageCallback = null;
    
    // Métodos para configurar callbacks
    this.onOpen = function(callback) {
        this.onOpenCallback = callback;
    };
    
    this.onClose = function(callback) {
        this.onCloseCallback = callback;
    };
    
    this.onMessage = function(callback) {
        this.onMessageCallback = callback;
    };
}

/*// Después de conectar, enviar mensaje*/
/*setTimeout(() => {*/
/*socketManager.message('Hola mundo');*/
/*}, 1000);*/

/*// Cerrar conexión después de 5 segundos*/
/*setTimeout(() => {*/
/*socketManager.close();*/
/*}, 5000);*/
