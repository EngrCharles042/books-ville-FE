import React from "react";
import { PricingCard } from "./PricingCard";

export const UserSubscriptionPage = () => {
  return (
  
    <div className="flex justify-center gap-9">
        {/* First PricingCard */}
        <PricingCard
          title="Professional"
          price="30,000"
          description="Lorem ipsum dolor sit amet consectetur. Iaculis quam rhoncus scelerisque ."
          headerColor="bg-gray-300"
          redirectUrl="http://example.com"
          imageSrc="src/assets/images/userCatImages/check_box (1).png"
          headerText="Basic"
        />

        {/* Second PricingCard with green color */}
        <PricingCard
          title="Organisation"
          price="50,000"
          description="Lorem ipsum dolor sit amet consectetur. Iaculis quam rhoncus scelerisque ."
          headerColor="bg-green-500"
          redirectUrl="http://example.com"
          imageSrc="src/assets/images/userCatImages/check_box.png"
          headerText="Most Popular"
        />

        {/* Third PricingCard with dark gray color */}
        <PricingCard
          title="Organisational"
          price="80,000"
          description="Lorem ipsum dolor sit amet consectetur. Iaculis quam rhoncus scelerisque ."
          headerColor="bg-gray-500"
          redirectUrl="http://example.com"
          imageSrc="src/assets/images/userCatImages/check_box (2).png"
          headerText="Best Deal"
        />

    </div>
  );
};
