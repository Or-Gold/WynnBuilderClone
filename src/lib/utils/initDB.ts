
const VERSION = 0;

export default async function initDB() {
    const openDBRequest: IDBOpenDBRequest = indexedDB.open('items', VERSION)

    openDBRequest.onupgradeneeded = async () => {
        const remote_db: IDBDatabase = openDBRequest.result;
        const local_db = await (await fetch('itemDB.json')).json();

        const transaction: IDBTransaction = remote_db.transaction('items', 'readwrite');
        for (let cat of local_db) {
            for (let item of cat) {
                transaction.objectStore('items').add(item, item.name);
            }
        }

    };

    openDBRequest.onsuccess = () => { };

    openDBRequest.onerror = (err) => { console.log(err) };

}

