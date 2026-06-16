// All our projects live here in one array, so BOTH the Projects page and
// the Project Detail page can use the same data. (id is used in the URL)
export const projects = [
  {
    id: 'profile-card',
    title: 'Profile Card',
    emoji: '🪪',
    description: 'A reusable profile card component built using props.',
    tech: ['React', 'Props', 'CSS'],
    details:
      'We learned how to build one reusable component and pass different data into it using props, so the same component can display many people.',
  },
  {
    id: 'todo-list',
    title: 'To-Do List',
    emoji: '✅',
    description: 'Add, delete and mark tasks done using array state.',
    tech: ['useState', 'map / filter'],
    details:
      'This taught us how to store a list in state, add items with the spread operator, remove items with filter(), and update items with map().',
  },
  {
    id: 'product-list',
    title: 'Product List',
    emoji: '🛍️',
    description: 'A product list with detail pages using React Router.',
    tech: ['React Router', 'useParams'],
    details:
      'We connected a list page to detail pages using React Router and read the product id from the URL with useParams.',
  },
  {
    id: 'dark-mode',
    title: 'Dark Mode App',
    emoji: '🌙',
    description: 'A theme switch that is saved in localStorage.',
    tech: ['useEffect', 'localStorage'],
    details:
      'We used useEffect to load the saved theme and localStorage to keep the choice even after the page is refreshed.',
  },
]
