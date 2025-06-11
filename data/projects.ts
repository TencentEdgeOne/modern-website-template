export interface Project {
  id: string
  title: string
  category: string
  description: string
  image: string
  tags: string[]
}

export const projects: Project[] = [
  {
    id: 'nova-finance',
    title: 'Nova Finance Platform',
    category: 'Web Development',
    description: 'A modern banking interface with advanced analytics and personalized insights.',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Financial']
  },
  {
    id: 'eco-habitat',
    title: 'Eco Habitat',
    category: 'Brand Identity',
    description: 'Complete brand identity for a sustainable housing initiative focused on eco-friendly living.',
    image: 'https://images.pexels.com/photos/2469122/pexels-photo-2469122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Branding', 'Logo Design', 'Sustainability']
  },
  {
    id: 'pulse-fitness',
    title: 'Pulse Fitness App',
    category: 'Mobile Development',
    description: 'Fitness tracking application with personalized workout plans and nutrition guidance.',
    image: 'https://images.pexels.com/photos/1103242/pexels-photo-1103242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React Native', 'Health Tech', 'UX Design']
  },
  {
    id: 'artisan-cafe',
    title: 'Artisan Café',
    category: 'Brand Identity',
    description: 'Brand identity and interior design for an upscale café chain focusing on craft coffee.',
    image: 'https://images.pexels.com/photos/302902/pexels-photo-302902.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Branding', 'Interior Design', 'Hospitality']
  },
  {
    id: 'nomad-travel',
    title: 'Nomad Travel Platform',
    category: 'Web Development',
    description: 'Travel booking platform catering to digital nomads with unique accommodation options.',
    image: 'https://images.pexels.com/photos/7625308/pexels-photo-7625308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Next.js', 'Travel Tech', 'UI Design']
  },
  {
    id: 'summit-events',
    title: 'Summit Events',
    category: 'Digital Marketing',
    description: 'Digital campaign for a technology conference with interactive landing pages and social media strategy.',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Digital Marketing', 'Event', 'Web Design']
  }
] 