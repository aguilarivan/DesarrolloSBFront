export async function getCategories(){
    return await fetch(`http://localhost:8080/categoria`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    });
}

export async function createCategory(category) {
    return await fetch(`http://localhost:8080/categoria`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(category)
    });
}

export async function deleteCategory(categoryId) {
    return await fetch(`http://localhost:8080/categoria/${categoryId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    });
}