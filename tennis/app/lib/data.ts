import {
    Player,
    TennisMatch,
    SessionSlot,
    DayOfWeek,
    TennisSession,
    TennisClub
} from './definitions';

import { getNextDayOfWeek } from './utils';

export function getTennisClub(id: number) {

    // create test Club (should be replaced with db call)
    let tennisClub : TennisClub = new TennisClub(1,'Redbourne Tennis Club');
    return tennisClub;
}

export function getTennisSessions(tennisClub: TennisClub, sessionDate: Date) {
    const tennisSessions: TennisSession[] = [];
    
    // Create Test Session (should be replaced with db call)
    const exampleCourts: number = 4
    const sessionSlot : SessionSlot = testUnfilledSessionSlot(1, exampleCourts);
    const session = new TennisSession(1, tennisClub.id, getNextDayOfWeek(DayOfWeek.FRIDAY),[sessionSlot]);


    tennisSessions.push(session);

    return tennisSessions;
}


export function testUnfilledSessionSlot(sessionId: number, totalCourts: number) {
    const registeredPlayers: Player[] = testPlayerListFull();
    const reserves: Player[] = [];
    const tennisMatches: TennisMatch[] = [];
    const sessionSlot = new SessionSlot(sessionId, tennisMatches, registeredPlayers, reserves, totalCourts);

    return sessionSlot;
}

function testPlayerListFull() {

    const players: Player[] = [];

    players.push( new Player(1,'Anne Widdecombe',4,'F'));
    players.push( new Player(2,'Barnie Rubble',0,'M'));
    players.push( new Player(3,'Charles Bronson',1,'M'));
    players.push( new Player(4,'Dwayne Dibley',2,'M'));
    players.push( new Player(5,'Eddie Edwards',5,'M'));
    players.push( new Player(6,'Felicity Kendal',2,'F'));
    players.push( new Player(7,'Greg Davies',1,'M'));
    players.push( new Player(8,'Han Solo',4,'M'));
    players.push( new Player(9,'Ian Hislop',3,'M'));
    players.push( new Player(10,'James Bond',5,'M'));
    players.push( new Player(11,'Keiran Trippier',4,'M'));
    players.push( new Player(12,'Linda Hamilton',3,'F'));
    players.push( new Player(13,'Michael Madsden',4,'M'));
    players.push( new Player(14,'Nicole Kidman',1,'F'));
    players.push( new Player(15,'Oscar Goldman',3,'M'));
    players.push( new Player(16,'Penelope Pitstop',1,'F'));
    players.push( new Player(17,'Quentin Crisp',3,'M'));
    players.push( new Player(18,'Roland Rat',3,'M'));
    players.push( new Player(19,'Steve Austin',1,'M'));
    players.push( new Player(20,'Terence Stamp',4,'M'));
    players.push( new Player(21,'Ursula Andress',2,'F'));
    players.push( new Player(22,'Vince Diesel',5,'M'));
    players.push( new Player(23,'Warren Beaty',0,'M'));
    players.push( new Player(24,'Yvette Fielding',0,'F'));
    players.push( new Player(25,'Quentin Crisp',3,'M'));

    return players;
}
