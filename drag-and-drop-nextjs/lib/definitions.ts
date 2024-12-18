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

export enum SortType {
    RND = 'RANDOM',
    BAL = 'Balanced',
    TRN = 'Training'
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

export class TennisCourt{
    courtNumber: number;

    constructor(courtNumber: number) {
        this.courtNumber = courtNumber;
    }
}

export class TennisMatch {
    court: TennisCourt;
    team1: DoublesTeam;
    team2: DoublesTeam;

    constructor(court: TennisCourt, team1: DoublesTeam, team2: DoublesTeam ) {
        this.court = court;
        this.team1 = team1;
        this.team2 = team2;
    }
}

export class SocialSession {
    id: number;
    matches: TennisMatch[];
    playersRegistered: Player[];
    reserves: Player[];
    totalCourts: number;


    constructor(id: number, matches: TennisMatch[], playersRegistered: Player[], reserves: Player[], totalCourts: number) {
        this.id = id;
        this.matches = matches;
        this.playersRegistered = playersRegistered;
        this.reserves = reserves;
        this.totalCourts = totalCourts;
    }
}