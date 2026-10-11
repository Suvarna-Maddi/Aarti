import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { pageHead } from '@/data/catalog';
import living from '@/assets/room hero.png';
import bedroom from '@/assets/bedroom.png';
import dining from '@/assets/diningroom.png';
import workspace from '@/assets/work.png';
import outdoor from '@/assets/outdoor.png';
import entryway from '@/assets/entryway.png';
import reading from '@/assets/learning.png';

const rooms = [
  { number:'01', name:'Living Room', line:'Gather. Relax. Belong.', image:living, room:'Living' },
  { number:'02', name:'Bedroom', line:'Rest. Recharge. Dream.', image:bedroom, room:'Bedroom' },
  { number:'03', name:'Dining Room', line:'Share. Savour. Celebrate.', image:dining, room:'Dining' },
  { number:'04', name:'Workspace', line:'Focus. Create. Achieve.', image:workspace, room:'Office' },
  { number:'05', name:'Outdoor Living', line:'Breathe. Unwind. Connect.', image:outdoor, room:'Living' },
  { number:'06', name:'Entryway', line:'Arrive. Welcome. Begin.', image:entryway, room:'All' },
  { number:'07', name:'Reading & Lounge', line:'Read. Reflect. Retreat.', image:reading, room:'Living' },
];

export const Route = createFileRoute('/rooms')({ head: () => pageHead('Spaces for Every Moment', 'Explore eight thoughtfully composed living spaces, from serene bedrooms to welcoming lounges.'), component: RoomsRoute });

function RoomsRoute() {
  return <main className="rooms-page">
    <section className="rooms-hero">
      <img src={living} alt="Warm, thoughtfully furnished living room" width={1536} height={1024} />
      <div className="rooms-hero-shade" />
      <div className="rooms-hero-copy"><span>ROOMS BY SAI DATTA</span><h1 className="display">Spaces for<br />Every Moment</h1><p>Thoughtfully composed rooms.<br />Designed for the way you live.</p></div>
      <div className="rooms-counter"><strong>01</strong><span>/ 07</span><i /><p>LIVING ROOM</p></div>
    </section>
    <section className="rooms-intro"><span className="eyebrow">ROOM BY ROOM</span><h2 className="display">Find your space.</h2><p>Every room tells a story. Discover furniture and ideas made to bring yours to life.</p></section>
    <section className="room-mosaic">
      {rooms.slice(1).map((room,index) => <article className={`room-editorial room-editorial-${index + 2}`} key={room.name}>
        <img src={room.image} alt={`${room.name} interior`} loading="lazy" width={768} height={512} />
        <div className="room-editorial-overlay"><span>{room.number}</span><h2 className="display">{room.name}</h2><p>{room.line}</p><Link to="/collections" search={{ room:room.room }}>Explore <ArrowRight /></Link></div>
      </article>)}
    </section>
  </main>;
}
