class SessionStorageDB {
    get(key) {
        return sessionStorage.getItem(key);
    }
    set(key, val) {
        sessionStorage.setItem(key, val);
    }
}

class LocalStorageDB {
    get(key) {
        return localStorage.getItem(key);
    }
    set(key, val) {
        localStorage.setItem(key, val);
    }
}

const sessionStorageDB = new SessionStorageDB();
const localStorageDB = new LocalStorageDB();

const setValue = (storageDB, key, val) => {
    storageDB.set(key, val);
}

const getValue = (storageDB, key) => {
    return storageDB.get(key);
}

document.getElementById("btnSave").addEventListener("click", () => {
    const txt = document.getElementById("inpText").value;
    setValue(localStorageDB, 'my-value', txt);
});

document.getElementById("btnLoad").addEventListener("click", () => {
    const value = getValue(localStorageDB, 'my-value');
    document.getElementById("result").innerText = value;
});