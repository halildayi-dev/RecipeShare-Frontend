interface Props {
  imageUrl: string;
  title: string;
}

const RecipeMedia = ({ imageUrl, title }: Props) => {
  return (
    <figure className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
      <img
        src={imageUrl}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />

      {/* Optional subtle overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
    </figure>
  );
};

export default RecipeMedia;
