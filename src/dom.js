window.dom = {
    create(string) {
        const container = document.createElement("template");
        container.innerHTML = string.trim();
        return container.content.firstChild;
    },
    after(node, node2){
        node.parentNode.insertBefore(node2, node.nextSibling);
    },
    before(node, node2) {
        node.parentNode.insertBefore(node2, node)
    },
    append(parent, node) {
        parent.append(node)
    },
    wrap(node, parent) {
        dom.before(node, parent)
        dom.append(parent, node)
    },
    style(node, name, value) {
        if(arguments.length == 3) {
            node.style[name] = value
        }else if(arguments == 2) {
            if(typeof name === 'string') {
                return node.style[name]
            }else if(name instanceof Object) {
                const object = name
                for(let key in object) {
                    node.style[key] = object[key]
                }
            }
        }
        
    },
    find(selector, scope) {
        return (scope || document).querySelectorAll(selector)
    },
    children(node) {
        return node.children
    },
    each(nodeList, fn) {
        for(let i=0; i<nodeList.length; i++){
            fn.call(null, nodeList[i])
        }
    },
    index(node) {
        const list = dom.children(node.parentNode)
        console.log(list)
        let i
        for(i=0; i<list.length; i++) {
            if(list[i] == node) {
                break
            }
        }
        return i
    }
}; 