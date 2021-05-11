import { io } from 'socket.io-client';
const socket = io('http://localhost:3333/');

socket.on("connect", () => {
  console.log(socket); // true
});
export default socket