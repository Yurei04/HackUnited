"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please accept the consent to proceed.");
      return;
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          bounce: 0.2,
          delay: 0.1,
        }}
        viewport={{ once: true, amount: 0.1 }}
        className="w-full"
      >
      <form
        onSubmit={handleSubmit}
        className="bg-black/60 backdrop-blur-lg border border-purple-800 shadow-lg p-8 rounded-2xl w-full max-w-xl space-y-6"
      >
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500 text-center">
          Contact Us
        </h1>
        <p className="text-purple-200 text-center">
          Reach out to us for any inquiries!
        </p>

        <div>
          <Label htmlFor="name" className="text-purple-300">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 bg-black/30 text-white border-purple-600 focus:ring-purple-400"
            required
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-purple-300">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 bg-black/30 text-white border-purple-600 focus:ring-purple-400"
            required
          />
        </div>

        <div>
          <Label htmlFor="subject" className="text-purple-300">
            Subject
          </Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="mt-1 bg-black/30 text-white border-purple-600 focus:ring-purple-400"
            required
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-purple-300">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="mt-1 bg-black/30 text-white border-purple-600 focus:ring-purple-400"
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="consent"
            name="consent"
            checked={formData.consent}
            onCheckedChange={(checked) =>
              setFormData((prev) => ({ ...prev, consent: checked }))
            }
          />
          <Label htmlFor="consent" className="text-sm text-purple-200">
            I accept the above information will be used to contact me.
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full bg-purple-700 hover:bg-purple-600 text-white"
        >
          Contact
        </Button>
      </form>
      </motion.div>
    </div>
  );
}
