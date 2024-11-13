import "../Landing/marquee.css";
import {
  dishImageUrl1,
  dishImageUrl2,
  dishImageUrl3,
  dishImageUrl4,
  dishName1,
  dishName2,
  dishName3,
  dishName4,
  dishPrice1,
  dishPrice2,
  dishPrice3,
  dishPrice4,
} from "../Data/data";

const dishes = [
  { id: 1, name: dishName1, price: dishPrice1, imageUrl: dishImageUrl1 },
  { id: 2, name: dishName2, price: dishPrice2, imageUrl: dishImageUrl2 },
  { id: 3, name: dishName3, price: dishPrice3, imageUrl: dishImageUrl3 },
  { id: 4, name: dishName4, price: dishPrice4, imageUrl: dishImageUrl4 },
  // Add more items here if needed
];

const TopSellers = () => {
  return (
    <div className="w-full bg-black text-white px-6 font-forum overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...dishes, ...dishes].map((dish) => (
          <div
            key={dish.id}
            className="flex flex-col bg-black p-3 rounded-md shadow-lg mx-2 min-w-[200px] md:min-w-[250px] lg:min-w-[300px]"
          >
            <img
              src={dish.imageUrl}
              alt={dish.name}
              className="w-full h-auto rounded-md hover:scale-105 transition-transform duration-300 ease-in-out"
            />
            <h3 className="text-lg font-semibold mt-2">{dish.name}</h3>
            <p className="text-lg">{dish.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellers;
