export const setDataToStorage = (key: string, value: string) => {
    sessionStorage.setItem(key, value);
}

export const getDataFromStorage = (key: string) => {
    return sessionStorage.getItem(key);
}

export const storageData = (key: string) => {
   
    let initialState = {};
  
    if ( getDataFromStorage(key) ) {
        try {  initialState = {...JSON.parse(getDataFromStorage(key) as string )}; }
        catch(err){}
    }

    return initialState;
}