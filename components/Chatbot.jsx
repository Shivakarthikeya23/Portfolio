import { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const OPENROUTER_API_KEY = process.env.NEXT_PUBLIC_OPENROUTER_API_KEY;
const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";

// Function to generate AI response
const generateResponse = async (userInput) => {
  try {
    const response = await fetch(OPENROUTER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://your-site.com",
      },
      body: JSON.stringify({
        model: "mistralai/mistral-7b-instruct",
        messages: [
          {
            role: "system",
            content: `{
  role: "system",
  content: "You are Shiva Karthik's AI assistant. Only respond based on the real information provided below:

Resume:
- Programming Languages: Python, Go, TypeScript, C#, Java
- Tools & Frameworks: React, Node.js, Angular, Express, MongoDB, Flask, .NET, Docker, AWS, Azure

Work Experience:
- SDE at Ivanti
- Student Content Writer at CMU
- Copy Content Specialist for CBA

Projects:
1. Azure Cost Optimizer - AI-powered tool that recommends Azure scaling strategies.
2. StoryBooks - MERN app with secure CRUD for story management.
3. Parkinson's Disease Detection - ML app with 92% accuracy.
4. Fitness Buddy - Full-stack fitness tracker with habit analytics.

Portfolio: Built using Three.js, React, and hosted on Vercel.

Only use the above data when answering questions about Shiva. If something isn't in the list, say "This information isn't available in Shiva's resume or projects."
}
`
          },
          {
            role: "user",
            content: userInput
          }
        ]
      })
    });

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "Hmm... I couldn't understand that.";
  } catch (error) {
    console.error('AI Response Error:', error);
    return "I apologize, I'm having trouble right now. Could you try asking something else about Shiva's background or projects?";
  }
};

// Async response component
function AsyncResponse({ previousStep, triggerNextStep }) {
  const [response, setResponse] = useState('');

  useEffect(() => {
    let isSubscribed = true;

    const fetchResponse = async () => {
      const result = await generateResponse(previousStep.value);

      if (isSubscribed) {
        setResponse(result);

        // Speak only if input came from mic
        if (previousStep.metadata?.isMicInput) {
          const speech = new SpeechSynthesisUtterance(result);
          speech.lang = 'en-US';
          window.speechSynthesis.speak(speech);
        }

        setTimeout(() => {
          if (isSubscribed) triggerNextStep();
        }, 100);
      }
    };

    fetchResponse();
    return () => { isSubscribed = false; };
  }, [previousStep, triggerNextStep]);

  return <div>{response || 'Thinking...'}</div>;
}

// Wrap AsyncResponse for step compatibility
const AsyncResponseWrapper = (props) => <AsyncResponse {...props} />;

// Chatbot theme
const theme = {
  background: '#1d1836',
  headerBgColor: '#915eff',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#915eff',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

// Chatbot config
const config = {
  botAvatar: "/assets/avatar.png",
  floating: true,
  headerTitle: "Shiva Karthik AI Agent",
  recognitionEnable: true,
  speechSynthesis: { enable: false }, // disable global auto-speak
};

// Chatbot conversation flow
const steps = [
  {
    id: '1',
    message: 'Hey! How can I help you?',
    trigger: 'userInput',
  },
  {
    id: 'userInput',
    user: true,
    trigger: 'responseHandler',
    metadata: {
      isMicInput: false // Set to true manually if you handle mic detection
    }
  },
  {
    id: 'responseHandler',
    component: <AsyncResponseWrapper />,
    waitAction: true,
    asMessage: true,
    trigger: 'askMore',
  },
  {
    id: 'askMore',
    message: 'Is there anything else you would like to know?',
    trigger: 'userInput',
  }
];

function Chatbot() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        {...config}
        steps={steps}
        enableMobileAutoFocus={true}
        placeholder="Ask me about Shiva's projects, skills, or background..."
      />
    </ThemeProvider>
  );
}

export default Chatbot;
