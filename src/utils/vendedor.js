
export async function createVendedor(vendedor){
    return await fetch(`http://localhost:8080/vendedores`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(vendedor)
    });
    };

export async function deleteVendedor(vendedor){
        return await fetch(`http://localhost:8080/vendedores/${vendedor.id}`,{
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vendedor)
        });
    };

    export async function editVendedor(vendedor){
        console.log("id",vendedor.id);
        try{return await fetch(`http://localhost:8080/vendedores/${vendedor.id}`,{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(vendedor)
        });}catch(error){
            console.error("Error al editar el vendedor:", error);
        }
    };

    export async function getVendedores() {
        try {
            const response = await fetch("http://localhost:8080/vendedores", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            return response;
        } catch (error) {
            console.error("Error en la solicitud:", error);
            throw error; // Lanza el error para que sea manejado en el componente
        }
    }