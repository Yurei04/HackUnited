"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

export default function JoinUsAndContact() {
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
    <div className="min-h-screen w-full flex sm:flex-col lg:flex-col items-center justify-center gap-10 px-4 py-20">
        <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-purple-500">
                Join Our Community
            </span>
            </h1>
            <p className="text-center text-purple-200 max-w-2xl mx-auto">
            Connect with fellow innovators, learn new skills, and build cool things together. Whether you're a
            beginner or a seasoned hacker, there's a place for you in the Hack United community.
            </p>
        </div>
        <div className="flex lg:flex-row sm:flex-col w-full items-center justify-center gap-10">
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
                className="flex flex-col items-center w-full max-w-md"
                >
                <Card className="rounded-4xl bg-black/60 backdrop-blur-lg border shadow-lg">
                    <CardContent className="w-full rounded-3xl p-4 flex flex-col gap-4">
                    <iframe
                        src="https://discord.com/widget?id=YOUR_SERVER_ID&theme=dark"
                        width="100%"
                        height="300"
                        frameBorder="0"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                        className="rounded-xl w-full"
                    />
                    <div className="flex flex-col gap-2"> 
                        <h2 className="text-transparent text-2xl bg-clip-text bg-gradient-to-r from-gray-400 to-purple-500 mb-2 text-center">
                            Why Join Hack United
                        </h2>
                        <p className="text-transparent bg-clip-text bg-gradient-to-r text-sm from-gray-400 to-purple-500">
                        - 🚀 Access exclusive workshops and events<br />
                        - 🤝 Collaborate on real-world projects<br />
                        - 🧠 Learn from experienced mentors<br />
                        - 🎉 Join fun community activities and hackathons<br />
                        - 🌍 Be part of a growing global tech network
                        </p>
                        <Button
                            type="submit"
                            className="w-full bg-purple-700 hover:bg-purple-600 text-white"
                        >
                            Join Our Discord
                        </Button>
                    </div>
                    </CardContent>
                </Card>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                duration: 0.8,
                type: "spring",
                bounce: 0.2,
                delay: 0.2,
                }}
                viewport={{ once: true, amount: 0.1 }}
                className="w-full max-w-xl"
            >
                <form
                onSubmit={handleSubmit}
                className="bg-black/60 backdrop-blur-lg shadow-purple-700 p-8 rounded-2xl space-y-6"
                >
                <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-500 text-center">
                    Contact Us
                </h2>
                <p className="text-purple-200 text-center">Reach out to us for any inquiries!</p>

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
    </div>
  );
}
