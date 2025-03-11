
import Slider from "react-slick";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import jacket from "../assets/jacket.png"
const products = [
  {
    id: 1,
    image: jacket, // Change to your actual image path
    name: "D-298 Yellow Red Running Indicator",
    price: "Rs 360",
    oldPrice: "Rs 360.00",
    rating: 3,
  },
  {
    id: 2,
    image: jacket,
    name: "D-298 Yellow Red Running Indicator",
    price: "Rs 360",
    oldPrice: "Rs 360.00",
    rating: 4,
  },
  {
    id: 3,
    image: jacket,
    name: "D-298 Yellow Red Running Indicator",
    price: "Rs 360",
    oldPrice: "Rs 360.00",
    rating: 2,
  },
  {
    id: 4,
    image: jacket,
    name: "D-298 Yellow Red Running Indicator",
    price: "Rs 360",
    oldPrice: "Rs 360.00",
    rating: 5,
  },
];

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-red-500 p-3 rounded-full shadow-lg text-white hover:bg-red-700"
      onClick={onClick}
    >
      <FiArrowRight size={20} />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-red-500 p-3 rounded-full shadow-lg text-white hover:bg-red-700"
      onClick={onClick}
    >
      <FiArrowLeft size={20} />
    </button>
  );
};

const TopCategoryProducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust based on screen width
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Top Category Products</h2>
        <div className="relative">
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product.id} className="px-2">
                <div className="bg-gray-200 p-4 rounded-xl shadow-lg flex flex-col items-center text-center text-black w-[306px] h-[344px] mx-auto">
                  <img src={product.image} alt={product.name} className="w-40 h-40 object-contain mb-4" />
                  <h3 className="text-lg font-medium">{product.name}</h3>
                  <div className="text-red-500 font-bold text-lg">{product.price}</div>
                  <div className="text-gray-500 line-through">{product.oldPrice}</div>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, index) => (
                      <span key={index} className={`text-yellow-400 text-xl ${index < product.rating ? "" : "opacity-30"}`}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TopCategoryProducts;
