import { AppHeader } from '@/components/layout';
import { RecipeList } from '@/components/recipe';

export default function HomePage() {
  return (
   <>
    <AppHeader />
    <main className='bg-gray-50 min-h-screen'>
        <RecipeList />
    </main>
   </>
  );
}
