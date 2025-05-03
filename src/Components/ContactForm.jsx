import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_olz9723",
        "template_t6yjvtu",
        formRef.current,
        "XG-tw72Kf5qtU2Z3g"
      )
      .then(
        (result) => {
          console.log("Email sent", result.text);
          setLoading(false);
          setSent(true);
          setTimeout(() => {
            setSent(false);
          }, 3000);
        },
        (error) => {
          console.log("Error sending email", error.text);
          setLoading(false);
        }
      );
  };
  return (
    <div id="order" className="bg-gray-100 px-4 md:px-12 lg:px-20 py-16">
      <h2 className="mb-1 font-bold text-3xl text-center">Place your Order</h2>
      <h4 className="mb-8 text-gray-600 text-sm text-center">
        Please Fill the Form Below To Place Your Order
      </h4>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="space-y-6 bg-white shadow-md mx-auto p-8 rounded-lg max-w-lg"
      >
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            placeholder="Your full name"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            placeholder="Your Phone number"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            WhatsApp Number
          </label>
          <input
            type="tel"
            name="whatsapp"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            placeholder="Your WhatsApp number"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            placeholder="Your email address"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Your Address
          </label>
          <input
            type="text"
            name="address"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            placeholder="Your address"
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Select Your Package
          </label>
          <select
            name=" Silicone Folding Bottle"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          >
            <option value="Gray">Gray Silicone Folding Bottle</option>
            <option value="Mint Green">Mint Green Silicone Folding Bottle</option>
            <option value="Pink">Pink Silicone Folding Bottle</option>
            <option value="Blue">Blue Silicone Folding Bottle</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 py-3 rounded w-full font-semibold text-white transition"
        >
          {loading ? "Sending..." : "Submit Order"}
        </button>
        {sent && (
          <p className="mt-4 text-green-600 text-center">
            Order Submitted successfully
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
