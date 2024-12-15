
export async function getPedidos(){
    return await fetch(`http://localhost:8080/pedidos`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    });
}

export async function createOrder(orderData){
    return await fetch(`http://localhost:8080/pedidos`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderData)
    });
}

export async function deleteOrder(id){
    return await fetch(`http://localhost:8080/pedidos/${id}`,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json'
        }
    });
}