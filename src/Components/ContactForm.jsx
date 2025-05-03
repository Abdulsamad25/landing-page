import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const [quantities, setQuantities] = useState({
    Gray: 0,
    "Mint Green": 0,
    Pink: 0,
    Blue: 0,
  });

  const packagePrices = {
    Gray: 14000,
    "Mint Green": 14000,
    Pink: 14000,
    Blue: 14000,
  };

  const totalQuantity = Object.values(quantities).reduce((sum, q) => sum + q, 0);
  const totalPrice = Object.entries(quantities).reduce(
    (sum, [color, qty]) => sum + qty * packagePrices[color],
    0
  );

  const handleQuantityChange = (e, color) => {
    const value = parseInt(e.target.value) || 0;
    setQuantities((prev) => ({
      ...prev,
      [color]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (totalQuantity === 0) {
      alert("Please select at least one item.");
      return;
    }

    setLoading(true);

    emailjs
      .sendForm(
        "service_b7merrq",
        "template_hink60b",
        formRef.current,
        "Y37aB8gTj87-byqiB"
      )
      .then(
        (result) => {
          console.log("Email sent", result.text);
          setLoading(false);
          setSent(true);
          setTimeout(() => {
            setSent(false);
            formRef.current.reset();
            setQuantities({ Gray: 0, "Mint Green": 0, Pink: 0, Blue: 0 });
          }, 3000);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("There was an error submitting your order. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div id="order" className="bg-gray-100 px-4 md:px-12 lg:px-20 py-16">
      <h2 className="mb-1 font-bold text-3xl text-center">Place your Order</h2>
      <h4 className="mb-8 text-gray-600 text-sm text-center">
        Select quantities for each color in the section below
      </h4>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="space-y-6 bg-white shadow-md mx-auto p-8 rounded-lg max-w-lg"
      >
        <div>
          <label className="block mb-2 font-medium text-gray-700">Full Name</label>
          <input
            type="text"
            name="name"
            className="p-3 border border-gray-300 rounded w-full"
            placeholder="Your full name"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className="p-3 border border-gray-300 rounded w-full"
            placeholder="Your phone number"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">WhatsApp Number</label>
          <input
            type="tel"
            name="whatsapp"
            className="p-3 border border-gray-300 rounded w-full"
            placeholder="Your WhatsApp number"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">Email Address</label>
          <input
            type="email"
            name="email"
            className="p-3 border border-gray-300 rounded w-full"
            placeholder="Your email address"
            required
          />
        </div>

        <div>
          <label className="block mb-2 font-medium text-gray-700">Your Address</label>
          <input
            type="text"
            name="address"
            className="p-3 border border-gray-300 rounded w-full"
            placeholder="Your address"
            required
          />
        </div>

        {/* Unified Quantity Selection for All Colors */}
        <div>
          <label className="block mb-2 font-medium text-gray-700">
            Select Quantities for Each Package
          </label>
          <div className="gap-4 grid">
            {Object.entries(packagePrices).map(([color, price]) => (
              <div
                key={color}
                className="flex justify-between items-center gap-2 p-3 border rounded"
              >
                <label className="w-1/2 font-medium text-gray-800">
                  {color} – ₦{price.toLocaleString()}
                </label>
                <input
                  type="number"
                  name={`qty_${color}`}
                  min="0"
                  value={quantities[color]}
                  onChange={(e) => handleQuantityChange(e, color)}
                  className="p-2 border border-gray-300 rounded w-1/2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hidden Inputs for Total Data */}
        <input type="hidden" name="total_quantity" value={totalQuantity} />
        <input type="hidden" name="total_price" value={totalPrice} />

        <div className="mt-4">
          <p className="text-gray-700">
            <strong>Total Quantity:</strong> {totalQuantity}
          </p>
          <p className="text-gray-700">
            <strong>Total Price:</strong> ₦{totalPrice.toLocaleString()}
          </p>
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
            Order submitted successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
