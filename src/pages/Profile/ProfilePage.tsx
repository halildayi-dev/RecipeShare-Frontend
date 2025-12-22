import { AppHeader } from "@/components/layout";
import {
  ProfileHeader,
  ProfileRecipeGrid,
} from "@/components/profile";
import { mockUser } from "@/services/mocks/user";

const ProfilePage = () => {
  return (
    <>
      <AppHeader />

      <main className="max-w-7xl mx-auto px-6 py-8">
        <ProfileHeader {...mockUser} />
        <ProfileRecipeGrid />
      </main>
    </>
  );
};

export default ProfilePage;
