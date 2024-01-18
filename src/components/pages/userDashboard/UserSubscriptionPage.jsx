import { PricingCard } from "./PricingCard";

export const UserSubscriptionPage = () => {
  return (
  <div>
      <span className="items-center flex w-[59px] max-w-full gap-1">
          <img
            loading="lazy"
            src="src/assets/images/userCatImages/arrow_back.png"
            className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1 my-auto"
          />
          <div className="text-black text-center text-sm leading-7 self-stretch grow whitespace-nowrap">
            Back
          </div>
      </span>
      <div className="text-black text-4xl font-bold leading-[56px] tracking-wide self-stretch mt-7 max-md:max-w-full">
          My subscriptions
       </div>
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
  </div>
  );
};
