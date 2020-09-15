import React, { useEffect, useState, useCallback } from "react";

import { GiftedChat } from "react-native-gifted-chat";

import { Container } from "./styles";

export interface IUser {
  _id: number;
  name: string;
  avatar: string;
}
export interface IMessage {
  _id: string | number;
  text: string;
  createdAt: Date | number;
  user: IUser;
  image?: string;
  video?: string;
  audio?: string;
  system?: boolean;
  sent?: boolean;
  received?: boolean;
  pending?: boolean;
}

export default function MessagesScreen() {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <Container>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </Container>
  );
}
