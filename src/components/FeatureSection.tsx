
import { FiTruck, FiRefreshCw, FiHeadphones, FiCreditCard } from "react-icons/fi";

const features = [
  { id: 1, icon: <FiTruck size={50} />, title: "Fast Delivery", subtitle: "Across India" },
  { id: 2, icon: <FiRefreshCw size={50} />, title: "Easy Returns", subtitle: "Hassle-Free" },
  { id: 3, icon: <FiCreditCard size={50} />, title: "Secure Payment", subtitle: "100% Safe" },
  { id: 4, icon: <FiHeadphones size={50} />, title: "24/7 Support", subtitle: "Anytime Help" },
];

const FeatureSection = () => {
  return (
    <section className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 space-x-6">
        {features.map((feature) => (
          <div key={feature.id} className="flex flex-col items-center text-center">
            <div className="text-red-500">{feature.icon}</div>
            <h3 className="text-lg font-bold mt-2">{feature.title}</h3>
            <p className="text-gray-400 text-sm">{feature.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
