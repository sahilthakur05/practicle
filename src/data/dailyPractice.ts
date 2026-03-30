export interface DailyQuestion {
  id: number
  title: string
  description: string
  type: 'js' | 'react' | 'project' | 'bonus'
  difficulty: 'Easy' | 'Medium' | 'Hard'
  input?: string
  output?: string
  constraints?: string[]
  hints?: string[]
}

export interface DailySet {
  day: number
  date: string
  title: string
  conceptsToRevise: string[]
  questions: DailyQuestion[]
}

export const dailySets: DailySet[] = [
  {
    day: 1,
    date: '2026-03-30',
    title: 'Arrays, Closures & State Management',
    conceptsToRevise: [
      'Closures & stale state — why setTimeout inside a React handler captures old values, and how useRef or functional updates fix it',
      'Race conditions in async React — cleanup functions in useEffect, abort controllers, and boolean flags to ignore stale responses',
      'Set for O(n) lookups — when to use Set over Array for performance (consecutive sequence, deduplication)',
      'Promise.all internals — how to track resolution order vs input order, and early rejection',
      'Controlled components — why value + onChange matters for dynamic forms, and how to manage arrays in state',
    ],
    questions: [
      {
        id: 1,
        title: 'Flatten Nested Object Keys',
        type: 'js',
        difficulty: 'Medium',
        description: 'Given a nested object, return a flat object where keys are dot-separated paths.',
        input: '{ user: { name: "Sahil", address: { city: "Delhi", zip: 110001 } }, age: 24 }',
        output: '{ "user.name": "Sahil", "user.address.city": "Delhi", "user.address.zip": 110001, "age": 24 }',
        constraints: ['Handle any depth of nesting', 'Arrays are NOT included — only objects and primitives'],
      },
      {
        id: 2,
        title: 'Group By and Count',
        type: 'js',
        difficulty: 'Medium',
        description: 'Given an array of objects, group them by a given key and return the count per group.',
        input: `const orders = [
  { item: "coffee", size: "M" },
  { item: "tea", size: "M" },
  { item: "coffee", size: "L" },
  { item: "coffee", size: "M" },
  { item: "tea", size: "S" },
]
groupAndCount(orders, "item")`,
        output: '{ coffee: 3, tea: 2 }',
        constraints: ['Should work with any key in the objects'],
      },
      {
        id: 3,
        title: 'Promise.all — Manual Implementation',
        type: 'js',
        difficulty: 'Medium',
        description: 'Write your own version of Promise.all called promiseAll(promises).',
        input: `promiseAll([
  Promise.resolve(1),
  new Promise(res => setTimeout(() => res(2), 100)),
  Promise.resolve(3),
])`,
        output: '[1, 2, 3]',
        constraints: [
          'Results must be in the same order as input (not resolution order)',
          'If any promise rejects, immediately reject with that reason',
          'Handle empty array → resolve with []',
        ],
      },
      {
        id: 4,
        title: 'Consecutive Sequence Finder',
        type: 'js',
        difficulty: 'Medium',
        description: 'Given an unsorted array of numbers, find the length of the longest consecutive sequence.',
        input: '[100, 4, 200, 1, 3, 2]',
        output: '4  // sequence: 1, 2, 3, 4',
        constraints: ['Must be better than O(n log n)', 'Think about using a Set'],
      },
      {
        id: 5,
        title: 'Stale Closure Bug',
        type: 'react',
        difficulty: 'Medium',
        description: `You have this component. The user clicks the button 3 times quickly. What does the alert show and why? Fix it.

function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
    setTimeout(() => {
      alert("Count is: " + count);
    }, 2000);
  };
  return <button onClick={handleClick}>Click ({count})</button>;
}`,
        constraints: [
          'What alert values appear after 3 fast clicks?',
          'Why does this happen?',
          'Write a fix using two different approaches',
        ],
      },
      {
        id: 6,
        title: 'Race Condition in useEffect',
        type: 'react',
        difficulty: 'Hard',
        description: 'You have a search input that fetches results from an API. User types "react" quickly — r, re, rea, reac, react. Five API calls fire. The response for "rea" comes back AFTER "react". Your component now shows results for "rea" instead of "react".\n\nBuild a <Search /> component that fetches from https://dummyjson.com/products/search?q={query} on input change, has a 300ms debounce, and handles the race condition so stale responses are ignored. Show a loading state.',
        constraints: [
          'Do not use a library — handle the race condition yourself',
          'Use cleanup in useEffect or an abort controller',
        ],
      },
      {
        id: 7,
        title: 'Controlled Form with Dynamic Fields',
        type: 'react',
        difficulty: 'Medium',
        description: 'Build a form where the user can add/remove "Skill" fields dynamically.\n\n- Start with one empty input\n- "Add Skill" button adds a new input\n- Each input has a "Remove" button (except if only 1 remains)\n- On submit, console.log the array of skills\n- All inputs must be controlled',
        output: '["React", "Node.js", "TypeScript"]',
      },
      {
        id: 8,
        title: 'Build a Pagination Component',
        type: 'project',
        difficulty: 'Medium',
        description: 'Fetch 100 products from https://dummyjson.com/products?limit=100 and display them with pagination.',
        constraints: [
          'Show 10 products per page',
          'Show page numbers (1, 2, 3... 10)',
          'Highlight the current/active page',
          'Previous / Next buttons (disabled on first/last page)',
          'Show product name and price only',
          'Do NOT use any pagination library',
        ],
      },
      {
        id: 9,
        title: 'Implement debounce from scratch',
        type: 'bonus',
        difficulty: 'Hard',
        description: `Write a debounce(fn, delay) function:

const log = debounce((msg) => console.log(msg), 300);
log("a");  // cancelled
log("b");  // cancelled
log("c");  // prints "c" after 300ms

Then extend it to support a flush() method that immediately executes the pending call:

log("hello");
log.flush();  // immediately prints "hello"`,
      },
    ],
  },
  {
    day: 2,
    date: '2026-03-31',
    title: 'String Manipulation, useEffect & Custom Hooks',
    conceptsToRevise: [
      'String methods — slice, substring, replace, split, join, repeat, padStart',
      'useEffect cleanup — why returning a function matters for subscriptions, timers, and API calls',
      'Custom hooks — extracting reusable stateful logic into useXxx functions',
      'Memoization — when and why to cache function results for performance',
      'Event delegation — handling events on parent vs child elements',
    ],
    questions: [
      {
        id: 1,
        title: 'String Compression',
        type: 'js',
        difficulty: 'Medium',
        description: 'Implement a function that compresses a string by counting consecutive repeated characters.',
        input: '"aaabbcddddd"',
        output: '"a3b2c1d5"',
        constraints: [
          'If compressed string is not shorter than original, return original',
          'Only lowercase letters',
        ],
      },
      {
        id: 2,
        title: 'Deep Clone an Object',
        type: 'js',
        difficulty: 'Medium',
        description: 'Write a function deepClone(obj) that creates a true deep copy of an object. Do NOT use JSON.parse/JSON.stringify.',
        input: '{ a: 1, b: { c: 2, d: [3, 4] } }',
        output: 'A new object with same structure, no shared references',
        constraints: [
          'Handle nested objects and arrays',
          'Handle null values',
          'Do not use structuredClone or JSON methods',
        ],
      },
      {
        id: 3,
        title: 'Retry with Exponential Backoff',
        type: 'js',
        difficulty: 'Hard',
        description: 'Write a function retry(fn, retries, delay) that calls an async function fn. If it fails, retry up to retries times with exponential backoff (delay doubles each time).',
        input: 'retry(fetchData, 3, 1000) // tries at 0ms, 1000ms, 2000ms, 4000ms',
        output: 'Resolves with fn() result on success, rejects with last error after all retries',
        constraints: [
          'fn is an async function that may reject',
          'Delay doubles each retry: 1000, 2000, 4000...',
          'Return the result as soon as fn succeeds',
        ],
      },
      {
        id: 4,
        title: 'Memoize Function',
        type: 'js',
        difficulty: 'Medium',
        description: 'Write a memoize(fn) function that caches results based on arguments. If the same arguments are passed again, return the cached result instead of calling fn again.',
        input: `const add = memoize((a, b) => { console.log("computing"); return a + b });
add(1, 2) // logs "computing", returns 3
add(1, 2) // returns 3 (no log)
add(2, 3) // logs "computing", returns 5`,
        constraints: [
          'Handle multiple arguments',
          'Use a Map or object for caching',
          'Consider how to create the cache key from arguments',
        ],
      },
      {
        id: 5,
        title: 'useEffect Cleanup Timer',
        type: 'react',
        difficulty: 'Medium',
        description: 'Build a component that shows a countdown timer from 10 to 0. When it reaches 0, display "Time\'s up!". The user can click a "Reset" button to restart. If the component unmounts, the timer should be properly cleaned up.\n\nAlso: add a "Pause" / "Resume" toggle.',
        constraints: [
          'Use setInterval inside useEffect',
          'Return a cleanup function',
          'Handle pause/resume without creating multiple intervals',
        ],
      },
      {
        id: 6,
        title: 'Custom Hook: useWindowSize',
        type: 'react',
        difficulty: 'Medium',
        description: 'Create a custom hook useWindowSize() that returns { width, height } of the current window. It should update when the window is resized.\n\nUse it in a component that shows "Mobile", "Tablet", or "Desktop" based on width.',
        constraints: [
          'Add and remove the resize event listener properly',
          'Debounce the resize handler (optional but bonus)',
          'Return { width: number, height: number }',
        ],
      },
      {
        id: 7,
        title: 'Tabs Component with Lazy Content',
        type: 'react',
        difficulty: 'Medium',
        description: 'Build a Tabs component with 3 tabs. Each tab shows different content. Only render the content of the active tab (don\'t just hide with CSS — actually unmount inactive tab content).\n\nTabs: "Profile", "Settings", "Notifications".\n\nEach tab content should log "mounted" on mount and "unmounted" on unmount to prove lazy rendering.',
      },
      {
        id: 8,
        title: 'Build a Star Rating Component',
        type: 'project',
        difficulty: 'Medium',
        description: 'Build a reusable star rating component.',
        constraints: [
          'Show 5 stars',
          'Click a star to set the rating',
          'Hover over stars to preview the rating (highlight stars up to hovered one)',
          'On mouse leave, revert to the selected rating',
          'Display "You rated X/5 stars" below',
          'Make it reusable — accept maxStars and onChange as props',
        ],
      },
      {
        id: 9,
        title: 'Implement throttle from scratch',
        type: 'bonus',
        difficulty: 'Hard',
        description: `Write a throttle(fn, limit) function. Unlike debounce (fires after delay), throttle fires immediately and then ignores calls for the next 'limit' ms.

const log = throttle(console.log, 1000);
log("a"); // fires immediately
log("b"); // ignored (within 1000ms)
log("c"); // ignored
// after 1000ms, next call will fire again

Bonus: Support a trailing option — if calls were ignored, fire the last one after the limit expires.`,
      },
    ],
  },
  {
    day: 3,
    date: '2026-04-01',
    title: 'Recursion, Context API & Performance',
    conceptsToRevise: [
      'Recursion — base case, recursive case, stack depth, and tail recursion',
      'React Context — createContext, Provider, useContext, and when NOT to use it',
      'useMemo vs useCallback — what they cache and when re-computation happens',
      'Reducing re-renders — React.memo, key prop, and state colocation',
      'Event loop — microtasks vs macrotasks, setTimeout vs Promise ordering',
    ],
    questions: [
      {
        id: 1,
        title: 'Flatten a Deeply Nested Array',
        type: 'js',
        difficulty: 'Medium',
        description: 'Write a function flattenDeep(arr) that flattens an array of any depth. Do NOT use Array.flat().',
        input: '[1, [2, [3, [4]], 5], [6]]',
        output: '[1, 2, 3, 4, 5, 6]',
        constraints: ['Handle any depth', 'Do not use .flat() or .flatMap()'],
      },
      {
        id: 2,
        title: 'Object Difference',
        type: 'js',
        difficulty: 'Medium',
        description: 'Write a function diff(obj1, obj2) that returns an object containing only the keys where values differ between obj1 and obj2.',
        input: `diff(
  { name: "Sahil", age: 24, city: "Delhi" },
  { name: "Sahil", age: 25, city: "Mumbai" }
)`,
        output: '{ age: 25, city: "Mumbai" }',
        constraints: ['Only compare top-level keys', 'Return values from obj2', 'Ignore keys not in both objects'],
      },
      {
        id: 3,
        title: 'Event Loop Output',
        type: 'js',
        difficulty: 'Hard',
        description: `Predict the exact output order of this code. Then explain why.

console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
Promise.resolve().then(() => setTimeout(() => console.log("4"), 0));
Promise.resolve().then(() => console.log("5"));
setTimeout(() => console.log("6"), 0);
console.log("7");`,
        constraints: ['Write the exact output order', 'Explain microtask vs macrotask queue'],
      },
      {
        id: 4,
        title: 'Curry Function',
        type: 'js',
        difficulty: 'Hard',
        description: 'Write a function curry(fn) that converts a function so it can be called one argument at a time.',
        input: `const add = curry((a, b, c) => a + b + c);
add(1)(2)(3)  // 6
add(1, 2)(3)  // 6
add(1)(2, 3)  // 6
add(1, 2, 3)  // 6`,
        output: '6 in all cases',
        constraints: ['Should work with any number of parameters', 'Support both partial and full application'],
      },
      {
        id: 5,
        title: 'Theme Switcher with Context',
        type: 'react',
        difficulty: 'Medium',
        description: 'Build a theme switcher using React Context.\n\n- Create a ThemeContext with "light" and "dark" modes\n- A toggle button in a Header component switches the theme\n- A Card component reads the theme and styles itself accordingly\n- Header and Card should be sibling components (not parent-child)\n- Do NOT pass theme as props',
        constraints: [
          'Use createContext and useContext',
          'Theme state lives in the Provider, not in any component',
          'Toggle must work from Header, display must work in Card',
        ],
      },
      {
        id: 6,
        title: 'Optimized List with React.memo',
        type: 'react',
        difficulty: 'Medium',
        description: 'You have a list of 1000 items. Each item has a "like" button. When you click "like" on one item, ALL 1000 items re-render.\n\nFix it so only the clicked item re-renders. Use console.log("render: item X") inside each item to verify.',
        constraints: [
          'Use React.memo',
          'Use useCallback for the handler',
          'Verify with console.log that only 1 item re-renders on click',
        ],
      },
      {
        id: 7,
        title: 'Build an Image Carousel',
        type: 'project',
        difficulty: 'Medium',
        description: 'Build an image carousel/slider component.',
        constraints: [
          'Show one image at a time',
          'Previous / Next buttons',
          'Dot indicators showing current position',
          'Auto-play every 3 seconds (pause on hover)',
          'Wrap around (last → first, first → last)',
          'Use these placeholder images: https://picsum.photos/600/300?random=1 through ?random=5',
        ],
      },
      {
        id: 8,
        title: 'Implement pipe and compose',
        type: 'bonus',
        difficulty: 'Hard',
        description: `Write pipe(...fns) and compose(...fns).

pipe: runs functions left to right
compose: runs functions right to left

const add1 = x => x + 1;
const double = x => x * 2;
const square = x => x * x;

pipe(add1, double, square)(2)     // (2+1=3) → (3*2=6) → (6*6=36) = 36
compose(add1, double, square)(2)  // (2*2=4) → (4*2=8) → (8+1=9) = 9`,
      },
    ],
  },
]
