import {Player} from '@/app/lib/definitions';
import { clsx } from 'clsx';

export default function PlayerList({players}:  {
    players : Player[]}

) {
    return (
        <div>
            <ol className='flex flex-row wrap'>
                {players.map((player, index) => (
                    <li key={player.id} className={clsx(
                        player.gender == 'M' ? 'text-black' : 'text-red-800',
                    )}>
                        {player.name} ({player.gender}{player.rating})
                    </li>
                ))}
            </ol>
        </div>
    );
}