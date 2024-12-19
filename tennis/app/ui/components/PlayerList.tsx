import {TennisCourt, TennisMatch, Player, SocialSession, SortOptions} from '@/app/lib/definitions';
import { testSocialSession } from '@/app/lib/data';
import {SortType} from '@/app/lib/definitions';

export function filterPlayersByGender(players: Player[], gender: string) {    

    let filteredPlayers: Player[] = [];
    filteredPlayers = players.filter( function(player) {
        return player.gender == gender;    
    });    
    return filteredPlayers;
}

export function buildCourts(totalCourts: number) {
    const tennisCourts : TennisCourt[] = [];
    for (let index = 1; index >= totalCourts; index++) {
        const tennisCourt : TennisCourt = new TennisCourt(index);
        tennisCourts.push(tennisCourt);
    }
    return tennisCourts;
}

export function reservePlaces(testSocial:SocialSession) {
    const maxPlayers = testSocial.totalCourts * 4;

    if(testSocial.registeredPlayers.length > maxPlayers) {
        
        const initialTotalRegPlayers: number = testSocial.registeredPlayers.length;

        // Add oversubscribed players to the reserves list
        for (let index = initialTotalRegPlayers - 1; index >= maxPlayers; index--) {
            const element:Player = testSocial.registeredPlayers[index];
            testSocial.reserves.push( element);
            testSocial.registeredPlayers.pop();
          }
    }
}

function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

  
export function buildSession(sortOptions: SortOptions) {
    const testSocial:SocialSession  = testSocialSession();

    reservePlaces(testSocial);

    // Build matches based on rating descending from strongest players to weakest
    testSocial.registeredPlayers.sort((a, b) => b.rating - a.rating);

    switch ( sortOptions.sort_type ) {
        case SortType.BAL:
            // statement 1
            break;
        case SortType.RND:
            // statement 2
            break;
        case SortType.TRN:
            // statement N
            break;
        default: 
            // 
            break;
     }

    if(sortOptions.prefer_mixed) {

        //Split by Male and Female
        const males = filterPlayersByGender(testSocial.registeredPlayers, 'M');
        const females = filterPlayersByGender(testSocial.registeredPlayers, 'F');

        // Sort by rating strongest first
        males.sort((a, b) => b.rating - a.rating);
        females.sort((a, b) => b.rating - a.rating);    
    }

    return testSocial;

}


export default function PlayerList() {

    const sortOptions : SortOptions = new SortOptions(true, SortType.BAL );
    const socialSession: SocialSession = buildSession(sortOptions);
    const players: Player[] = socialSession.registeredPlayers;
    const reserves: Player[] = socialSession.reserves;
    

    if(players.length == 0) {
        console.log('Player list was empty')
    }


    return (
        <div>
            <div>Players
                <ol className='flex flex-row wrap'>

                    {players.map((player, index) => (
                        <li key={player.id}>
                            {player.name} ({player.rating})

                            {index < players.length - 1 ? (
                                <span className="mx-3 inline-block">/</span>
                            ) : null}
                        </li>
                    ))}
                </ol>
            </div>
            <div>Reserves
            <ol className='flex flex-row wrap'>

                {reserves.map((player, index) => (
                    <li key={player.id}>
                        {player.name} ({player.rating})

                        {index < players.length - 1 ? (
                            <span className="mx-3 inline-block">/</span>
                        ) : null}
                    </li>
                ))}
            </ol>
        </div>
    </div>       
    );
}