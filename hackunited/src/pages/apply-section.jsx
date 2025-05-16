"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { motion } from "framer-motion";

export default function ApplySection () {
    return (
        <div className="flex flex-col w-full min-h-screen mt-15">
            <div className="flex flex-col items-center justify-center gap-5"> 
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >       
                    <h1 className="text-4xl sm:text-5xl lg:text-8xlr flex flex-row gap-5 items-center justify-center mt-10">
                        <span className="text-transparent bg-clip-text text-5xl bg-gradient-to-r from-gray-400 to-purple-500">
                            Join The Team
                        </span>

                    </h1>
                    <p className="text-transparent bg-clip-text text-sm text-center bg-gradient-to-r from-purple-300 to-purple-200">
                        We are always looking for new additions to help run Hack United! <br/>
                        Please read below for requirements, benefits, and application info. Any other questions? Dont hesitate to  
                        <Link href="/" className="text-blue-700 underline"> contact us!</Link>
                    </p>
                </motion.div> 

                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.9,
                    type: "spring",
                    bounce: 0.2,
                    delay: 0.1,
                }}
                viewport={{ once: true, amount: 0.6 }}
                >   
                <Card className="border hover:border-purple-500 isolate aspect-video rounded-xl bg-black/50 shadow-lg ring-1 ring-black/5 overflow-hidden">
                    <CardHeader className="w-full flex flex-col items-center justify-center text-center">
                        <Avatar>
                            <AvatarImage src="/images/HackUnited2.png" alt="@UH" />
                            <AvatarFallback>UH</AvatarFallback>
                        </Avatar>
                            <h2 className="text-transparent bg-clip-text text-xl bg-gradient-to-r from-gray-400 to-purple-500 underline">
                                OPEN POSITIONS
                            </h2>
                            <p className="text-transparent bg-clip-text text-lg bg-gradient-to-r from-gray-400 to-purple-500 underline">
                                For requirements and more information, please read this document
                            </p>
                    </CardHeader>
                    <CardContent className="w-full">
                        <iframe
                        src="https://mozilla.github.io/pdf.js/web/viewer.html?file=/files/example.pdf"
                        width="100%"
                        height="100%"
                        ></iframe>
                    </CardContent>
                </Card>
                </motion.div> 

                <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.9,
                    type: "spring",
                    bounce: 0.2,
                    delay: 0.1,
                }}
                viewport={{ once: true, amount: 0.4 }}
                >   
                <div className="lg:max-w-4xl sm:max-w-xl mx-auto p-6 space-y-12">
                    <Card className="border hover:border-purple-500 isolate aspect-video rounded-xl bg-black/50 shadow-lg ring-1 ring-black/5">
                        <CardHeader>
                            <CardTitle className="text-4xl font-semibold ">BENEFITS</CardTitle>
                            <CardDescription>
                                While our positions are currently unpaid, we make an effort to express our gratitude to volunteers at Hack United by providing benefits.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <ul className="list-disc list-inside space-y-2 text-sm">
                            <li>Service Hours*</li>
                            <li>Custom Email &amp; Google Workspace Access (<code>yourname@hackunited.org</code>)</li>
                            <li>Recognition (Resume, Recommendation Letters, LinkedIn Company, Etc)</li>
                            <li>Gain access to an experienced team offering valuable advice/mentorship.</li>
                            <li>Free Swag**</li>
                            </ul>

                            <p className="text-sm italic text-muted-foreground">
                                *Please note that the hours approved by Hack United may not be valid for certain awards. We recommend that you check with our team to confirm their eligibility.
                            </p>
                            <p className="text-sm italic text-muted-foreground">
                                **Although we share the swag and merchandise we produce or receive from sponsors with our team, we cannot guarantee any swag for new members upon joining.
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="border hover:border-purple-500 isolate aspect-video rounded-xl bg-black/50 shadow-lg ring-1 ring-black/5">
                        <CardHeader>
                            <CardTitle className="text-4xl font-semibold ">APPLY NOW</CardTitle>
                            <CardDescription>
                            If you're interested in applying for any of our positions, please fill out the email format below. We review applications regularly, so be sure to apply as soon as you can!
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4 text-sm">
                            <p>
                                We encourage you to be detailed in your responses, as it will help us assess your suitability for the role. Your answers will be treated with the utmost confidentiality and will solely be used for evaluating your application.
                            </p>
                            <p>
                                To apply, please email <a href="mailto:jobs@hackunited.org" className="text-blue-600 underline">jobs@hackunited.org</a> with the following information:
                            </p>
                            <ul className="list-disc list-inside space-y-1">
                            <li>Full Name:</li>
                            <li>Email Address:</li>
                            <li>Age:</li>
                            <li>Country &amp; State of Residence:</li>
                            <li>Resume (optional):</li>
                            <li>LinkedIn Profile (optional):</li>
                            <li>What position(s) are you applying for?</li>
                            <li>Why are you interested in this volunteer position?</li>
                            <li>What relevant skills or experiences do you possess that make you a suitable candidate?</li>
                            <li>Have you volunteered for similar causes or organizations in the past? If so, please provide details.</li>
                            <li>How much time are you able to commit to this volunteer role on a weekly or monthly basis?</li>
                            <li>Are there any specific areas or projects within our organization that interest you?</li>
                            </ul>
                            <p className="text-sm italic text-muted-foreground">
                            * We encourage you to be detailed in your responses, as it will help us assess your suitability for the role. Your answers will be treated with the utmost confidentiality and will solely be used for evaluating your application.
                            </p>
                        </CardContent>
                    </Card>
                </div>
                </motion.div> 
                <Link href="/" passHref>
                    <Button as="a" variant="destructive" className="m-5 p-4 lg:w-2xl sm:2-base cursor-pointer">
                        Back To Home
                    </Button>
                </Link>
            </div>
        </div>
    )
}