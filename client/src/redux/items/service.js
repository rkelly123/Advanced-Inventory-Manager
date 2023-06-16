const addItem = async (item) => {
    const response = await fetch('http://localhost:3002/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
    });

    const data = await response.json();

    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg);
    }

    return data;
};

const getItems = async () => {
    const response = await fetch('http://localhost:3002/items', {
        method: 'GET'
    });
    return response.json();
};

const deleteItem = async (itemId) => {
    const response = await fetch(`http://localhost:3002/items/${itemId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const data = await response.json();

    if (!response.ok) {
        const errorMsg = data?.message;
        throw new Error(errorMsg);
    }

    return itemId;
};

export default {
    addItem,
    getItems,
    deleteItem,
};
