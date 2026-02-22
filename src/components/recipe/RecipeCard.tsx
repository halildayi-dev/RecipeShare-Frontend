import { Link } from "react-router-dom";

interface RecipeCardProps {
  id: string;
  title: string;
  imageUrl: string;
  authorName: string;
  authorAvatarUrl?: string;
  createdAt: string;
}

const RecipeCard = ({
  id,
  title,
  imageUrl,
  authorName,
  authorAvatarUrl,
  createdAt,
}: RecipeCardProps) => {
  return (
    <Link
      to={`/recipes/${id}`}
      className="group block bg-white rounded-2xl shadow-sm overflow-hidden transition hover:shadow-lg cursor-pointer"
    >
        {/* Image */}
        <div className="aspect-video bg-gray-100 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-semibold text-lg mb-3 line-clamp-2">
            {title}
          </h3>

          <div className="flex items-center justify-between text-sm text-gray-500">

            {/* Author */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gray-200 overflow-hidden">
                {authorAvatarUrl ? (
                  <img
                    src={authorAvatarUrl}
                    alt={authorName}
                    className="w-full h-full object-cover"
                  />
                ) : null}
              </div>
              <span className="text-gray-600">{authorName}</span>
            </div>

            {/* Date */}
            <span className="text-gray-400">{createdAt}</span>
          </div>
        </div>
    </Link>
  );
};

export default RecipeCard;
