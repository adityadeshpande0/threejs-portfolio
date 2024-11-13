import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();

  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);

//     emailjs
//       .send(
//         import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
//         import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
//         {
//           from_name: form.name,
//           to_name: "JavaScript Mastery",
//           from_email: form.email,
//           to_email: "sujata@jsmastery.pro",
//           message: form.message,
//         },
//         import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setLoading(false);
//           showAlert({
//             show: true,
//             text: "Thank you for your message 😃",
//             type: "success",
//           });
//           setTimeout(() => {
//             hideAlert();
//             setForm({
//               name: "",
//               email: "",
//               message: "",
//             });
//           }, 3000);
//         },
//         (error) => {
//           setLoading(false);
//           console.error(error);
//           showAlert({
//             show: true,
//             text: "I didn't receive your message 😢",
//             type: "danger",
//           });
//         }
//       );
//   };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      <div className="relative min-h-screen flex items-center justify-center align-items-center">
        <img
          src="/assets/terminal.png"
          alt="terminal-bg"
          className="absolute inset-0 min-h-screen object-cover"
        />

        <div className="relative rounded-lg shadow-lg max-w-lg mx-4 text-white flex flex-col space-y-4 mt-20">
          <h3 className="text-2xl font-bold">Let's talk</h3>
          <p className="text-lg mt-2  text-justify">
            Whether you’re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I’m here to help.
          </p>

          <form
            ref={formRef}
            // onSubmit={handleSubmit}
            className="flex flex-col space-y-5"
          >
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
              <span className="text-sm font-medium text-left">
                Email address
              </span>
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
              <span className="text-sm font-medium text-left">
                Your message
              </span>
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
