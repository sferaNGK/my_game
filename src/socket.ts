import { io } from 'socket.io-client';

const options = {
    'force new connection': true,
    reconnectionAttempt: 'Infinity',
    reconnection: true,
    timeout: 10000,
    transports: ['websocket'],
};
export const socket = io("http://localhost:3800", options);