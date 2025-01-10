//source:
const  getallRecords = async () => {
    const url = 'https://api.airtable.com/v0/apphE3zWlHz0yHyz5/Shipments';
    let records = [];
    const initial_response = await show(url, undefined, 20);
    records.push(initial_response.records);
    let offset = initial_response.offset;
    if (offset !== undefined) {
        do {
            const response = await show(url,offset,20);
            records.push(response.records)
            offset = response.offset
        } while (offset !== undefined)
    }
    records = records.flat();
    return {records};
    // console.log(`records count: ${records.length}`);    
}

const show = async (url,offset) => {
    try {
        const apiKey = import.meta.env.VITE_API_TOKEN;
        if (offset !==undefined) {
            url = url + '?offset=' + offset
        }
        const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${apiKey}`,
              'Content-Type': 'application/json'
            }
        
        });
        const data = await response.json()
        // console.log('Data ',data.records);
        return data;
    } catch (error) {
        console.log(error);
    }
};
export {show,getallRecords};