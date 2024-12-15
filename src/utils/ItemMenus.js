
export async function getItemMenus(){
    return await fetch(`http://localhost:8080/item-menu`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    });
}

export async function createPlato(item) {
    return await fetch(`http://localhost:8080/item-menu/plato`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });
}

export async function createBebida(item) {
    return await fetch(`http://localhost:8080/item-menu/bebida`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    });
}

export async function deleteItemMenu(item) {
    return await fetch(`http://localhost:8080/item-menu/${item.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function editItemMenu(item) {
    if(item.type === "PLATO"){
        return await fetch(`http://localhost:8080/item-menu/plato/${item.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
    }else{
        return await fetch(`http://localhost:8080/item-menu/bebida/${item.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
    }
}