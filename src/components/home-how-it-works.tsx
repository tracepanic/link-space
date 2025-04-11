"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { CheckCircle, FileText, Link2, Share2 } from "lucide-react";
import { useRef, useState } from "react";

interface Step {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
  imageAlt: string;
}

export function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(0);
  const stepsRef = useRef<HTMLDivElement>(null);

  const steps: Step[] = [
    {
      id: 1,
      title: "Create Your Space",
      description:
        "Start by creating a personalized space for your content. Give it a name, description, and choose whether it should be public or private.",
      icon: <Link2 className="h-6 w-6" />,
      features: [
        "Unlimited spaces for different topics",
        "Custom slugs for clean URLs",
        "Public or private visibility options",
      ],
      image: "/placeholder.svg?height=400&width=600",
      imageAlt: "Creating a new space in LinkSpace",
    },
    {
      id: 2,
      title: "Add Your Content",
      description:
        "Populate your spaces with different types of content blocks. Add links with rich previews, write notes with markdown support, or embed content from popular platforms.",
      icon: <FileText className="h-6 w-6" />,
      features: [
        "Links with rich previews",
        "Markdown notes with formatting",
        "Embeds from YouTube, Twitter, and more",
      ],
      image: "/placeholder.svg?height=400&width=600",
      imageAlt: "Adding content blocks to a space",
    },
    {
      id: 3,
      title: "Share With Others",
      description:
        "Share your personalized profile with clean URLs. Visitors will see your home space and can explore all your public spaces through your profile navigation.",
      icon: <Share2 className="h-6 w-6" />,
      features: [
        "Clean, personalized URLs",
        "Customizable navigation",
        "Space gallery for visitors",
      ],
      image: "/placeholder.svg?height=400&width=600",
      imageAlt: "Sharing a LinkSpace profile with others",
    },
  ];

  const goToStep = (index: number) => {
    setDirection(index > currentStep ? 1 : -1);
    setCurrentStep(index);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="w-full py-12 md:py-24 bg-gradient-to-b from-white to-purple-50 dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <Badge variant="outline" className="mb-2">
            Simple Process
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How LinkSpace Works
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            Get started in just a few easy steps and organize your digital
            world.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <button
                  onClick={() => goToStep(index)}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    currentStep === index
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                  } ${index < currentStep ? "bg-green-500 text-white" : ""}`}
                >
                  {index < currentStep ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <span className="font-medium">{index + 1}</span>
                  )}
                </button>
                {index < steps.length - 1 && (
                  <div
                    className={`w-12 h-1 mx-1 ${index < currentStep ? "bg-green-500" : "bg-gray-200 dark:bg-gray-800"}`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden" ref={stepsRef}>
          <div className="flex min-h-[450px] items-center justify-center">
            <motion.div
              key={currentStep}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="w-full"
            >
              <div className="grid grid-cols-1 gap-8 items-center">
                <div className="max-w-2xl mx-auto">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-purple-100 dark:border-purple-900/20">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4">
                        {steps[currentStep].icon}
                      </div>
                      <h3 className="text-2xl font-bold">
                        {steps[currentStep].title}
                      </h3>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {steps[currentStep].description}
                    </p>

                    <div className="space-y-3">
                      <h4 className="font-medium text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                        Key Features
                      </h4>
                      {steps[currentStep].features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center mt-8 md:hidden">
          <div className="flex space-x-2">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={`w-2.5 h-2.5 rounded-full ${
                  currentStep === index
                    ? "bg-purple-600"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
                aria-label={`Go to step ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
