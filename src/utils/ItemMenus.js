
export async function getItemMenus(){
    return await fetch(`http://localhost:8080/item-menu/`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    });
}