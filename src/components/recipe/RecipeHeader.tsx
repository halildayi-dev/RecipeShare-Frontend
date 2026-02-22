interface RecipeHeaderProps {
  title: string;
  authorName: string;
  authorAvatarUrl?: string;
  createdAt: string;
}

const RecipeHeader = ({
  title,
  authorName,
  authorAvatarUrl,
  createdAt,
}: RecipeHeaderProps) => {
  const formattedDate = new Date(createdAt).toLocaleString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className="space-y-4">
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        {title}
      </h1>

      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden ring-1 ring-gray-200">
            {authorAvatarUrl ? (
              <img
                src={authorAvatarUrl}
                alt={authorName}
                className="w-full h-full object-cover"
              />
            ) : null}
          </div>

          <div className="flex flex-col leading-tight">
            <span className="font-medium text-gray-700">
              {authorName}
            </span>
            <span className="text-xs text-gray-400">
              Published {formattedDate}
            </span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default RecipeHeader;
