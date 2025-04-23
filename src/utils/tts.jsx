export const speak = (text, lang = "ko-KR") => {
    if (!text || typeof window === "undefined") return;
  
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
  
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    window.speechSynthesis.speak(utterance);
  };
  
export const stop = () => {
    if (typeof window !== "undefined" && window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
};
  