import {
    Player,
    TennisMatch,
    SocialSession,
} from './definitions';


export function testSocialSession() {
    const registeredPlayers: Player[] = testPlayerListFull();
    const reserves: Player[] = [];
    const tennisMatches: TennisMatch[] = [];
    const socialSession = new SocialSession(1, tennisMatches, registeredPlayers, reserves, 4);
    return socialSession;
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
