//source:

// https://www.youtube.com/watch?v=6fOuDxcbjyg


const  getallRecords = async () => {
    const url = 'https://api.airtable.com/v0/apphE3zWlHz0yHyz5/Shipments';
    let records = [];
    const initial_response = await show(url);
    records.push(initial_response.records);
    let offset = initial_response.offset;
    if (offset !== undefined) {
        do {
            const response = await show(url,offset)
            records.push(response.records)
            offset = response.offset
        } while (offset !== undefined)
    }
    records = records.flat();
    return { records };
    console.log(`records count: ${records.length}`);    
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

// import Airtable from 'airtable';

// const show = async () => {
//     try {
//         const baseId = 'apphE3zWlHz0yHyz5';
//         const tableName = 'tbl5Vj0rjrKkrzE1w';
//         const apiKey = import.meta.env.VITE_API_TOKEN;
//         const base = new Airtable({ apiKey }).base(baseId);
        
//         let data = [];  //array outcome

//         return new Promise((fulfil, reject) => {      //chained promise
//             base(tableName).select({
//                 maxRecords:200,
//                 view: "Grid view",
//             }).eachPage((records, fetchNextPage) => {
//                 records.forEach(record => {
//                     data.push(record);
//                 });
//                 fetchNextPage()
//             }, (err) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     fulfil(data);
//                 }
//             });
//         });
//     } catch (error) {
//         console.log(error);
//     }
// };

// export { show };