import React, { useState } from "react";

const Contact = ({ darkMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.status === 200) {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <div
      id="contact"
      className={`w-full py-16 px-6 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-full px-4 sm:px-6 md:px-8 max-w-[1240px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <p className="text-pink-500 font-semibold mb-2">Get in Touch</p>
          <h2 className="text-4xl font-bold mt-2">
            Let’s <span className="text-yellow-500">Connect</span>
          </h2>
          <p className="text-gray-500 mt-2">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Info */}
          <div data-aos="fade-right">
            <h3 className="text-2xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-4">
              Email:{" "}
              <span className="text-yellow-500">
                itsyashasvibhati24@gmail.com
              </span>
            </p>
            <p className="mb-4">
              Phone: <span className="text-yellow-500">+91 7878883930</span>
            </p>
            <p className="mb-4">Location: Pali, Rajasthan, India</p>
            <p className="text-gray-500">
              I am open to freelance projects, full-time roles, and
              collaborations.
            </p>
          </div>

          {/* Right Form */}
          <form
            onSubmit={handleSubmit}
            data-aos="fade-left"
            className={`rounded-xl shadow-md p-6 space-y-4 ${
              darkMode ? "bg-[#1a1a1a]" : "bg-gray-100"
            }`}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md border outline-none border-gray-300"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-md border outline-none border-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-md border outline-none border-gray-300"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-yellow-500 px-6 py-2 rounded-md hover:bg-yellow-600 font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
