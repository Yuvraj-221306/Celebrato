const Chat = require('../models/chat.js');

exports.getChat = async (req, res) => {
    const { listingId, hostId } = req.params;
    const userId = req.user._id;

    // Fetch all messages for this listing between host and user
    const messages = await Chat.find({
        listingId,
        $or: [
            { hostId: hostId, userId: userId },
            { hostId: userId, userId: hostId }
        ]
    }).sort({ createdAt: 1 });

    res.render('chat/chat', {
        listingId,
        hostId,
        userId,
        messages: messages || []
    });
};

exports.sendMessage = async (req, res) => {
    const { listingId, hostId } = req.params;
    const userId = req.user._id;
    const { text } = req.body;

    await Chat.create({
        listingId,
        hostId,
        userId,
        senderId: userId,
        message: text,
        read: false
    });

    res.redirect(`/chat/${listingId}/${hostId}`);
};

// In controllers/chat.js
exports.getInbox = async (req, res) => {
    const userId = req.user._id;
    // Find all chats where the user is either the guest or the host
    const chats = await Chat.find({
        $or: [
            { userId: userId },
            { hostId: userId }
        ]
    }).populate('hostId userId');

    // Group by listing and the other participant, keep latest message
    const seen = new Map();
    chats.forEach(chat => {
        let otherUser;
        if (String(chat.hostId._id) === String(userId)) {
            otherUser = chat.userId;
        } else {
            otherUser = chat.hostId;
        }
        const key = `${chat.listingId}-${otherUser._id}`;
        // If not seen, add; if seen, update if newer
        if (!seen.has(key) || chat.createdAt > seen.get(key).lastMessage.createdAt) {
            seen.set(key, {
                listingId: chat.listingId,
                otherUser,
                lastMessage: chat
            });
        }
    });

    // Convert Map to array and sort by latest message date (descending)
    const conversations = Array.from(seen.values()).sort(
        (a, b) => b.lastMessage.createdAt - a.lastMessage.createdAt
    );

    res.render('chat/inbox', { conversations });
};