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

export function filterPlayersByRating(players: Player[], rating: number) {    

    let filteredPlayers: Player[] = [];
    filteredPlayers = players.filter( function(player) {
        return player.rating == rating;    
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


function shufflePlayers(player: Player[]) {
    let currentIndex = player.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
        [player[currentIndex], player[randomIndex]] = [
            player[randomIndex], player[currentIndex]];
    }
  }

export function buildSession(sortOptions: SortOptions) {
    const testSocial:SocialSession  = testSocialSession();
    reservePlaces(testSocial);

    // Build matches based on rating descending from strongest players to weakest
    testSocial.registeredPlayers.sort((a, b) => b.rating - a.rating);

    /*
    SortType {
        RND = 'Random', 
        BAL = 'Balanced',
        MAR = 'Mars',
        VEN = 'Venus'
    }
    */
    switch ( sortOptions.sort_type ) {
        case SortType.BAL:
            // statement 1
            break;
        case SortType.RND:
            // statement 2
            break;
        case SortType.MAR:
            // statement 3
            break;
        case SortType.VEN:
            // statement 4
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
        
        // Ratings Map
        let ratings = new Map();

        // Average rating
        let average = 0;


        for( let i = 0; i < males.length; i++) {
            
            const rating = males[i].rating;
            average += rating;
            
            // Add number of total males with that rating to the count or  
            ratings.has(rating)? ratings.set(rating, ratings.get(rating) + 1): ratings.set(rating, 1);
        }

        // Calculate Average rating
        average = average / males.length;

        for (let i = 0; i < females.length; i++) {
            const rating = females[i].rating;
            // Add number of total males with that rating to the count or  
            ratings.has(rating) ? ratings.set(rating, ratings.get(rating) + 1) : ratings.set(rating, 1);
        }

        // Juggle each list of players of a certain rating

        

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