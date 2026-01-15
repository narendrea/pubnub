import ChatCard from "@/app/components/ChatCard";
import React from "react";
import Chat1 from "../../../../public/assets/chat-solution/chat1.jpg"
import Chat2 from "../../../../public/assets/chat-solution/chat2.jpg"
import Chat3 from "../../../../public/assets/chat-solution/chat3.jpg"

const ChatInfrastructureSection: React.FC = () => {
  return (
    <section className="bg-[#001143] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        {/* Heading */}
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Launch Faster with Production-Ready Chat <br /> Infrastructure
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm md:text-[22px] text-blue-100">
            Skip the boilerplate and build fast, reliable chat with a backend that
            lets you focus on core functionality.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <ChatCard
            title="Simple APIs, SDKs & Quickstarts"
            description="Build your MVP fast with simple SDKs for JavaScript, Kotlin, Swift, Unity, and more. Our Quickstarts help you validate ideas and iterate in minutes."
            image={Chat1}
            alt="SDK language icons"
          />

          <ChatCard
            title="Live Chat Building Blocks"
            description="Leverage production-ready features: typing indicators, presence, message history, read receipts, reactions, and threads—available out of the box in our SDKs."
            image={Chat2}
            alt="Live chat building blocks UI"
          />

          <ChatCard
            title="Push Notifications"
            description="A straightforward push system with support for FCM, APNs, and fallback delivery—built to handle the majority of use cases without added complexity."
            image={Chat3}
            alt="Push notification preview"
          />
        </div>
      </div>
    </section>
  );
};

export default ChatInfrastructureSection;
