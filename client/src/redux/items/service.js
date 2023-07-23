const addItem = async (item) => {
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/items`, {
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
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/items`, {
        method: 'GET'
    });
    return response.json();
};

const deleteItem = async (itemId) => {
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/items/${itemId}`, {
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

const updateItem = async (item) => {
    const response = await fetch(`${process.env.REACT_APP_REST_API_URL}/items`, {
        method: 'PUT',
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

    return item;
};

export default {
    addItem,
    getItems,
    deleteItem,
    updateItem,
};
