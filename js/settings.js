"use strict";

var PREFIX_FUNCT = 'react_'
var SESSION = {}

function get_prefix_funct(){
    return PREFIX_FUNCT
}

function get_session(){
    return SESSION
}


function get_value(element, type){
    if (!type) type='str'
    let _value = ''

    if (element && element instanceof Node)  _value = element.value;
    else 
      if (type == 'str') _value =  '';
      else if (type == 'int') _value =  0;
      else if (type == 'obj') _value =  null; 
      else if (type == 'bool') _value =  false;
      else if (type == 'arr') _value =  [];

    return _value
}

function dom_get_node(selector, content=null){
    if (!selector || typeof selector != 'string' ) selector = null
    if (!content) content = document 
    let node = content.querySelector(selector)
    return node 
}

function parse_request(arr_headers, message=""){
    let str = ""
    //if (!arr_headers instanceof 'object') return str

    for (const [key, value] of Object.entries(arr_headers)) {
        str += `${key}:${value}\n`
    }
    if (message) str += `\n${message}`;

    return str

}
