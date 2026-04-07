import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, Send, X, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const GeminiChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "ai"; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          {
            role: "user",
            parts: [{ text: `You are an AI assistant for Shaun K. Thivierge's personal portfolio. 
            Shaun is a Cyber & Physical Security Leader with over a decade of experience.
            Key details:
            - Current Role: Vulnerability Detection Manager at Oportun.
            - Certifications: CPP, PSP, PCI, CompTIA Security+, FAA Part 107.
            - Expertise: Vulnerability Management, Threat Assessment, Risk Mitigation, Security Automation, Regulatory Compliance (PCI DSS, SOX, NERC-CIP).
            - Education: BS in Political Science & Global Studies from ASU, Cybersecurity Bootcamp from UC Berkeley, Customer Experience Certificate from UC Irvine.
            - Background: Progressed from front-line security to senior leadership. Managed global security programs and emergency operations (PG&E wildfires).
            - Email: sthivierge@gmail.com
            - LinkedIn: linkedin.com/in/sthivierge
            
            Answer questions about Shaun's professional background, skills, and certifications. 
            Keep answers concise, professional, and helpful. If asked about his resume, mention it's available for download on the site.` }]
          }
        ],
      });

      const aiText = response.text || "I'm sorry, I couldn't process that.";
      setMessages((prev) => [...prev, { role: "ai", text: aiText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages((prev) => [...prev, { role: "ai", text: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 p-4 bg-white text-black rounded-full shadow-2xl hover:bg-zinc-200 transition-colors"
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed bottom-24 right-8 z-50 w-80 md:w-96 h-[500px] bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            <div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-black">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium tracking-tight">Ask Gemini about me</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.length === 0 && (
                <p className="text-zinc-500 text-sm text-center mt-20">
                  Ask me anything about S. Thivierge's experience or skills!
                </p>
              )}
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === "user" ? "bg-white text-black" : "bg-zinc-900 text-zinc-300"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-zinc-900 p-3 rounded-2xl">
                    <Loader2 className="w-4 h-4 animate-spin text-zinc-500" />
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-zinc-800 bg-black">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type a question..."
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-full py-2 pl-4 pr-12 text-sm focus:outline-none focus:border-zinc-600 transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-zinc-500 hover:text-white transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
