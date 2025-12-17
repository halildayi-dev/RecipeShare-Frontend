interface RecipeCardProps {
  title: string;
  imageUrl: string;
  authorName: string;
  authorAvatarUrl?: string;
  createdAt: string;
}

const RecipeCard = ({
  title,
  imageUrl,
  authorName,
  authorAvatarUrl,
  createdAt,
}: RecipeCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition cursor-pointer">
      
      {/* Image */}
      <div className="aspect-video bg-gray-100 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-3 line-clamp-2">
          {title}
        </h3>

        <div className="flex items-center justify-between text-sm text-gray-500">
          
          {/* Author */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
              {authorAvatarUrl ? (
                <img
                  src={authorAvatarUrl}
                  alt={authorName}
                  className="w-full h-full object-cover"
                />
              ) : null}
            </div>
            <span>{authorName}</span>
          </div>

          {/* Date */}
          <span>{createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
