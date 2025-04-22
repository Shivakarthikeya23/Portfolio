import { projects, experiences, technologies } from "@/constants/index";

export default async function handler(req, res) {
  const { messages } = req.body;

  // Format projects
  const projectText = projects
    .map((proj, i) => `${i + 1}. ${proj.name} – ${proj.description}`)
    .join("\n");

  const languageNames = technologies.languages.map(lang => lang.name).join(", ");
  const frameworkNames = technologies.frameworks.map(fw => fw.name).join(", ");
  const toolNames = technologies.tools.map(t => t.name).join(", ");

  const expText = experiences
    .map(exp => `${exp.title} at ${exp.company_name}`)
    .join("\n");

  const context = `
You are Shiva Karthik Rallabandi’s AI assistant. Use only the data below to answer questions.

Languages: ${languageNames}
Frameworks: ${frameworkNames}
Tools: ${toolNames}

Experience:
${expText}

Projects:
${projectText}

GitHub: https://github.com/Shivakarthikeya23

Only answer from the above info. If something is not listed, reply: "This information is not available in Shiva’s portfolio or resume."
  `;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistral/mistral-7b-instruct",
        messages: [
          { role: "system", content: context },
          ...messages,
        ],
      }),
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content?.trim() || "Sorry, I didn’t understand that.";
    res.status(200).json({ text: reply });
  } catch (err) {
    console.error("OpenRouter API error:", err);
    res.status(500).json({ text: "ShivaBot ran into an error." });
  }
}
