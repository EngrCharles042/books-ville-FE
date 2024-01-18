import { PricingCard } from "./PricingCard";
import {Link} from "react-router-dom";

export const Subscriptions = () => {
  return (
      <>
          <div className="my-10 ml-[9rem]">
              <span className="items-center flex w-[59px] max-w-full gap-1">
                  <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d7dd83f57cf0f0d55ac4589528b86a4f6e45a046fbd6c7d18b6110dd0c11edb?"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />
                  <Link to={"/user-dashboard"} className="text-black text-center text-sm leading-7 self-stretch grow whitespace-nowrap">
                      Back
                  </Link>
              </span>
              <div className="text-black text-4xl font-bold leading-[56px] tracking-wide self-stretch max-md:max-w-full">
                  My subscriptions
              </div>
          </div>
          <div className="flex justify-center gap-9">
            {/*First PricingCard */}
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
      </>
  );
};
