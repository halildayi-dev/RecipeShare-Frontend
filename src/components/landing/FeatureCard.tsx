type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-4 hover:shadow-md transition">
      <div className="text-3xl">{icon}</div>

      <h4 className="text-lg font-semibold">{title}</h4>

      <p className="text-gray-600 text-sm">{description}</p>

      <div className="mt-4 h-32 bg-gray-100 rounded-lg flex items-center justify-center text-xs text-gray-400">
        Feature preview
      </div>
    </div>
  );
};

export default FeatureCard;
