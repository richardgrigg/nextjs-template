export class Player {
    id: number;
    name: string;
    rating: number;
    gender: string;

    constructor(id: number, name: string, rating: number, gender: string) {
        this.id = id;
        this.name = name;
        this.rating = rating;
        this.gender = gender;
    }
}

/*
Algoirthm prioritises pairs as follows. 

ALWAYS identifies beginners and pairs with top rated players first and then applies SortType as follows

Random - completely at random disregards gender
Balanced - strongest players and the weakest disregards gender
Mars - strongest men with weakest women first
Venus - strongest women with weakest men first

Gender - prioritises matches of all men and all women and then mixes whats left (still uses rating and balanced)

*/

export enum SortType {
    RND = 'Random', 
    BAL = 'Balanced',
    MAR = 'Mars',
    VEN = 'Venus'
}

export enum DayOfWeek {
    SUNDAY = 0, 
    MONDAY = 1,
    TUESDAY = 2,
    WEDNESDAY = 3,
    THURSDAY = 4,
    FRIDAY = 5,
    SATURDAY = 6
}

export class SortOptions{
    prefer_mixed: boolean;
    sort_type: SortType;

    constructor(prefer_mixed: boolean, sort_type: SortType) {
        this.prefer_mixed= prefer_mixed;
        this.sort_type = sort_type;

    }
}

export class DoublesTeam {
    player1: Player;
    player2: Player;

    constructor(player1: Player, player2: Player) {
        this.player1 = player1;
        this.player2 = player2;
    }
}

export class TennisClub{
    id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

export class TennisCourt{
    tennisClubId: number;
    courtNumber: number;

    constructor(tennisClubId: number, courtNumber: number) {
        this.tennisClubId = tennisClubId;
        this.courtNumber = courtNumber;

    }
}

export class TennisMatch {
    id: number;
    court: TennisCourt;
    team1: DoublesTeam;
    team2: DoublesTeam;

    constructor(id: number, court: TennisCourt, team1: DoublesTeam, team2: DoublesTeam ) {
        this.id = id;
        this.court = court;
        this.team1 = team1;
        this.team2 = team2;
    }
}

export class TennisSession {
    id: number;
    tennisClubId: number;
    sessionDate: Date;
    sessionSlots: SessionSlot[];
    constructor(id:number, tennisClubId: number, sessionDate: Date, sessionSlots: SessionSlot[]) {
        this.id = id;
        this.tennisClubId = tennisClubId;
        this.sessionDate = sessionDate;
        this.sessionSlots = sessionSlots;
    }

}

export class SessionSlot {
    id: number;
    matches: TennisMatch[];
    registeredPlayers: Player[] = [];
    reserves: Player[];
    totalCourts: number;

    constructor(id: number, matches: TennisMatch[], registeredPlayers: Player[], reserves: Player[], totalCourts: number) {
        this.id = id;
        this.matches = matches;
        this.reserves = reserves;
        this.totalCourts = totalCourts;
        this.registeredPlayers = registeredPlayers;
    }
}