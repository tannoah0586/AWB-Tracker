//source https://baseql.com/blog/airtable-api-keys.html

const show = async () => {
    try {
        const baseId = 'apphE3zWlHz0yHyz5';
        const tableName = 'Shipments';
        const apiKey = 'patVPlfj3gW1ev6ps.3b2e47037a8886c3ec7c8de3992214128c199bfe692b2d0e16c4a48ae414a3f8'; 
        const res = await fetch(`https://api.airtable.com/v0/${baseId}/${tableName}`, {
            headers: {
              'Authorization': `Bearer ${apiKey}`
            }
        })
        const data = await res.json()
        console.log('Data:', data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export { show };

