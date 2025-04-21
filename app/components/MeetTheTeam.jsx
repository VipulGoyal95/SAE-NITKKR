import Image from 'next/image';

export default function MeetTheTeam() {
  const team = [
    {
      src: '/team1.png',
      alt: 'Team Member 1',
      rotate: '-rotate-6',
    },
    {
      src: '/team2.png',
      alt: 'Team Member 2',
      rotate: 'rotate-0',
    },
    {
      src: '/team3.png',
      alt: 'Team Member 3',
      rotate: 'rotate-6',
    },
  ];

  return (
    <div className="bg-black text-white py-12 px-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-10">Meet The Team</h2>

      <div className="flex flex-wrap justify-center gap-8">
        {team.map((member, index) => (
          <div
            key={index}
            className={`w-64 h-80 overflow-hidden rounded-xl border-2 border-teal-400 shadow-lg transform ${member.rotate}`}
          >
            <Image
              src={member.src}
              alt={member.alt}
              width={256}
              height={320}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
