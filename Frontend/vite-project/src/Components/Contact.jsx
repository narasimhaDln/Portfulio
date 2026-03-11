import { Send, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const API_URL = import.meta.env.MODE === "development" ? "http://localhost:5001" : import.meta.env.VITE_API_URL || "";
axios.defaults.withCredentials = true;

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch(`${API_URL}/email/send/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        toast.success("Message Sent Successfully");
        e.target.reset();
      } else {
        toast.error("Message Failed");
      }
    } catch (error) {
      console.log("Submit error", error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-12 md:py-16 border-t border-zinc-800 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side Content */}
          <div className="flex flex-col space-y-8 lg:pr-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 tracking-tight mb-4">
                Let's <span className="text-blue-400">Collaborate</span>
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-80 mb-6"></div>
              <p className="text-zinc-400 leading-relaxed text-lg pb-2">
                I'm currently open for new opportunities. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <a href="mailto:narasimha34327@gmail.com" className="flex items-center gap-4 text-zinc-400 hover:text-blue-400 transition-colors group">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center group-hover:bg-blue-500/10 group-hover:border-blue-500/30 transition-all">
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform text-zinc-300 group-hover:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500">Drop an Email</p>
                  <p className="font-semibold text-zinc-200">narasimha34327@gmail.com</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 text-zinc-400 group">
                <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-zinc-300" />
                </div>
                <div>
                  <p className="text-sm font-medium text-zinc-500">Location</p>
                  <p className="font-semibold text-zinc-200">Available globally / Relocation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="w-full max-w-lg mx-auto lg:ml-auto lg:mr-0">
            <div className="bg-[#18181b] border border-white/5 shadow-2xl rounded-2xl p-6 sm:p-8">
              <form
                className="flex flex-col gap-5"
                action="https://formsubmit.co/narasimha34327@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-400">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#09090b] border border-white/5 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-400">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#09090b] border border-white/5 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-medium"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-400">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#09090b] border border-white/5 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none font-medium"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-3.5 px-8 rounded-xl flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1 overflow-hidden relative"
                  >
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                    <span className="relative z-10 flex items-center justify-center w-full">
                      {isLoading ? "Sending..." : "Send Message"}
                      <Send className={`w-4 h-4 ml-2 transition-transform duration-300 ${isLoading ? 'animate-bounce' : 'group-hover:-translate-y-1 group-hover:translate-x-1'}`} />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
