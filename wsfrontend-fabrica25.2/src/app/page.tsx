import { FooterMenu } from '../components/FooterMenu'
import { HeaderBanner } from '../components/HeaderBanner'
import { SearchMenu } from '../components/SearchMenu'
import { PokeList } from '../components/PokeList';



export default function Home() {
  return (
    <>
        <HeaderBanner />
      <main>
        <SearchMenu/>
        <PokeList />
        <FooterMenu/>
      </main>
    </>
  );
}
