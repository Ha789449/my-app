// components/Skills.js
'use client'
const skills = [
  { name: 'Javascript', icon: '/js.jpg' },
{ name: 'Typescript', icon: '/Tech.jpg' }, // ✅ correct
  { name: 'React', icon: '/React.jpg' },
  { name: 'Next.js', icon: '/next.jpg' },
  { name: 'Node.js', icon: '/node.jpg' },
  { name: 'Express.js', icon: '/express.jpg' },
  { name: 'Nest.js', icon: '/nest.jpg' },
  { name: 'Socket.io', icon: '/icon-socket.jpg' },
  { name: 'PostgreSQL', icon: '/postgres.jpg' },
  { name: 'MongoDB', icon: '/mongo.jpg' },
  { name: 'Sass/Scss', icon: '/sass.jpg' },
  { name: 'Tailwindcss', icon: '/tailwindcss.jpg' },
  { name: 'Figma', icon: '/figma.jpg' },
  { name: 'Cypress', icon: '/cypress.png' },
  { name: 'Storybook', icon: '/storybook.jpg' },
  { name: 'Git', icon: '/git.jpg' }
];

export default function Skills() {
  return (
    <div className="py-16 bg-white text-center">
      <h2 className="text-gray-500 text-sm uppercase tracking-widest mb-2">Skills</h2>
      <p className="text-xl font-semibold mb-10">
        The skills, tools and technologies I am really good at:
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto px-4">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col items-center space-y-2">
            <img src={skill.icon} alt={skill.name} className="w-12 h-12 object-contain" />
            <span className="text-sm text-gray-700">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
