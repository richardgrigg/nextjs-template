import { Session } from "inspector/promises";
import {SocialTennis} from "@app/lib/data.ts";



/*
    Sorting Options
    1) Random - completely random sides
    2) Balanced - produce competitive matches - weaker players vs weaker players and strong vs strong
    3) Training - make sides composed of Very strong and very week players and pitch them against each other
*/

export function buildSession(players: Player[], sortOptions: SortOptions) {

    function filterPlayersByGender(players: Player[], gender: String) {

        const matches: TennisMatch[] = [];
        const reserves: Player[] = [];
       
        const session = new SocialSession(1, matches, reserves);
        const matchPlayers: Player[] = [];


        newlist = players.filter( function(player) {
                return player.gender == gender;    
            });
        
        return newlist;
    }

    const session = new SocialSession();

    const sides = [];
    
    if(sortOptions.prefer_mixed) {

        //Split by Male and Female
        const males = filterPlayersByGender(players, 'M');
        const females = filterPlayersByGender(players, 'F');

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


    );
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