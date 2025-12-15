// const Chat = require('../models/chat.js');

// module.exports = function(io) {
//     io.on('connection', (socket) => {
//         console.log('A user connected');

//         socket.on('joinRoom', ({ roomId }) => {
//             socket.join(roomId);
//         });

//        socket.on('chatMessage', async ({ roomId, message, sender, senderId, hostId, userId, listingId }) => {
//     await Chat.create({
//         listingId,
//         hostId,
//         userId,
//         senderId,
//         message
//     });
//     io.to(roomId).emit('chatMessage', { message, sender, senderId }); // <-- include sender
// });

//         socket.on('disconnect', () => {
//             console.log('User disconnected');
//         });
//     });
// };