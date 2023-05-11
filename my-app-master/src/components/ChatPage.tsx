import { useState } from 'react';
import Login from './Login';
import Chat from './Chat';
import { v4 as uuid } from 'uuid';
import { User, MessageEvent } from "../modals/modals";


const ChatPage = () => {

    const room = window.drone.subscribe('MyChat');

    room.on('message', (message: any) => {

        const messageEvent: MessageEvent = {
            data: message.data.data,
            id: message.data.id,
            timestamp: message.data.timestamp,
            clientId: message.data.clientId,
            member: {
                id: message.data.member.id,
                clientData: {
                    id: message.data.member.clientData.id,
                    firstName: message.data.member.clientData.firstName,
                    lastName: message.data.member.clientData.lastName,
                }
            }
        };

        setMessages([...messages, messageEvent])
    });

    const [user, setUser] = useState<User>({ id: '', firstName: '', lastName: '' });
    const [messages, setMessages] = useState<MessageEvent[]>([]);
    const [isLoggedIn, setLoggedIn] = useState<boolean>(false);

    const handleSend = (message: string) => {

        const messageEvent: MessageEvent = {
            data: message,
            id: uuid(),
            timestamp: new Date().getUTCMilliseconds(),
            clientId: uuid(),
            member: {
                id: uuid(),
                clientData: user
            }
        };

        window.drone.publish({
            room: 'MyChat',
            message: messageEvent
        });

        //setMessages([...messages, messageEvent])
    }

    const handleLogin = (isLoggedIn: boolean, firstName: string, lastName: string) => {
        const id = uuid();
        
        setUser({
          id: id,
          firstName: firstName,
          lastName: lastName,
        });
        
        setLoggedIn(isLoggedIn);
      };
      
      return (
        <div>
          {isLoggedIn ? (
            <Chat userId={user.id} messages={messages} onSend={handleSend} />
          ) : (
            <Login onLoggedIn={handleLogin} />
          )}
        </div>
      );
      
      




}

export default ChatPage;