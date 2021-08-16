/**
 
 Every response should hold data and metadata:

 {
    data: ..., // will be the same as it now for each request
    meta: {
        single_entry: '/api/....', // optional (only if returning some list of entries)
        list_entries: '/api/.....', // optional (only if return single entry)
        links: {
            first: '/api/....', // optional (only if not on first page)
            prev: '/api/....', // optional (only if previous page exists)
            next: '/api/....', // optional (only if next page exists)
            last: '/api/....', // optional (only if not on last page)
        }
    }
 }

 */

// const hostname = `http://localhost:3000`;

/**
 * @param {*} req - Request object form "express" incomming request
 * @param {*} initialData  - data that is returned from repository
 */
function addMetaData(req, res, initialData) {
    let data;
    const meta = {};

    // add pagination meta data
    const { query, hostname, baseUrl,  } = req; // holds from query params: /api/...?offset=20&limit=10
    // const { offset = 0, limit = 10 } = query;
    const offset = Number(query.offset) || 0;
    const limit = Number(query.limit) || 10;

    const isList = Array.isArray(initialData);

    if (isList) {
        // provide single entry url
        meta.single_entry = `http://${hostname}:3000${baseUrl}/:id`;
        
        // need to all pagination meta links
        if (initialData.length > limit) {
            meta.links = {};
            // add pagination links & slice data accordingly
            if (offset > 0) {
                meta.links.first = `http://${hostname}:3000${baseUrl}?offset=0&limit=${limit}`;
            }
            if (offset > 0) {
                meta.links.prev = `http://${hostname}:3000${baseUrl}?offset=${Math.max(offset - limit, 0)}&limit=${limit}`;
            }
            if (initialData.length > offset + limit) {
                meta.links.next = `http://${hostname}:3000${baseUrl}?offset=${offset + limit}&limit=${limit}`;
            }
            if (initialData.length > offset + limit) {
                // floor((77 - 1) / 10) ==> 7 * 10 ==> offset = 70
                // floor((80 - 1) / 10) ==> 7 * 10 ==> offset = 70
                // floor((81 - 1) / 10) ==> 8 * 10 ==> offset = 80
                const lastPossibleOffset = Math.floor((initialData.length - 1) / limit) * limit;
                meta.links.last = `http://${hostname}:3000${baseUrl}?offset=${lastPossibleOffset}&limit=${limit}`;
            }
            data = initialData.slice(offset, offset + limit);
        } else {
            data = initialData;
        }

        res.setHeader('content-total-length', initialData.length)
    } else {
        data = initialData;
        // need to provide meta.list_entries
        // i.e., /api/students-manegement/api/students/12 ==> /api/students-manegement/api/students
        meta.list_entries = `http://${hostname}:3000${baseUrl.replace(/\/\d+$/, '')}`;
    }

    return {
        data,
        meta,
    };
}

module.exports = addMetaData;
