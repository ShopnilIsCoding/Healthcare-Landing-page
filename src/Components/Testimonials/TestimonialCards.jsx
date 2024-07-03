/* eslint-disable react/prop-types */

const TestimonialCards = ({ title, description, image, position, name }) => {
  return (
    <div>
      <div className="max-w-md p-5 bg-[#FFFFF5]  rounded-lg font-inter h-[320px] flex flex-col mx-5 lg:mx-1">
        <h5 className="mb-2 text-xl font-semibold max-w-[310px] text-core">
          {title}
        </h5>
        <p className="mb-4 font-normal text-sub flex-1">{description}</p>
        <div className="flex items-center mt-2 ">
          <img className="w-12 h-12 rounded-full" src={image} alt={name} />
          <div className="ml-4">
            <p className="text-core font-bold">
              {name}, <span className="text-sub font-medium">{position}</span>
            </p>
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#FFE03D]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#FFE03D]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#FFE03D]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#FFE03D]"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-[#FFE03D]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
