import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const useSocket = () => {   
    const [socket, setSocket] = useState<any>(null);
    
    useEffect((): any => {
        const newSocket = io(`http://${window.location.hostname}:5000`);
        setSocket(newSocket);
    
        return () => newSocket.close();
    }, []);

    const emitEvent = (eventName: string, payload: any) => {
        socket?.emit(eventName, payload);
    }

    const addEventListener = (eventName: string, callback: any, destroyDuplicate = false) => {
        if(socket) {
            console.log(socket.listeners(eventName))
            if(destroyDuplicate) {
                socket.off(eventName);
            }
            socket.on(eventName, callback);
        }
    }

    return [socket, emitEvent, addEventListener];
}


export default useSocket;