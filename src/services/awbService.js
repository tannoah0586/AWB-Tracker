//source:
//  https://baseql.com/blog/airtable-api-keys.html
// https://docs.superblocks.com/learning-and-resources/technical-guides/fetch-paginated-airtable-data
// https://shejanmahamud.medium.com/implement-pagination-in-react-app-7bf74f1581a9?
// https://codepen.io/airtable/full/MeXqOg
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
// https://www.youtube.com/watch?v=6fOuDxcbjyg

// const show = async () => {
//     try {
//         const url = 'https://api.airtable.com/v0/apphE3zWlHz0yHyz5/Shipments'
//         const apiKey = import.meta.env.VITE_API_TOKEN;

//         const response = await fetch(url, {
//             headers: {
//               'Authorization': `Bearer ${apiKey}`,
//               'Content-Type': 'application'
//             }
//         });
//         const data = await response.json()
//         console.log('Data:', data);
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// };

// export { show };

import Airtable from 'airtable';

const show = async () => {
    try {
        const baseId = 'apphE3zWlHz0yHyz5';
        const tableName = 'tbl5Vj0rjrKkrzE1w';
        const apiKey = import.meta.env.VITE_API_TOKEN;
        const base = new Airtable({ apiKey }).base(baseId);
        
        let data = [];  //array outcome

        return new Promise((fulfil, reject) => {      //chained promise
            base(tableName).select({
                maxRecords:200,
                view: "Grid view",
            }).eachPage((records, fetchNextPage) => {
                records.forEach(record => {
                    data.push(record);
                });
                fetchNextPage()
            }, (err) => {
                if (err) {
                    reject(err);
                } else {
                    fulfil(data);
                }
            });
        });
    } catch (error) {
        console.log(error);
    }
};

export { show };