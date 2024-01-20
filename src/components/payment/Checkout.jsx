export const Checkout = () => {
  return (
    <>
      <div className="bg-white flex flex-col items-stretch pb-3">
        <div className="justify-between items-stretch shadow-sm bg-white flex w-full gap-5 px-16 py-4 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
            <span className="items-stretch flex justify-between gap-1.5">
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-square object-contain object-center w-[41px] overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-green-500 text-xl font-semibold leading-7 self-center grow whitespace-nowrap my-auto">
                Books<span className="text-green-500">Ville</span>
              </div>
            </span>
            <span className="items-stretch border border-[color:var(--Gray-3,#828282)] shadow-sm bg-white flex gap-3 px-3 py-2.5 rounded-lg border-solid self-start max-md:pr-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ceeea2f2948954022816e71018ab049d885ff6e6cc69b46669a5737133c1100a?"
                className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden self-center shrink-0 max-w-full my-auto"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba16c4d1578404ee548de207b0969ae061f61ec7befb35368cd4929342205051?"
                className="aspect-[0.05] object-contain object-center w-px stroke-[1px] stroke-zinc-500 overflow-hidden shrink-0 max-w-full"
              />
              <div className="text-zinc-500 text-center text-sm tracking-normal self-center grow whitespace-nowrap my-auto">
                Search by Author , Title , Series
              </div>
            </span>
          </div>
          <div className="items-center self-center flex justify-between gap-5 my-auto px-0.5 max-md:max-w-full max-md:flex-wrap">
            <span className="items-stretch flex justify-between gap-5 my-auto">
              <div className="text-black text-xl font-medium leading-7 grow whitespace-nowrap">
                Home
              </div>
              <div className="text-black text-xl font-medium leading-7">
                Categories
              </div>
              <div className="text-green-500 text-xl font-medium leading-7">
                Cart
              </div>
              <div className="text-black text-xl font-medium leading-7 grow whitespace-nowrap">
                Services
              </div>
            </span>
            <div className="items-center self-stretch flex justify-between gap-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7310c8722dc5cdf70636b3635cffd469b3852098076188b3c9b0a6a147dd6a0?"
                className="aspect-square object-contain object-center w-[25px] overflow-hidden shrink-0 max-w-full my-auto"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-square object-contain object-center w-9 overflow-hidden self-stretch shrink-0 max-w-full rounded-[50%]"
              />
            </div>
          </div>
        </div>
        <span className="flex w-full flex-col mt-5 px-16 max-md:max-w-full max-md:px-5">
          <span className="items-stretch flex gap-2 self-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8ab344b5648a3c5f083d2c3c5742c3e42e45fbb8e112879cda83205c8b5f6d1?"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
            <div className="text-gray-900 text-base font-semibold leading-6 tracking-normal grow whitespace-nowrap self-start">
              Go back
            </div>
          </span>
          <div className="self-stretch mt-8 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[65%] max-md:w-full max-md:ml-0">
                <span className="flex flex-col items-stretch mt-16 max-md:max-w-full max-md:mt-10">
                  <div className="items-stretch flex justify-between gap-2 max-md:max-w-full max-md:flex-wrap">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-[0.71] object-contain object-center w-20 overflow-hidden shrink-0 max-w-full"
                    />
                    <span className="items-stretch self-center flex justify-between gap-5 my-auto pr-8 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                      <span className="justify-center items-stretch flex grow basis-[0%] flex-col">
                        <div className="text-neutral-800 text-base font-bold leading-6">
                          The Secret Life of Dorothy Soames
                        </div>
                        <div className="text-neutral-500 text-sm leading-5 whitespace-nowrap mt-2">
                          by Justine Cowan
                        </div>
                        <div className="text-red-700 text-xs font-medium leading-10 mt-2">
                          Remove
                        </div>
                      </span>
                      <div className="items-stretch self-center flex gap-1.5 my-auto">
                        <div className="fill-[linear-gradient(0deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.88)_100%),#8C8CA1] flex aspect-[0.9714285714285714] flex-col justify-center items-stretch px-2 py-4">
                          <div className="bg-zinc-400 flex shrink-0 h-px flex-col" />
                        </div>
                        <span className="text-gray-500 text-center text-xl tracking-normal whitespace-nowrap justify-center items-stretch bg-white aspect-[1.2571428571428571] px-5 py-1.5 rounded-md border-[1.42px] border-solid border-zinc-400">
                          1
                        </span>
                        <div className="fill-[linear-gradient(0deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.88)_100%),#8C8CA1] flex items-center justify-between gap-0 pl-2 pr-4 py-2.5">
                          <div className="bg-zinc-400 z-[1] flex shrink-0 h-px flex-col my-auto" />
                          <div className="bg-zinc-400 self-stretch flex w-px shrink-0 h-[18px] flex-col" />
                        </div>
                      </div>
                      <div className="text-black text-center text-base font-medium leading-6 tracking-normal self-center grow whitespace-nowrap my-auto">
                        N5000
                      </div>
                    </span>
                  </div>
                  <div className="items-stretch flex justify-between gap-2 mt-3 max-md:max-w-full max-md:flex-wrap">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-[0.78] object-contain object-center w-20 overflow-hidden shrink-0 max-w-full"
                    />
                    <span className="items-stretch self-center flex justify-between gap-5 my-auto max-md:max-w-full max-md:flex-wrap">
                      <span className="items-stretch flex grow basis-[0%] flex-col">
                        <div className="text-neutral-800 text-base font-bold leading-6">
                          I’ll Be There
                        </div>
                        <div className="text-neutral-500 text-sm leading-5 mt-2">
                          by Holly Goldberg Storm
                        </div>
                        <div className="text-red-700 text-xs font-medium leading-10 mt-2">
                          Remove
                        </div>
                      </span>
                      <div className="items-stretch self-center flex gap-1.5 my-auto pr-3">
                        <div className="fill-[linear-gradient(0deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.88)_100%),#8C8CA1] flex aspect-square flex-col justify-center items-stretch px-2 py-4">
                          <div className="bg-zinc-400 flex shrink-0 h-px flex-col" />
                        </div>
                        <span className="text-gray-500 text-center text-lg tracking-normal whitespace-nowrap justify-center items-stretch bg-white aspect-[1.3225806451612903] px-4 py-1.5 rounded-md border-[1.299px] border-solid border-zinc-400">
                          1
                        </span>
                        <div className="fill-[linear-gradient(0deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.88)_100%),#8C8CA1] flex grow basis-[0%] flex-col items-stretch pt-2 pb-4 px-2">
                          <div className="bg-zinc-400 flex shrink-0 h-[17px] flex-col" />
                          <div className="bg-zinc-400 flex shrink-0 h-px flex-col" />
                        </div>
                      </div>
                      <div className="text-black text-center text-base font-medium leading-6 tracking-normal self-center grow whitespace-nowrap my-auto">
                        N5000
                      </div>
                    </span>
                  </div>
                  <div className="bg-zinc-100 flex shrink-0 h-px flex-col mt-2 max-md:max-w-full" />
                  <div className="text-green-500 text-sm leading-5 tracking-tighter mt-3.5 max-md:max-w-full">
                    CONTINUE SHOPPING
                  </div>
                </span>
              </div>
              <div className="flex flex-col items-stretch w-[35%] ml-5 max-md:w-full max-md:ml-0">
                <span className="items-stretch border border-[color:var(--Green-2,#27AE60)] bg-white flex w-full grow flex-col mx-auto pt-7 pb-12 px-8 border-solid max-md:mt-10 max-md:px-5">
                  <div className="text-black text-3xl font-bold leading-10 tracking-wide">
                    Order Summary
                  </div>
                  <div className="bg-gray-200 shrink-0 h-[3px] mt-6" />
                  <span className="items-stretch flex justify-between gap-5 mt-6">
                    <div className="text-black text-base font-medium leading-6 tracking-normal">
                      Sub Total
                    </div>
                    <div className="text-black text-base font-medium leading-6 tracking-normal">
                      5000
                    </div>
                  </span>
                  <span className="items-stretch flex justify-between gap-5 mt-2">
                    <div className="text-black text-base font-medium leading-6 tracking-normal">
                      Delivery
                    </div>
                    <div className="text-black text-base font-medium leading-6 tracking-normal">
                      1500
                    </div>
                  </span>
                  <div className="bg-gray-200 shrink-0 h-[3px] mt-6" />
                  <span className="items-stretch flex justify-between gap-5 mt-6">
                    <div className="text-black text-base font-medium leading-6 tracking-normal">
                      Promo Code
                    </div>
                    <div className="text-black text-base font-medium leading-6 tracking-normal">
                      10%OFF
                    </div>
                  </span>
                  <div className="bg-gray-200 shrink-0 h-[3px] mt-6" />
                  <span className="items-stretch flex justify-between gap-5 mt-6">
                    <div className="text-green-500 text-base font-medium leading-6 tracking-normal">
                      Total
                    </div>
                    <div className="text-black text-base font-medium leading-6 tracking-normal">
                      7500
                    </div>
                  </span>
                  <span className="text-white text-sm font-semibold leading-5 whitespace-nowrap justify-center items-center bg-green-500 mt-12 mb-11 px-16 py-3 rounded-xl max-md:my-10 max-md:px-5">
                    CHECKOUT
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="text-black text-center text-2xl font-semibold leading-8 self-center mt-5">
            YOU MIGHT ALSO LIKE
          </div>
          <div className="self-center w-[1120px] max-w-full mt-8 px-2 py-2.5 max-md:pr-5">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-[29%] max-md:w-full max-md:ml-0">
                <span className="justify-center items-stretch shadow-sm flex grow flex-col px-8 max-md:mt-9 max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-[0.65] object-contain object-center w-full overflow-hidden"
                  />
                  <div className="text-black text-xl font-semibold leading-6 mt-2.5">
                    The Midnight Library
                  </div>
                  <div className="text-neutral-600 text-xl leading-6 mt-2.5">
                    Matt Haig
                  </div>
                  <div className="text-black text-xl font-medium leading-6 mt-2">
                    N 5000
                  </div>
                  <span className="text-white text-xs font-medium leading-4 uppercase whitespace-nowrap justify-center items-center bg-green-600 mt-2.5 px-16 py-5 rounded border-[0.771px] border-solid border-green-600 max-md:mr-2.5 max-md:px-5">
                    Add to cART
                  </span>
                </span>
              </div>
              <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
                <span className="items-stretch shadow-sm flex grow flex-col max-md:mt-8">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-[0.65] object-contain object-center w-full overflow-hidden"
                  />
                  <div className="text-black text-xl font-semibold leading-6 mt-2.5">
                    Not Here to be Liked
                  </div>
                  <div className="text-zinc-500 text-xl leading-6 mt-2.5">
                    Michelle Quach
                  </div>
                  <div className="text-black text-xl font-medium leading-6 mt-2">
                    N 5000
                  </div>
                  <span className="text-white text-xs font-medium leading-4 tracking-widest uppercase whitespace-nowrap justify-center items-center bg-green-600 mt-3 px-16 py-5 rounded border-[0.771px] border-solid border-green-600 max-md:mr-2 max-md:px-5">
                    Add to cART
                  </span>
                </span>
              </div>
              <div className="flex flex-col items-stretch w-[24%] ml-5 max-md:w-full max-md:ml-0">
                <span className="items-start shadow-sm flex grow flex-col max-md:mt-8">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-[0.66] object-contain object-center w-full overflow-hidden self-stretch"
                  />
                  <div className="text-black text-xl font-semibold leading-6 mt-2.5 max-md:mr-0.5">
                    Click to Subscribe
                  </div>
                  <div className="text-zinc-500 text-xl font-medium leading-6 mt-2.5 max-md:mr-0.5">
                    G.L.Tomas
                  </div>
                  <div className="text-black text-xl font-medium leading-6 mt-2 max-md:mr-0.5">
                    N 5000
                  </div>
                  <span className="text-white text-xs font-medium leading-4 uppercase whitespace-nowrap justify-center items-center bg-green-600 mt-3 px-16 py-5 rounded border-[0.771px] border-solid border-green-600 self-start max-md:px-5">
                    Add to cART
                  </span>
                </span>
              </div>
              <div className="flex flex-col items-stretch w-[23%] ml-5 max-md:w-full max-md:ml-0">
                <span className="items-stretch shadow-sm flex grow flex-col max-md:mt-8">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-[0.64] object-contain object-center w-full overflow-hidden"
                  />
                  <div className="text-black text-xl font-semibold leading-6 mt-2.5">
                    The rules do not apply
                  </div>
                  <div className="text-zinc-500 text-xl font-medium leading-6 mt-2.5">
                    Ariel Levy
                  </div>
                  <div className="text-black text-xl font-medium leading-6 mt-2">
                    N 5000
                  </div>
                  <span className="text-white text-xs font-medium leading-4 uppercase whitespace-nowrap justify-center items-center bg-green-600 mt-3 px-16 py-5 rounded border-[0.771px] border-solid border-green-600 max-md:mr-1.5 max-md:px-5">
                    Add to cART
                  </span>
                </span>
              </div>
            </div>
          </div>
        </span>
      </div>
    </>
  );
};
