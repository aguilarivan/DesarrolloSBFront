
export async function createVendedor(vendedor){
    return await fetch(`http://localhost:8080/vendedores/`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(vendedor)
    });
    };

export async function deleteVendedor(vendedor){
        return await fetch(`http://localhost:8080/vendedores/${vendedor.id}/`,{
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vendedor)
        });
    };

    export async function editVendedor(vendedor){
        return await fetch(`http://localhost:8080/vendedores/${vendedor.id}/`,{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vendedor)
        });
    };

    export async function getVendedores(){
        return await fetch(`http://localhost:8080/vendedores/`,{
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        });
    };