import '@/app/ui/styles.css';
import { TennisClub } from './lib/definitions';
import { getTennisClub } from './lib/data';
import TennisSessionComponent from './ui/components/TennisSessionComponent';

export default function Home() {

  const tennisClub: TennisClub = getTennisClub(1);
  
  return (
    <main className="body flex min-h-screen flex-col p-4">
      <header>
        <hgroup>
          <div className="club-header">
            <img src="./rtc.png" />
          </div>
          <h2>List of all tennis slots for this tennis session</h2>
        </hgroup>
        <nav>
          <ul className="nav-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <br />
      <div className="session">
        <TennisSessionComponent tennisClubId={tennisClub.id} />
      </div>


    </main>
  
  )};