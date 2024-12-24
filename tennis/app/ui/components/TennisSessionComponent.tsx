import '@/app/ui/styles.css';
import { getTennisSessions, getTennisClub } from '@/app/lib/data';

import { TennisSession, SessionSlot, TennisClub } from '@/app/lib/definitions';
import { SortType } from '@/app/lib/definitions';
import TennisSessionSlotComponent from './TennisSessionSlotComponent';


/*
    Once the calendar has been built, users will be able to locate sessions - this will be the detail page for a session
    eventually

    export default function SessionWrapper(sessionid: number) {
*/

export default function TennisSessionComponent({
    tennisClubId
} : {
    tennisClubId: number
}) {
   
    /* Assume that we're getting sessions for today (until the DB is sorted out)
    TODO: create DB with Calendar widget that cann allow for CRUD of sessions on dates */
    const today = new Date();
    const tennisClub: TennisClub = getTennisClub(tennisClubId);
    const tennisSessions: TennisSession[] = getTennisSessions(tennisClub, today);
    
    // Get the only available tennis session and all it's session slots
    const sessionSlots: SessionSlot[] = tennisSessions[0].sessionSlots;

    console.log("Session slots " + sessionSlots.length)

    return (
    <div>
        <div>{tennisClub.name}</div>
        <div>Session: {today.toDateString()}</div>
        <div className="">
                {sessionSlots.map((slot) => (
                        <TennisSessionSlotComponent key={slot.id} tennisClubId={tennisClubId} sessionSlot={slot} />     
                ))}
        </div>

    </div>
    )
};