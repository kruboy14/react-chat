import { io } from 'socket.io-client';
const socket = io('https://react-chat-hard-back.herokuapp.com/');

socket.on("connect", () => {
  console.log(socket); // true
});
export default socket