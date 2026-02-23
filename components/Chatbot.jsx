import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { experiences, projects, resume } from '../constants';

const OPENROUTER_API_KEY = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;
const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

// Function to generate AI response
const generateResponse = async (userInput) => {
  const experienceData = experiences.map(exp =>
    `- ${exp.title} at ${exp.company_name} (${exp.date})`
  ).join('\n');

  const projectsData = projects.map(proj =>
    `- ${proj.name}: ${proj.description}`
  ).join('\n');

  const context = `

You are Shiva Karthik's AI assistant. You are friendly, concise, and informative. You only respond using the information provided below:

${resume}

Work Experience:
${experienceData}

Projects:
${projectsData}

Portfolio: Built using React Three Fiber and hosted on Vercel.
Email: shivakarthikeya5@gmail.com
GitHub: https://github.com/Shivakarthikeya23
LinkedIn: https://www.linkedin.com/in/shiva-karthik-rallabandi-006a701a5/

✅ You may answer general responses like "good", "cool", "awesome", "thanks" with short polite replies like "You're welcome!" or "Glad you liked it! 😊"

📵 If the user asks for a phone number or says "number", reply with:
"To get in touch, please fill out the contact form on Shiva's portfolio or email him at shivakarthikeya5@gmail.com."

- If a job description is provided, analyze Shiva's fit based on this resume.
- Be honest and highlight exact tech matches and experience overlap.

❌ Do NOT make up any facts not listed above.
❌ Do NOT say you're an AI model. Do NOT say “I can’t answer that” — simply explain if something is not in the list.

CRITICAL INSTRUCTION: Be brief, helpful, and confident. Avoid follow-up prompts like “Is there anything else?”
`;


  try {
    const response = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://your-site.com",
      },
      body: JSON.stringify({
        model: "google/gemini-2.0-flash-exp:free",
        messages: [
          { role: "system", content: context },
          { role: "user", content: userInput },
        ],
        temperature: 0.3,
        max_tokens: 150
      })
    });

    const data = await response.json();
    console.log(data.choices?.[0]?.message?.content?.trim()); // Log the entire response for debugging purposes
    return data.choices?.[0]?.message?.content?.trim() || "Hmm... I couldn't understand that.";
  } catch (error) {
    console.error('AI Response Error:', error);
    return "I apologize, I'm having trouble connecting to the AI service right now.";
  }
};

function CustomChatbot() {
  const [messages, setMessages] = useState([
    { type: 'bot', content: "Hey! How can I help you learn about Shiva Karthik?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { type: 'user', content: inputValue };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const response = await generateResponse(userMessage.content);
      setMessages(prev => [...prev, { type: 'bot', content: response }]);
    } catch {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: "I'm having trouble connecting to the AI service. Please try again."
      }]);
    }

    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isChatOpen && (
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-5 right-5 w-[60px] h-[60px] bg-[#915eff] rounded-full flex items-center justify-center shadow-lg z-50"
        >
          <Image src="/assets/avatar.png" alt="Chat Avatar" width={40} height={40} className="rounded-full" />
        </button>
      )}

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-5 right-5 w-[350px] h-[500px] bg-[#1d1836] text-white rounded-xl shadow-xl flex flex-col z-50 overflow-hidden">
          {/* Header */}
          <div className="bg-[#915eff] text-white px-4 py-3 flex justify-between items-center font-semibold">
            <div className="flex items-center gap-2">
              <Image src="/assets/avatar.png" alt="Bot Avatar" width={30} height={30} className="rounded-full" />
              Shiva Karthik AI Agent
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-xl hover:scale-110 transition-transform"
            >
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} items-start`}
              >
                {msg.type === 'bot' && (
                  <Image src="/assets/avatar.png" alt="Bot" width={25} height={25} className="rounded-full mr-2" />
                )}
                <div className={`rounded-2xl px-4 py-2 max-w-[80%] text-sm ${msg.type === 'user'
                  ? 'bg-white text-black'
                  : 'bg-[#915eff] text-white'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start">
                <Image src="/assets/avatar.png" alt="Bot" width={25} height={25} className="rounded-full mr-2" />
                <div className="bg-[#915eff] text-white rounded-2xl px-4 py-2 text-sm">Thinking...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="flex items-center p-2 border-t border-white/10">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about Shiva..."
              className="flex-1 px-4 py-2 rounded-full bg-white text-black text-sm mr-2 outline-none"
            />
            <button
              type="submit"
              className="bg-[#915eff] text-white px-4 py-2 rounded-full text-sm"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default function Chatbot() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <CustomChatbot />;
}
