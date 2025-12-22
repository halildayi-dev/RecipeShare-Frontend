interface Props {
  imageUrl: string;
  title: string;
}

const RecipeMedia = ({ imageUrl, title }: Props) => {
  return (
    <div className="aspect-video rounded-xl overflow-hidden bg-gray-100">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default RecipeMedia;
