import { Send, Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400 inline-block mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Looking for freelance or full-time opportunities. Reach out, and let's work on something great!
            <span className="inline-flex items-center ml-2 text-blue-400 hover:text-blue-300 transition-colors">
              <ArrowRight className="w-5 h-5 ml-1" />
            </span>
          </p>
        </div>

        <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm shadow-xl border border-slate-700/50">
          <form
            className="space-y-6"
            action="https://formsubmit.co/narasimha34327@gmail.com"
            method="POST"
          >
            <div className="space-y-2">
              <label htmlFor="name" className="block text-slate-300 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-slate-300 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-slate-300 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here..."
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-4 px-8 rounded-lg hover:from-blue-600 hover:to-teal-600 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center group"
            >
              <span>Send Message</span>
              <Send className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        <div className="mt-12 text-center">
          <a
            href="mailto:narasimha34327@gmail.com"
            className="inline-flex items-center text-slate-300 hover:text-blue-400 transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            <span>narasimha34327@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
