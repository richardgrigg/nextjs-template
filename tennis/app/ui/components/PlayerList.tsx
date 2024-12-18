import { Session } from "inspector/promises";
import { SocialSession, Player, SortOptions, TennisMatch, DoublesTeam } from '@/app/lib/definitions';
import { testSocialSession } from '@/app/lib/data';


/*
    Sorting Options
    1) Random - completely random sides
    2) Balanced - produce competitive matches - weaker players vs weaker players and strong vs strong
    3) Training - make sides composed of Very strong and very week players and pitch them against each other
*/

export function buildSession(players: Player[], sortOptions: SortOptions) {

    function filterPlayersByGender(players: Player[], gender: String) {
    {
        let filteredPlayers: Player[] = [];

        filteredPlayers = players.filter( function(player) {
            return player.gender == gender;    
        });
        
        return filteredPlayers;
    }}


    if(sortOptions.prefer_mixed) {

        const testSocial  = testSocialSession();


        //Split by Male and Female
        const males = filterPlayersByGender(testSocial.registeredPlayers, 'M');
        const females = filterPlayersByGender(testSocial.registeredPlayers, 'F');

        console.log('Before Sorting');
        console.log(males);
        console.log(females);

        // Sort by rating strongest first
        males.sort((a, b) => b.rating - a.rating);
        females.sort((a, b) => b.rating - a.rating);    

        console.log('After Sorting');
        console.log(males);
        console.log(females);



    }

    return (
        <div></div>
    )

}


export default function PlayerList({
    players,
}: {
    players: Player[];
}) {



    return (
        <div>
            <ol className='flex flex-row wrap'>
                {players.map((player, index) => (
                    <li key={player.id}>
                        {player.name}({player.rating})

                        {index < players.length - 1 ? (
                            <span className="mx-3 inline-block">/</span>
                        ) : null}
                    </li>
                ))}
            </ol>
        </div>
    );
}