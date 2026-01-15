import React from "react";
import ChatCard from "@/app/components/ChatCard";
import ReEng1 from "../../../../public/assets/chat-solution/re-eng3.jpg";
import ReEng2 from "../../../../public/assets/chat-solution/re-eng2.jpg";
import ReEng3 from "../../../../public/assets/chat-solution/re-eng1.jpg";

const ReEngineering: React.FC = () => {
  return (
    <section className="bg-[#001143] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center text-white ">
          <h2 className="text-3xl md:text-4xl font-extrabold ">
Scale Without Re-Engineering
          </h2>
          <p className="mx-auto my-4 max-w-3xl text-sm md:text-[22px] text-blue-100">
PubNub is built for scale, so you don’t have to re-architect when your user base grows or your requirements evolve.          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ChatCard
            title="Integrate with AI, Analytics & Business Systems"
            description="Use PubNub Functions or third-party APIs to plug in bots, CRMs, analytics platforms, transcription, and translation tools."
            image={ReEng1}
            alt="Automation workflow illustration"
          />

          <ChatCard
            title="Personalised, Context-Aware Chat"
            description="Create dynamic, AI-native chat experiences with workflows that adapt based on user behavior and real-time context."
            image={ReEng2}
            alt="Team collaboration illustration"
          />

          <ChatCard
            title="Infrastructure You Don’t Have to Think About"
            description="No sharding, no message brokers, no server maintenance—just a globally distributed pub/sub network trusted by mission-critical apps."
            image={ReEng3}
            alt="Analytics dashboard illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default ReEngineering;
