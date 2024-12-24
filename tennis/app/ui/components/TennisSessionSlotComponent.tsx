import {SessionSlot, TennisMatch, TennisCourt } from '@/app/lib/definitions';
import '@/app/ui/styles.css';
import PlayerList from './PlayerList';
import { buildCourts } from '@/app/lib/utils';

/*
    id: number;
    matches: TennisMatch[];
    registeredPlayers: Player[] = [];
    reserves: Player[];
    totalCourts: number;
*/

export default function TennisSessionSlotComponent({ tennisClubId, sessionSlot}:{
    tennisClubId: number,
    sessionSlot: SessionSlot
}) {

    const tennisCourts: TennisCourt[] = buildCourts(tennisClubId, sessionSlot.totalCourts );

return (
    <div>
        <div>Registered Players</div>
        <PlayerList players={sessionSlot.registeredPlayers} />

        <div className="session-slot">
            <div className="session-time">9:00</div>
            <div className="session-court-list">
                {tennisCourts.map((court, index) => (
                <div key={court.courtNumber} className="session-court">
                    <div className="title">Court {court.courtNumber}</div>
                    <div className="side">
                        <div>Pair 1</div>
                    </div>
                    <div className="side">
                        <div>Pair 2</div>
                    </div>
                </div>
                ))}
            </div>
        </div>

    </div>    
)};

/*

export function Card({
    title,
    value,
    type,
}: {
    title: string;
    value: number | string;
    type: 'invoices' | 'customers' | 'pending' | 'collected';
}) {
    const Icon = iconMap[type];

    return (
        <div></div>
    );
};

*/
