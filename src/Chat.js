import { AddCircle, CardGiftcard, EmojiEmotions, Gif } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import "./Chat.css"
import ChatHeader from './ChatHeader'
import { selectChannelId, selectChannelName } from './features/appSlice'
import { selectUser } from './features/userSlice'
import db from './firebase'
import Message from './Message'
// Timestamp 
import firebase from 'firebase'

export default function Chat() {

    // Pulling channel info from redux to pass into Header

    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);

    // 
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    //  

    useEffect( () => {
        if (channelId) {
        db.collection('channels')
            .doc(channelId)
            .collection('messages')
            .orderBy('timestamp', "desc")
            .onSnapshot( snapshot => 
                setMessages(snapshot.docs.map( doc => doc.data()))
            );
        }
    }, [channelId]);

    const sendMessage = (e) => {
        e.preventDefault();

        db.collection('channels')
            .doc(channelId)
            .collection('messages')
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                user: user,
            });

        setInput('')

    };

    return (
        <div className="chat">
            
            <ChatHeader
                channelName={channelName}
            />

            <div className="messages">
            {
                messages.map( ({timestamp, message, user}) => (
                    <Message 
                        // key={}
                        timestamp={timestamp}
                        message={message}
                        user={user}
                    />
                ))
            }


            </div>

            <div className="chat__input">
                <AddCircle fontSize="large" />

                <form 
                    className="chat__inputForm"
                    >
                    <input 
                        value={input}
                        disabled={!channelId}
                        onChange={ (e) => setInput(e.target.value)}
                        placeholder="Test Message"
                     />
                    <button 
                        disabled={!channelId}
                        type="submit" 
                        className= "chat__inputButton"
                        onClick={sendMessage}
                    >
                        Send Message
                    </button>
                </form>

                <div className="chat__inputIcons">
                    <CardGiftcard fontSize="large"/>
                    <Gif fontSize="large"/>
                    <EmojiEmotions fontSize="large"/>
                </div>
            </div>
        </div>
    )
}
