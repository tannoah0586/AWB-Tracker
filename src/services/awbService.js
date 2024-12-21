//source https://baseql.com/blog/airtable-api-keys.html

const show = async () => {
    try {
        const baseId = 'apphE3zWlHz0yHyz5';
        const tableName = 'Shipments';
        const apiKey = import.meta.env.VITE_API_TOKEN;
        const res = await fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
            headers: {
              'Authorization': `Bearer ${apiKey}`
            }
        });
        const data = await res.json()
        console.log('Data:', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export { show };

