

export interface Question {
  id: number
  title: string
  description: string
  hint: string
  difficulty: string
  slug: string
}

export const questions: Question[] = [
  {
    id: 1,
    slug: 'todo-list',
    title: 'Todo List with CRUD Operations',
    description: 'Build a todo app where users can add, edit, delete, and mark tasks as completed. Include a filter to show All / Active / Completed todos.',
    hint: 'Use useState with an array of { id, text, completed, isEditing }. For editing, toggle isEditing to swap between a <span> and an <input>. Use a separate filter state ("all" | "active" | "completed") and derive the visible list with .filter().',
    difficulty: 'Medium',
  },
  {
    id: 2,
    slug: 'debounced-search',
    title: 'Debounced Search Input (API Call)',
    description: 'Create a search input that fetches results from an API but waits 500ms after the user stops typing before making the request. Show loading state while fetching.',
    hint: 'Use useEffect with the search term as a dependency. Inside, set a setTimeout of 500ms to call the API, and return a cleanup function that calls clearTimeout. This cancels the previous timer on every keystroke — only the last one fires.',
    difficulty: 'Medium',
  },
  {
    id: 3,
    slug: 'shopping-cart',
    title: 'Shopping Cart',
    description: 'Build a product list with an "Add to Cart" button. The cart should support increasing/decreasing quantity, removing items, and showing the total price.',
    hint: 'Keep products in a static array and cart items in useState as an array of { productId, quantity }. When adding, check if the item already exists — if yes, increment quantity. Derive the total with .reduce(). Bonus: use useReducer instead of useState for cart actions.',
    difficulty: 'Medium',
  },
  {
    id: 4,
    slug: 'fetch-data',
    title: 'Fetch Data with Loading, Error & Retry',
    description: 'Fetch data from a public API (e.g., JSONPlaceholder). Handle loading spinner, error message with a Retry button, and display the data in a list.',
    hint: 'Track three states: data, loading, error. Wrap the fetch in a function so you can call it on mount (useEffect) and also on Retry click. Use try/catch with async/await. Always set loading to false in a finally block.',
    difficulty: 'Easy',
  },
  {
    id: 5,
    slug: 'multi-step-form',
    title: 'Multi-Step Form with Validation',
    description: 'Build a 3-step registration form (Personal Info → Address → Review & Submit). Each step should validate before allowing "Next". Show all data on the review step.',
    hint: 'Use useState for currentStep and a single formData object. Create a separate component for each step, passing formData and a setter. Validate the current step\'s fields before incrementing the step. On the final step, display a summary of all fields.',
    difficulty: 'Hard',
  },
  {
    id: 6,
    slug: 'use-localstorage',
    title: 'Build a Custom Hook: useLocalStorage',
    description: 'Create a custom hook useLocalStorage(key, initialValue) that works like useState but persists the value in localStorage. Use it in a small demo app.',
    hint: 'Initialize state with a function that reads from localStorage (JSON.parse) or falls back to initialValue. Use useEffect to write to localStorage (JSON.stringify) whenever the value changes. Return [value, setValue] just like useState.',
    difficulty: 'Medium',
  },
  {
    id: 7,
    slug: 'accordion',
    title: 'Accordion / FAQ (Single & Multi Open)',
    description: 'Create an accordion component that supports two modes — single open (only one panel at a time) and multi open (any number of panels can be open).',
    hint: 'For single mode, store activeIndex (number | null). For multi mode, store openIndexes as a Set or array. Toggle logic: single uses === check and sets null; multi uses Set.has() and add/delete. Pass the mode as a prop.',
    difficulty: 'Easy',
  },
  {
    id: 8,
    slug: 'stopwatch',
    title: 'Stopwatch with Lap Times',
    description: 'Build a stopwatch with Start, Stop, Reset, and Lap buttons. Display the elapsed time in mm:ss:ms format and a list of recorded lap times.',
    hint: 'Use useRef for the interval ID and the start timestamp. Use useState for elapsed time (in ms) and laps array. On Start: save Date.now() - elapsed to ref, then setInterval updating elapsed = Date.now() - startRef. On Lap: push current elapsed to laps array. Format with Math.floor and padStart.',
    difficulty: 'Medium',
  },
  {
    id: 9,
    slug: 'infinite-scroll',
    title: 'Infinite Scroll / Load More',
    description: 'Display a list of items and automatically load the next page when the user scrolls near the bottom. Show a loading indicator while fetching.',
    hint: 'Use useEffect + IntersectionObserver on a sentinel <div> at the bottom of the list. When it becomes visible, fetch the next page and append to the existing data. Track currentPage and hasMore in state. Alternatively, use a "Load More" button as a simpler version.',
    difficulty: 'Hard',
  },
  {
    id: 10,
    slug: 'modal-portal',
    title: 'Modal / Popup with Portal',
    description: 'Build a reusable Modal component that renders using React Portal. It should close on overlay click, Escape key press, and have smooth enter/exit transitions.',
    hint: 'Use ReactDOM.createPortal() to render the modal into document.body. Use useEffect to add a keydown listener for "Escape" and clean it up on unmount. Prevent event bubbling on the modal content div so clicking inside doesn\'t close it (e.stopPropagation).',
    difficulty: 'Medium',
  },
]
