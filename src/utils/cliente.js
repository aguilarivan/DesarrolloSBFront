
export async function createCliente(cliente){
    return await fetch(`http://localhost:8080/clientes`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    });
    }

export async function deleteCliente(cliente){
    return await fetch(`http://localhost:8080/clientes/${cliente.id}`,{
        method:'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    });
}

export async function editCliente(cliente){
    return await fetch(`http://localhost:8080/clientes/${cliente.id}`,{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    });
}

export async function getClientes(){
    return await fetch(`http://localhost:8080/clientes`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    });
}