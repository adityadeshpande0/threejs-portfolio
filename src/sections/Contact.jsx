import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://portfolio-server-brown-omega.vercel.app/portfolio/auth/save-contact-details",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (response.ok) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        console.error("Failed to save contact details");
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="contact-section c-space lg:my-20 md:my-10 sm:my-0"
      id="contact"
    >
      <div className="relative min-h-screen flex items-center justify-center align-items-center">
        <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="absolute min-h-screen object-cover"
        />
        <div className="relative rounded-lg shadow-lg max-w-lg mx-4 text-white flex flex-col space-y-4 mt-20">
          <h3 className="text-2xl font-bold text-left">Let&apos;s talk</h3>
          <p className="text-lg mt-2 text-justify">
            You can also reach out to me by filling this form!
          </p>
          <form onSubmit={handleSubmit} ref={formRef} className="flex flex-col space-y-5">
            <label className="flex flex-col space-y-2">
              <span className="text-sm font-medium text-left">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="ex., John Doe"
              />
            </label>
            <label className="flex flex-col space-y-2">
              <span className="text-sm font-medium text-left">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="ex., johndoe@gmail.com"
              />
            </label>
            <label className="flex flex-col space-y-2">
              <span className="text-sm font-medium text-left">Your message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-emerald-400"
                placeholder="Share your thoughts or inquiries..."
              />
            </label>
            <button
              type="submit"
              disabled={loading}
              className="bg-emerald-500 hover:bg-emerald-600 transition-all duration-200 p-3 rounded-md text-white font-medium mt-5 flex items-center justify-center"
            >
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="ml-2 w-4"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
