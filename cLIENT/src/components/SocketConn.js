import io from "socket.io-client";

let socket = io('http://192.168.1.105:5000');

export default socket;
