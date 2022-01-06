import dynamic from 'next/dynamic';

const Map = dynamic(() => import('components/Map/Map'), { ssr: false });

const places = [
  {
    id: '1',
    name: 'Madrid',
    slug: 'Madrid',
    location: {
      latitude: 40.4168,
      longitude: 3.7038,
    },
  },
  {
    id: '2',
    name: 'Amsterdam',
    slug: 'Amsterdam',
    location: {
      latitude: 52.3676,
      longitude: 4.9041,
    },
  },
];

export default function Home() {
  return <Map places={places} />;
}
