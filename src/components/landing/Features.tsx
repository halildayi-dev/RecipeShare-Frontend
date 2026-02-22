import FeatureCard from "./FeatureCard";

import { features } from "@/services/mocks/features";

const Features = () => {
  return (
    <section
      id="features"
      className="py-20 px-6 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section heading */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            Everything You Need to Share Recipes
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            RecipeShare gives you simple tools to create, discover, and connect
            through food.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid gap-8 md:grid-cols-3">
          
          {features.map((feature) => 
            <FeatureCard 
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}

            />
          )}

        </div>
      </div>
    </section>
  );
};

export default Features;
