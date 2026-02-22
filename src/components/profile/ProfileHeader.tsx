interface ProfileHeaderProps {
  avatarUrl: string;
  fullName: string;
  username: string;
  bio: string;
  recipeCount: number;
  memberSince: string;
}

const ProfileHeader = ({
  avatarUrl,
  fullName,
  username,
  bio,
  recipeCount,
  memberSince,
}: ProfileHeaderProps) => {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6 mb-10">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
      {/* Left Side */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
      <img
        src={avatarUrl}
        alt={fullName}
        className="w-28 h-28 rounded-full object-cover border"
      />

      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900">
          {fullName}
        </h1>

        <p className="text-gray-500 text-sm">
          @{username}
        </p>

        <p className="mt-3 text-gray-700 max-w-md text-sm leading-relaxed">
          {bio}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-6 mt-4 text-sm text-gray-600">
          <span>
            <strong>{recipeCount}</strong> recipes
          </span>
          <span>Member since <strong>{memberSince}</strong></span>
        </div>
      </div>
      </div>

    {/* Right Side */}
    <div className="flex justify-center md:justify-end">
      <button className="px-5 py-2 text-sm font-medium rounded-lg border hover:bg-gray-50 transition">
        Edit Profile
      </button>
    </div>
    </div>
    </section>
  );
};

export default ProfileHeader;
