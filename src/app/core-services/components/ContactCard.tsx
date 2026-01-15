// app/page.tsx or pages/index.tsx

import ContactBanner from "@/app/components/ContactBanner";
import SupportImg from "../../../../public/assets/home-img/support.png"

export default function ContactCard() {
  return (
    <>
      <ContactBanner
        title="Contact Us"
        description="Want to see what real-time decision intelligence can do for your app and bottom line? Contact sales or sign up free to start building with PubNub today."
        primaryLabel="Contact Sales"
        primaryHref="/contact-sales"
        secondaryLabel="Get Started"
        secondaryHref="/get-started"
        imageSrc={SupportImg}
        imageAlt="Headset on laptop keyboard"
        imagePosition="right"
      />
    </>
  );
}