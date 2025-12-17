import { AppHeader } from '@/components/layout';
import { RecipeList } from '@/components/recipe';

export default function HomePage() {
  return (
   <>
    <AppHeader />
    <main>
        <RecipeList />
    </main>
   </>
  );
}
