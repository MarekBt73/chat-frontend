import { MetaFunction } from "@remix-run/node";
import { useEffect, useState, FormEvent } from "react";

export const meta: MetaFunction = () => {
  return [
    { title: "Chat" },
    { name: "description", content: "Chat Mentor" },
  ];
};

type Message = {
  user: string;
  text: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    // Tutaj można dodać logikę do pobierania wiadomości z serwera
  }, []);

  const handleSendMessage = async (event: FormEvent) => {
    event.preventDefault();
    // Logika wysyłania wiadomości na serwer
    setMessages([...messages, { user: "you", text: message }]);
    setMessage("");
  };

  return (
    <div className="chat-container flex flex-col h-screen pb-64 font-sans p-4">
      <div className="card flex-grow flex flex-col">
        <div className="card-header bg-green-500 text-white p-4">
          Korepetycja z Matematyki
        </div>
        <div className="card-body messages-box flex-grow overflow-y-auto p-4 bg-gray-100">
          <ul className="messages-list space-y-4">
            <li className="message received flex flex-col items-start">
              <div className="flex items-center">
                <img
                  src="/images/mateu-1.webp"
                  alt="Math-Bot - Robot Tutor"
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div className="message-text p-3 bg-gray-200 rounded-lg">
                  <div className="message-sender font-bold">Math-Bot</div>
                  <div className="message-content">
                    Cześć, jestem Math-Bot - twój wirtualny mentor matematyczny. W czym mogę ci pomóc?
                  </div>
                </div>
              </div>
            </li>
            {messages.map((chat, index) => (
              <li
                key={index}
                className={`message ${chat.user === "you" ? "sent" : "received"} flex flex-col items-start`}
              >
                <div className="flex items-center">
                  <img
                    src={chat.user === "you" ? "/images/you.png" : "/images/mateu-1.webp"}
                    alt={chat.user}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div className={`message-text p-3 ${chat.user === "you" ? "bg-green-100" : "bg-gray-200"} rounded-lg`}>
                    <div className="message-sender font-bold">{chat.user === "you" ? "You" : "Math-Bot"}</div>
                    <div className="message-content">
                      {chat.text}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full bg-green-500 py-5 fixed bottom-0 left-0 right-0 flex items-center flex-col justify-center">
        <form method="get" action="/start-new-chat">
          <button
            type="submit"
            className="btn-new-chat bg-fuchsia-500 text-white px-6 py-2 rounded-md hover:bg-fuchsia-800"
          >
            Rozpocznij nowy chat
          </button>
        </form>
        <form className="message-form flex items-center justify-center px-10 py-5 w-full bg-green-500" onSubmit={handleSendMessage}>
          <div className="w-full max-w-6xl mb-4 border border-gray-200 rounded-lg bg-gray-50 drop-shadow-xl">
            <div className="px-4 py-2 bg-white rounded-t-lg">
              <label htmlFor="message" className="sr-only">Wpisz pytanie</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-3 text-sm text-gray-900 bg-white border-0 focus:ring-0"
                placeholder="Wpisz pytanie..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="grid grid-cols-3 grid-flow-row px-3 py-2 border-t">
              <button
                type="submit"
                className="w-[180px] bg-slate-100 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mx-auto cursor-pointer my-5"
              >
                Wyślij
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
