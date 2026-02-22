type ValueCardProps = {
  title: string;
  description: string;
};

const ValueCard = ({ title, description }: ValueCardProps) => {
  return (
    <div className="bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-sm transition">
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default ValueCard;
