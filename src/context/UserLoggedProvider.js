import { createContext, useContext, useState } from "react";

const UserLoggedContext = createContext({});

export function UserLoggedProvider({ children }) {
    //Capturando os dados do Local Storage
    const [idUser, setIdUser] = useState(() => {
        const idUserStorage = JSON.parse(localStorage.getItem('@idUser'));
        if (idUserStorage) {
            return idUserStorage;
        } 
        return {};
    })
    const [clientIP, setClientIP] = useState(() => {
        const clientIPStorage = JSON.parse(localStorage.getItem('@clientIP'));
        if (clientIPStorage) {
            return clientIPStorage;
        } 
        return {};
    })

    //Salvando os dados no local storage
    function saveIpClient(ip) {
        setClientIP(ip)

        localStorage.setItem('@clientIP', JSON.stringify(ip));
    }
    function saveIdUser(id) {
        setIdUser(id)

        localStorage.setItem('@idUser', JSON.stringify(id));
    }

    return (
        <UserLoggedContext.Provider value={{ saveIpClient, saveIdUser, clientIP, idUser }}>
            {children}
        </UserLoggedContext.Provider>
    )
}
const useUserLogged = () => useContext(UserLoggedContext)
export { useUserLogged }