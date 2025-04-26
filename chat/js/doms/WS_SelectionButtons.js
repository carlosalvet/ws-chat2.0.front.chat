WS_SelectionButtons = {
    'container':document.querySelector('.buttons-wrapper'),
    'role-btns':null,
    'txt-msg':null,
    'auth-citizen':null,
    'auth-expert':null,

    '__init__':function(container){
        this.container = container.querySelector('.buttons-wrapper')
        this['role-btns'] = this.container.querySelector('.ws-role-buttons')
        this['txt-msg'] = this.container.querySelector('.ws-send-message')
        this['auth-citizen'] = this.container.querySelector('.auth-citizen-interface')
        this['auth-expert'] = this.container.querySelector('.auth-expert-interface')
        return this
    },

    'hide':function(element=''){
        this['role-btns'].classList.add('hidden')
        this['txt-msg'].classList.add('hidden')
        this['auth-citizen'].classList.add('hidden');
        this['auth-expert'].classList.add('hidden');    
    
    },

    'vhide':function(element=''){
        this.container.classList.add('vhidden');

    },

    'vshow':function(element=''){
        this.container.classList.remove('vhidden');
    },

    'show':function(element){
        if(element == 'select-role') {
            this.hide()
            this['role-btns'].classList.remove('hidden')
        } else if( element == 'auth-citizen'){
            this.hide()
            this['auth-citizen'].classList.remove('hidden')
        } else if( element == 'auth-expert'){
            this.hide()
            this['auth-expert'].classList.remove('hidden')
        } else if(element == 'txt-msg'){
            this.hide()
            this['txt-msg'].classList.remove('hidden')
        }
 
    }
}
