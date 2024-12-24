import {SortType, TennisCourt, TennisMatch, Player, SessionSlot, SortOptions, DoublesTeam, TennisSession} from '@/app/lib/definitions';

const unknownPlayer = new Player(0,"Unknown",0,'M');

export function getNextDayOfWeek(nextDay: number) {
    // Calculate the next Thursday coming
    const sessionDate = new Date();
    let daysUntilFriday = 0;
    if(sessionDate.getDay() < nextDay) {
        daysUntilFriday = 5 - sessionDate.getDay();
    } else {
        daysUntilFriday = 14 - (sessionDate.getDay() );
    }
    sessionDate.setDate(sessionDate.getDate() + 1);
    return sessionDate;
}

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

export function buildCourts(tennisClubId: number, totalCourts: number) {
    const tennisCourts : TennisCourt[] = [];
    for (let index = 1; index <= totalCourts; index++) {
        const tennisCourt : TennisCourt = new TennisCourt(tennisClubId, index);
        tennisCourts.push(tennisCourt);
    }
    return tennisCourts;
}

export function reservePlaces(totalCourts: number, registeredPlayers: Player[]) {
    const maxPlayers = totalCourts * 4;
    const reservedPlayers: Player[] = [];

    if(registeredPlayers.length > maxPlayers) {
        const initialTotalRegPlayers: number = registeredPlayers.length;

        // Add oversubscribed players to the reserves list
        for (let index = initialTotalRegPlayers - 1; index >= maxPlayers; index--) {
            const element:Player = registeredPlayers[index];
            reservedPlayers.push( element);
            registeredPlayers.pop();
          }
    }
    return reservedPlayers;
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
 
export function buildSessionSlot(sortOptions: SortOptions, sessionSlot: SessionSlot) {

    const reservedPlayers: Player[] = sessionSlot.reserves;

    reservePlaces(sessionSlot.totalCourts, sessionSlot.registeredPlayers);

    // Build matches based on rating descending from strongest players to weakest
    sessionSlot.registeredPlayers.sort((a, b) => b.rating - a.rating);

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
        const males = filterPlayersByGender(sessionSlot.registeredPlayers, 'M');
        const females = filterPlayersByGender(sessionSlot.registeredPlayers, 'F');

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
        average = average / sessionSlot.registeredPlayers.length;

        for (let i = 0; i < females.length; i++) {
            const rating = females[i].rating;
            // Add number of total males with that rating to the count or  
            ratings.has(rating) ? ratings.set(rating, ratings.get(rating) + 1) : ratings.set(rating, 1);
        }

    } else {
        //For each court, build a team

        for (let index = 1; index <= sessionSlot.totalCourts; index++) {
            let tennisCourt = new TennisCourt(1,index);                           // !!!!!! Sample data !!!!!!
 
            //Side 1
            let player1: Player = sessionSlot.registeredPlayers.shift() || unknownPlayer; // Strongest
            let player2: Player = sessionSlot.registeredPlayers.pop() || unknownPlayer; // Weakest
            let sideA: DoublesTeam = new DoublesTeam(player1, player2);
            
            let player3: Player = sessionSlot.registeredPlayers.shift() || unknownPlayer; // Strongest
            let player4: Player = sessionSlot.registeredPlayers.pop() || unknownPlayer; // Weakest
            let sideB: DoublesTeam = new DoublesTeam(player3, player4);

            let tennisMatch = new TennisMatch(1, tennisCourt, sideA, sideB);
            
            //Add the match
            sessionSlot.matches.push(tennisMatch);

        } 

    }


}

