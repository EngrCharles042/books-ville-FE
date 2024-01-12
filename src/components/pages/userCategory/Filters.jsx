import {useEffect, useState} from "react";
export const Filters = () => {
    // const [filledData] = useState(
    //     () => {
    //         const data = new FormData();
    //
    //         data.append('FANTASY', 'FANTASY')
    //         data.append('ROMANCE', 'ROMANCE')
    //
    //         return data;
    //     }
    // )

  const [formData, setFormData] = useState({
    FANTASY: '',
    ROMANCE: ''
  })

  const data = new FormData()

  const handleChange = (e) => {
    if (e.target.checked === true) {
      setFormData({...formData, [e.target.name]: e.target.name})
    } else {
      setFormData({...formData, [e.target.name]: ""})
    }
  }

  const [selectedRating, setSelectedRating] = useState(null);
  const handleRadioChange = (value) => {
      setSelectedRating(value);
  };

    useEffect(() => {
        const handleSubmit = () => {

            data.append('FANTASY', `${formData.FANTASY}`)
            data.append('ROMANCE', `${formData.ROMANCE}`)

            // if (
            //     data.get('FANTASY').length === 0 &&
            //     data.get('ROMANCE').length === 0
            // ) {
            //     getData(filledData)
            // } else {
            //     getData(data);
            // }
        }

        handleSubmit();
    }, [formData]);

  return (
      <form className="justify-center items-stretch bg-white flex max-w-[18rem] flex-col px-8 py-7 rounded-md">
        <div className="overflow-hidden text-zinc-900 text-ellipsis whitespace-nowrap text-3xl font-bold">
          Filters
        </div>
        <span className="items-stretch flex justify-between gap-0 mt-11">
        <div className="overflow-hidden text-zinc-900 text-ellipsis whitespace-nowrap text-2xl font-semibold grow">
          Categories
        </div>
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/55eece25be896457b90f51eb56ab16267501ff84aa63de453cae5b740cfe25b1?"
            className="aspect-square object-contain object-center w-[27px] overflow-hidden shrink-0 max-w-full self-start"
        />
        </span>
        <span className="items-center flex flex-col justify-between gap-4 mt-6">
            {renderCheckbox("FANTASY","Fantasy",formData.FANTASY, handleChange)}
            {renderCheckbox("ROMANCE","Romance",formData.ROMANCE, handleChange)}
        </span>
        <span className="flex justify-between gap-1.5 mt-6 pr-4 items-start">
            <div className="text-emerald-700 text-xl font-semibold">Show more</div>
            <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e1d48398ad4121cb80f7750ede868e3621e9cd273fdff222f0d504ddfe13ca4b?"
            className="aspect-square object-contain object-center w-[27px] overflow-hidden self-stretch shrink-0 max-w-full"
            />
        </span>
        <span className="items-stretch flex justify-between gap-0 mt-11">
            <div className="overflow-hidden text-zinc-900 text-ellipsis whitespace-nowrap text-2xl font-[556] grow">
                Your Budget
            </div>
            <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/08d4c08d8ad55fb934b39eda3ee58376800a7f986680956f14782b7f76c3f1d7?"
            className="aspect-square object-contain object-center w-[27px] overflow-hidden shrink-0 max-w-full self-start"
            />
        </span>
        <span className="items-center flex flex-col justify-between gap-4 mt-6">
            {renderCheckbox("LESS THAN ₦5000","Less than ₦5000")}
            {renderCheckbox("₦15000 - ₦20000","₦15000 - ₦20000")}
            {renderCheckbox("₦20000 - ₦25000","₦15000 - ₦20000")}
            {renderCheckbox("GREATER THAN $500","Greater than $500")}
        </span>
        <span className="flex justify-between gap-1.5 mt-6 pr-4 items-start">
            <div className="text-emerald-700 text-xl font-semibold">Show more</div>
            <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4197910499d52782dc44b0a553bf1721e90ce574f2353ba8f9bda960049fad0f?"
            className="aspect-square object-contain object-center w-[27px] overflow-hidden self-stretch shrink-0 max-w-full"
            />
        </span>
        <span className="items-stretch flex justify-between gap-0 mt-11">
            <div className="overflow-hidden text-zinc-900 text-ellipsis whitespace-nowrap text-2xl font-semibold grow">
                Rating
            </div>
            <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb4ce552aa08ccbebbf60768007b35db1a62e288eeea58edee23d713b9158c43?"
            className="aspect-[1.04] object-contain object-center w-[27px] overflow-hidden shrink-0 max-w-full self-start"
            />
        </span>
          <span className="items-center flex flex-col justify-between gap-3 mt-6">
              {renderRadio("1 STAR", "1 Star", "1 Star", selectedRating, handleRadioChange)}
              {renderRadio("2 STARS", "2 Stars", "2 Stars", selectedRating, handleRadioChange)}
              {renderRadio("3 STARS", "3 Stars", "3 Stars", selectedRating, handleRadioChange)}
              {renderRadio("4 STARS", "4 Stars", "4 Stars", selectedRating, handleRadioChange)}
              {renderRadio("5 STARS", "5 Stars", "5 Stars", selectedRating, handleRadioChange)}
        </span>
        <span className="flex justify-between gap-1.5 mt-6 pr-4 items-start">
            <div className="text-emerald-700 text-xl font-semibold">Show more</div>
            <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f59782dfb7b3830646a97617a75335d45d1417088b506885c1b4abac4752bc9?"
            className="aspect-square object-contain object-center w-[27px] overflow-hidden self-stretch shrink-0 max-w-full"
            />
        </span>
      </form>
  );
}

const renderCheckbox = (inputName, label, value) => (
    <div className="items-stretch flex w-full justify-between gap-2 mt-2">
      <input
          type="checkbox"
          name={inputName}
          value={value}
          // onChange={sortBooks}
          className="aspect-[0.75] object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full bg-green-500 cursor-pointer"
      />
      <div className="overflow-hidden text-zinc-900 text-ellipsis whitespace-nowrap text-2xl self-stretch grow">
        {label}
      </div>
    </div>
);

const renderRadio = (inputName, label, value, selectedValue, handleRadioChange) => (
    <div className="items-stretch flex w-full justify-between gap-2 mt-2">
        <input
            type="radio"
            name={inputName}
            value={value}
            checked={selectedValue === value}
            onChange={() => handleRadioChange(value)}
            className="aspect-[0.75] object-contain object-center w-[22px] overflow-hidden shrink-0 max-w-full bg-green-500 cursor-pointer"
        />
        <div className="overflow-hidden text-zinc-900 text-ellipsis whitespace-nowrap text-2xl self-stretch grow">
            {label}
        </div>
    </div>
);
