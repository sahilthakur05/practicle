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
  score?: number
  feedbackSummary?: string
}

export interface SkillRating {
  label: string
  score: number
}

export interface DayFeedback {
  overallScore: number
  skillRatings: SkillRating[]
  patterns: string[]
  improvements: string[]
}

export interface DailySet {
  day: number
  date: string
  title: string
  conceptsToRevise: string[]
  questions: DailyQuestion[]
  feedback?: DayFeedback
}

export const dailySets: DailySet[] = [
  {
    day: 1,
    date: '2026-03-30',
    title: 'Basics — Strings, Arrays & Your First React Components',
    conceptsToRevise: [
      'String methods — split, join, reverse, toLowerCase, toUpperCase',
      'Array methods — map, filter, find, includes, indexOf, push, pop',
      'useState in React — how to store and update values in a component',
      'onClick handlers — how to run code when a button is clicked',
      'Conditional rendering — showing/hiding things based on state',
    ],
    questions: [
      {
        id: 1,
        title: 'Reverse a String',
        type: 'js',
        difficulty: 'Easy',
        description: 'Write a function that takes a string and returns it reversed.',
        input: '"hello"',
        output: '"olleh"',
        constraints: ['Do not use the built-in .reverse() method on a string directly'],
        score: 7,
        feedbackSummary: 'Good logic with for loop, but left console.logs and unnecessary commented code',
      },
      {
        id: 2,
        title: 'Find the Largest Number',
        type: 'js',
        difficulty: 'Easy',
        description: 'Write a function that takes an array of numbers and returns the largest one.',
        input: '[3, 7, 2, 9, 1]',
        output: '9',
        constraints: ['Do not use Math.max with spread — use a loop'],
        score: 4,
        feedbackSummary: 'Logic correct but returns 0 instead of max, initialized max=0 (fails for negatives), console.logs everywhere',
      },
      {
        id: 3,
        title: 'Count Vowels in a String',
        type: 'js',
        difficulty: 'Easy',
        description: 'Write a function that counts how many vowels (a, e, i, o, u) are in a given string.',
        input: '"javascript"',
        output: '3  // a, a, i',
        constraints: ['Should be case-insensitive (handle "A" and "a" both)'],
        score: 6,
        feedbackSummary: 'Missing "e" from vowels array, no toLowerCase(), console.logs, unnecessary .split("")',
      },
      {
        id: 4,
        title: 'Remove Duplicates from Array',
        type: 'js',
        difficulty: 'Easy',
        description: 'Write a function that removes duplicate values from an array and returns a new array with only unique values.',
        input: '[1, 2, 2, 3, 4, 4, 5]',
        output: '[1, 2, 3, 4, 5]',
        constraints: ['Keep the original order of elements'],
        score: 9,
        feedbackSummary: 'Done by Claude — clean for loop with .includes() + .push(), no bugs',
      },
      {
        id: 5,
        title: 'Counter — Increment, Decrement & Reset',
        type: 'react',
        difficulty: 'Easy',
        description: 'Build a counter component with three buttons: +1, -1, and Reset. Display the current count.',
        constraints: [
          'Count starts at 0',
          'Reset button sets count back to 0',
          'Display the current count value',
        ],
        score: 8,
        feedbackSummary: 'Works correctly, but stale placeholder text left in, should use functional updates',
      },
      {
        id: 6,
        title: 'Toggle Show/Hide Text',
        type: 'react',
        difficulty: 'Easy',
        description: 'Build a component with a button that toggles showing/hiding a paragraph of text. When you click the button, the text appears. Click again, it disappears.',
        constraints: [
          'Button text should change: "Show" / "Hide"',
          'Use useState to track visibility',
        ],
        score: 7,
        feedbackSummary: 'Toggle works but button text always says "Show", stale placeholder text, commented code left in',
      },
      {
        id: 7,
        title: 'Simple Todo List',
        type: 'react',
        difficulty: 'Easy',
        description: 'Build a simple todo list where you can type a task, click "Add" to add it to the list, and click "Delete" to remove it.',
        constraints: [
          'Input field + Add button',
          'Display list of todos below',
          'Each todo has a Delete button',
          'Clear input after adding',
        ],
        score: 5,
        feedbackSummary: 'Wrong setState syntax initially, no input validation, delete handler missing, stale placeholder text',
      },
      {
        id: 8,
        title: 'Profile Card Component',
        type: 'project',
        difficulty: 'Easy',
        description: 'Build a Profile Card that displays a user\'s name, bio, and a list of skills. Include an "Edit" button that switches to edit mode where you can change the name and bio.',
        constraints: [
          'Show name, bio, and skills list',
          'Edit button switches to input fields',
          'Save button saves changes and switches back to view mode',
        ],
        score: 5,
        feedbackSummary: 'Edit mode shows below view instead of replacing, Edit button always visible, variable shadowing, stale text',
      },
      {
        id: 9,
        title: 'Palindrome Checker',
        type: 'bonus',
        difficulty: 'Easy',
        description: 'Write a function that checks if a given string is a palindrome (reads the same forwards and backwards). Ignore spaces and capitalization.',
        input: '"racecar"',
        output: 'true',
        constraints: ['Ignore case: "Racecar" → true', 'Ignore spaces: "nurses run" → true'],
        score: 6,
        feedbackSummary: 'Used .trim() instead of .replace(/\\s/g,"") — fails "nurses run" test, console.logs left in',
      },
      // === EXTRA PRACTICE (based on Day 1 feedback) ===
      {
        id: 10,
        title: 'Clean & Compare Strings',
        type: 'js',
        difficulty: 'Easy',
        description: 'Given two strings, remove ALL spaces (not just edges), convert to lowercase, and check if they match. Drills .trim() vs .replace() — your Q9 weak spot.',
        input: '"Hello World", "helloworld"',
        output: 'true',
        constraints: ['Use .replace(/\\s/g, "") NOT .trim()', 'Handle uppercase: "React JS" should match "reactjs"'],
        score: 8,
        feedbackSummary: 'Correct logic using .replace() and .toLowerCase(). Minor issues: no spaces around = operator, used let instead of const for non-reassigned variables.',
      },
      {
        id: 11,
        title: 'Array Transform Pipeline',
        type: 'js',
        difficulty: 'Easy',
        description: 'Given an array of student objects {name, score}, use .filter(), .map(), and .reduce() to: 1) Get passed names, 2) Calculate average, 3) Find top student.',
        input: '[{name:"Sahil",score:85}, {name:"Amit",score:42}, ...]',
        output: '["Sahil","Priya","Raj","Neha"], avg=77.25, top="Priya"',
        constraints: ['Use .filter() + .map() for Task 1', 'Use .reduce() for Tasks 2 and 3', 'Do NOT use for loops'],
        score: 0,
        feedbackSummary: 'Not attempted — all three functions returned empty/zero. Solution added with step-by-step explanation of filter, map, and reduce.',
      },
      {
        id: 12,
        title: 'FizzBuzz',
        type: 'js',
        difficulty: 'Easy',
        description: 'For numbers 1 to n: if divisible by 3 AND 5 → "FizzBuzz", by 3 → "Fizz", by 5 → "Buzz", else the number as string. Return the array.',
        input: '15',
        output: '["1","2","Fizz","4","Buzz",...,"FizzBuzz"]',
        constraints: ['Check "both" (3 AND 5) FIRST — order matters!', 'Return an ARRAY of strings, not just print', 'Make sure to actually RETURN the result (your Q2 bug)'],
        score: 4,
        feedbackSummary: 'Used console.log instead of arr.push(), missing else-if so all conditions run, pushed numbers instead of strings — logic understood but not wired up correctly.',
      },
      {
        id: 13,
        title: 'Conditional Card (View/Edit/Delete)',
        type: 'react',
        difficulty: 'Easy',
        description: 'Build a product card with 3 modes: View (shows text + Edit/Delete buttons), Edit (shows inputs + Save/Cancel), Delete confirm (shows "Are you sure?" + Yes/No). Only ONE mode shows at a time.',
        constraints: ['Use ternary to REPLACE content, not show both (your Q8 bug)', 'Only show buttons relevant to current mode', 'Cancel in edit should NOT save changes'],
        score: 3,
        feedbackSummary: 'Default mode set to "delete", used && instead of ternary so product info shows in all modes, edit inputs not connected to state, delete mode is just a string, buttons have no handlers, typo "cancle".',
      },
      {
        id: 14,
        title: 'Editable Todo List',
        type: 'react',
        difficulty: 'Medium',
        description: 'Build a todo list with Add, Delete, AND inline Edit. Click edit on a todo → text becomes input → type new text → save. Combines your Q7 + Q8 weaknesses.',
        constraints: ['Validate: no empty todos', 'Delete with .filter()', 'Edit with .map() to update one item', 'Use unique IDs (Date.now()), not array index'],
        score: 4,
        feedbackSummary: 'Add and delete work but used string[] instead of objects, edit function is empty, used alert() for validation, console.log left in code, Fragment key issue, unstyled buttons.',
      },
      {
        id: 15,
        title: 'Character Frequency Counter',
        type: 'js',
        difficulty: 'Easy',
        description: 'Count how many times each character appears in a string, then find the most frequent. Uses objects as counters — builds on Q3.',
        input: '"javascript"',
        output: '{ j:1, a:2, v:1, ... }, mostFrequent → "a"',
        constraints: ['Ignore spaces', 'Convert to lowercase first', 'Use an object to count: freq[char] = (freq[char] || 0) + 1'],
        score: 1,
        feedbackSummary: 'Attempted but wrong regex syntax, returns empty object. mostFrequent not attempted. Solution added with counting pattern explanation.',
      },
    ],
    feedback: {
      overallScore: 6.3,
      skillRatings: [
        { label: 'Approach / Thinking', score: 7 },
        { label: 'String Methods', score: 6 },
        { label: 'Array Methods', score: 5 },
        { label: 'Syntax / Typos', score: 5 },
        { label: 'useState', score: 7 },
        { label: 'JSX / Rendering', score: 5 },
        { label: 'Code Cleanup', score: 3 },
        { label: 'Edge Cases', score: 5 },
      ],
      patterns: [
        'Console.log statements left in EVERY solution — always remove before finalizing',
        'Correct approach but small implementation bugs (return 0, missing "e", .trim() vs .replace())',
        'Stale placeholder text not cleaned up after implementing ("doesn\'t work yet" still showing)',
        'Edit/view mode not properly switching — inputs added below instead of replacing content (Q8)',
        'Variable shadowing — using same name for state and .map() parameter (Q8)',
      ],
      improvements: [
        'Remove all console.logs before marking done — this is your #1 recurring issue',
        'Always test your return value — does it actually return the right thing? (Q2 returned 0)',
        'Use .replace(/\\s/g, "") to remove ALL spaces, not .trim() which only removes edges',
        'Use ternary {isEditing ? <input/> : <text/>} to REPLACE content, not show both',
        'Clean up stale placeholder text and commented-out code after implementing',
        'Use functional updates for setState: setCount(prev => prev + 1)',
      ],
    },
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
  {
    day: 4,
    date: '2026-04-02',
    title: 'Linked Lists, useReducer & State Machines',
    conceptsToRevise: [
      'Linked list basics — nodes, pointers, traversal, and when to use them over arrays',
      'useReducer — dispatch, action types, reducer pattern, and when to prefer it over useState',
      'State machines — modeling UI states explicitly to prevent impossible states',
      'Prototypal inheritance — prototype chain, Object.create, and how class syntax maps to prototypes',
      'Error boundaries — componentDidCatch, getDerivedStateFromError, and fallback UIs',
    ],
    questions: [
      {
        id: 1,
        title: 'Implement a Linked List',
        type: 'js',
        difficulty: 'Medium',
        description: 'Create a LinkedList class with methods: append(value), prepend(value), delete(value), find(value), and toArray().',
        input: `const list = new LinkedList();
list.append(1); list.append(2); list.append(3);
list.prepend(0);
list.delete(2);
list.toArray();`,
        output: '[0, 1, 3]',
        constraints: ['Each node should have value and next properties', 'Handle edge cases: delete head, delete non-existent value'],
      },
      {
        id: 2,
        title: 'Event Emitter',
        type: 'js',
        difficulty: 'Medium',
        description: 'Implement a simple EventEmitter class with on(event, callback), off(event, callback), emit(event, ...args), and once(event, callback) methods.',
        input: `const emitter = new EventEmitter();
const greet = (name) => console.log("Hello " + name);
emitter.on("greet", greet);
emitter.emit("greet", "Sahil"); // logs "Hello Sahil"
emitter.off("greet", greet);
emitter.emit("greet", "Sahil"); // nothing happens`,
        constraints: ['Support multiple listeners per event', 'once() should auto-remove after first call', 'off() should remove a specific listener'],
      },
      {
        id: 3,
        title: 'Deep Equal',
        type: 'js',
        difficulty: 'Hard',
        description: 'Write a function deepEqual(a, b) that checks if two values are deeply equal. Handles objects, arrays, null, undefined, and primitives.',
        input: `deepEqual({ a: [1, 2], b: { c: 3 } }, { a: [1, 2], b: { c: 3 } })`,
        output: 'true',
        constraints: [
          'Handle nested objects and arrays',
          'null === null but null !== undefined',
          'Order of keys should not matter',
          'Do NOT use JSON.stringify',
        ],
      },
      {
        id: 4,
        title: 'LRU Cache',
        type: 'js',
        difficulty: 'Hard',
        description: 'Implement an LRU (Least Recently Used) Cache with a fixed capacity. When the cache is full and a new item is added, remove the least recently used item.',
        input: `const cache = new LRUCache(3);
cache.put("a", 1); cache.put("b", 2); cache.put("c", 3);
cache.get("a"); // returns 1 (now "a" is most recent)
cache.put("d", 4); // evicts "b" (least recently used)
cache.get("b"); // returns -1 (not found)`,
        output: '1 for get("a"), -1 for get("b")',
        constraints: ['get and put should both be O(1)', 'Use a Map to maintain insertion order'],
      },
      {
        id: 5,
        title: 'Todo App with useReducer',
        type: 'react',
        difficulty: 'Medium',
        description: 'Build a Todo app using useReducer instead of useState.\n\nActions: ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO\n\nEach todo: { id, text, completed }',
        constraints: [
          'Define a proper reducer with a switch statement',
          'Use dispatch for all state changes',
          'Show completed count vs total',
          'Support inline editing (click text to edit)',
        ],
      },
      {
        id: 6,
        title: 'Multi-Step Wizard with State Machine',
        type: 'react',
        difficulty: 'Hard',
        description: 'Build a 3-step form wizard where navigation is controlled by a state machine.\n\nSteps: "info" → "review" → "confirm"\n\nOnly allow valid transitions:\n- info → review (only if name is filled)\n- review → info (back)\n- review → confirm (submit)\n- confirm → info (start over)\n\nDo NOT allow jumping directly from info to confirm.',
        constraints: [
          'Model states and transitions explicitly',
          'Use useReducer with transition logic',
          'Disable buttons for invalid transitions',
        ],
      },
      {
        id: 7,
        title: 'Build a Drag & Drop Sortable List',
        type: 'project',
        difficulty: 'Hard',
        description: 'Build a sortable list where items can be reordered by drag and drop using native HTML5 drag events.',
        constraints: [
          'Use onDragStart, onDragOver, onDrop events',
          'Show a visual indicator of where the item will be dropped',
          'Support at least 5 items',
          'No external libraries',
          'Show the current order as JSON below the list',
        ],
      },
      {
        id: 8,
        title: 'Implement Array.prototype methods from scratch',
        type: 'bonus',
        difficulty: 'Hard',
        description: `Implement your own versions of these Array methods (don't use the built-in ones):

1. myMap(callback) — like Array.map
2. myFilter(callback) — like Array.filter
3. myReduce(callback, initialValue) — like Array.reduce

Example:
[1,2,3].myMap(x => x * 2) // [2, 4, 6]
[1,2,3,4].myFilter(x => x % 2 === 0) // [2, 4]
[1,2,3,4].myReduce((acc, x) => acc + x, 0) // 10

Bonus: Also implement myFind and myEvery.`,
      },
    ],
  },
  {
    day: 5,
    date: '2026-04-03',
    title: 'Async Patterns, Refs & Portals',
    conceptsToRevise: [
      'async/await — error handling with try/catch, parallel execution, and sequential chaining',
      'useRef — mutable refs, DOM refs, and why ref changes don\'t trigger re-renders',
      'forwardRef — passing refs to child components and useImperativeHandle',
      'Portals — rendering outside the DOM hierarchy with createPortal',
      'Generators — function*, yield, iterators, and lazy evaluation',
    ],
    questions: [
      {
        id: 1,
        title: 'Async Task Queue',
        type: 'js',
        difficulty: 'Hard',
        description: 'Build an AsyncQueue class that processes async tasks with a concurrency limit. Only N tasks should run at the same time.',
        input: `const queue = new AsyncQueue(2); // max 2 concurrent
queue.add(() => fetch("/api/1"));
queue.add(() => fetch("/api/2"));
queue.add(() => fetch("/api/3")); // waits until one of the first two finishes
queue.add(() => fetch("/api/4"));`,
        constraints: [
          'Tasks beyond the limit should wait in a queue',
          'When a task finishes, the next queued task starts immediately',
          'Return a promise that resolves with the task result',
        ],
      },
      {
        id: 2,
        title: 'Promise.allSettled Implementation',
        type: 'js',
        difficulty: 'Medium',
        description: 'Implement your own promiseAllSettled(promises) that returns an array of results, each with status "fulfilled" or "rejected".',
        input: `promiseAllSettled([
  Promise.resolve(1),
  Promise.reject("error"),
  Promise.resolve(3)
])`,
        output: `[
  { status: "fulfilled", value: 1 },
  { status: "rejected", reason: "error" },
  { status: "fulfilled", value: 3 }
]`,
        constraints: ['Never rejects — always resolves with the array', 'Results must be in input order'],
      },
      {
        id: 3,
        title: 'Range Generator',
        type: 'js',
        difficulty: 'Medium',
        description: 'Write a generator function range(start, end, step) that yields numbers from start to end (exclusive) with the given step.',
        input: `for (const n of range(0, 10, 3)) console.log(n);`,
        output: '0, 3, 6, 9',
        constraints: ['Use function* syntax', 'Default step to 1', 'Handle negative steps for counting down'],
      },
      {
        id: 4,
        title: 'Pub/Sub Pattern',
        type: 'js',
        difficulty: 'Medium',
        description: 'Implement a publish-subscribe system with subscribe(topic, callback), publish(topic, data), and unsubscribe(topic, callback). Support wildcard subscriptions with "*".',
        input: `const ps = new PubSub();
ps.subscribe("user.*", (data) => console.log(data));
ps.publish("user.login", { name: "Sahil" }); // triggers wildcard
ps.publish("user.logout", {}); // triggers wildcard
ps.publish("order.created", {}); // does NOT trigger`,
        constraints: ['Exact topic matching', 'Wildcard matching with *', 'Unsubscribe should remove specific callback only'],
      },
      {
        id: 5,
        title: 'Click Outside Hook',
        type: 'react',
        difficulty: 'Medium',
        description: 'Create a custom hook useClickOutside(ref, callback) that calls the callback when the user clicks outside the referenced element.\n\nUse it to build a dropdown that closes when clicking outside.',
        constraints: [
          'Use useRef for the element reference',
          'Add/remove event listener in useEffect',
          'Make sure it works with nested elements inside the ref',
        ],
      },
      {
        id: 6,
        title: 'Focus Management with useRef',
        type: 'react',
        difficulty: 'Medium',
        description: 'Build a PIN input component with 4 separate input fields.\n\n- Each input accepts only 1 digit\n- After typing a digit, focus automatically moves to the next input\n- Pressing Backspace on an empty input moves focus to the previous input\n- Pasting a 4-digit code fills all inputs',
        constraints: [
          'Use an array of useRef for the 4 inputs',
          'Handle paste event to fill all fields',
          'Display the complete PIN below when all 4 digits are entered',
        ],
      },
      {
        id: 7,
        title: 'Build a Toast/Notification System',
        type: 'project',
        difficulty: 'Medium',
        description: 'Build a toast notification system using React Portals.',
        constraints: [
          'Toasts render outside the main app DOM using createPortal',
          'Support types: success, error, warning, info (with colors)',
          'Auto-dismiss after 3 seconds with a progress bar',
          'Manual dismiss with X button',
          'Stack multiple toasts (newest on top)',
          'Animate entry and exit',
        ],
      },
      {
        id: 8,
        title: 'Implement Promise.race and Promise.any',
        type: 'bonus',
        difficulty: 'Hard',
        description: `Implement both:

1. promiseRace(promises) — resolves/rejects with the first settled promise
2. promiseAny(promises) — resolves with first fulfilled, rejects with AggregateError if all reject

const fast = new Promise(res => setTimeout(() => res("fast"), 100));
const slow = new Promise(res => setTimeout(() => res("slow"), 500));
const fail = new Promise((_, rej) => setTimeout(() => rej("fail"), 200));

promiseRace([slow, fast, fail]) // "fast" (first settled)
promiseAny([fail, fast, slow])  // "fast" (first fulfilled)`,
      },
    ],
  },
  {
    day: 6,
    date: '2026-04-04',
    title: 'Trees, Suspense & Data Fetching Patterns',
    conceptsToRevise: [
      'Tree traversal — DFS (pre/in/post order), BFS, and when to use each',
      'React Suspense — lazy loading components with React.lazy and Suspense boundaries',
      'Data fetching patterns — fetch-on-render, fetch-then-render, render-as-you-fetch',
      'AbortController — cancelling fetch requests and cleaning up in useEffect',
      'WeakMap & WeakSet — garbage collection, private data, and caching patterns',
    ],
    questions: [
      {
        id: 1,
        title: 'Binary Tree from Array',
        type: 'js',
        difficulty: 'Medium',
        description: 'Given a sorted array, build a balanced Binary Search Tree. Implement insert, search, and inOrderTraversal.',
        input: '[1, 2, 3, 4, 5, 6, 7]',
        output: 'Balanced BST with root 4, inOrder: [1,2,3,4,5,6,7]',
        constraints: ['Find the middle element as root', 'Recursively build left and right subtrees', 'inOrderTraversal should return sorted array'],
      },
      {
        id: 2,
        title: 'DOM Tree Traversal',
        type: 'js',
        difficulty: 'Medium',
        description: 'Write two functions: getElementsByClassName(root, className) and getElementsByTagName(root, tagName) that work like their native counterparts but implemented from scratch using recursion.',
        input: 'A DOM tree (use document.body as root)',
        output: 'Array of matching elements',
        constraints: ['Use recursion to traverse child nodes', 'Do NOT use querySelectorAll or native getElementsBy*', 'Handle elements with multiple classes'],
      },
      {
        id: 3,
        title: 'JSON Path Resolver',
        type: 'js',
        difficulty: 'Hard',
        description: 'Write a function resolve(obj, path) that gets a value from a nested object using a dot-notation string path. Also write set(obj, path, value).',
        input: `const data = { user: { address: { city: "Delhi" } } };
resolve(data, "user.address.city") // "Delhi"
set(data, "user.address.zip", 110001)
resolve(data, "user.address.zip") // 110001`,
        constraints: ['Handle missing intermediate keys gracefully (return undefined)', 'set should create intermediate objects if they don\'t exist', 'Support array indices in path: "users.0.name"'],
      },
      {
        id: 4,
        title: 'Object.freeze Deep',
        type: 'js',
        difficulty: 'Medium',
        description: 'Write a function deepFreeze(obj) that recursively freezes an object and all its nested objects and arrays. Verify that mutations throw in strict mode.',
        input: `const obj = { a: 1, b: { c: [2, 3] } };
deepFreeze(obj);
obj.b.c.push(4); // should throw`,
        constraints: ['Handle circular references (don\'t infinite loop)', 'Freeze arrays too', 'Use Object.freeze internally'],
      },
      {
        id: 5,
        title: 'Lazy Loaded Routes with Suspense',
        type: 'react',
        difficulty: 'Medium',
        description: 'Create a mini app with 3 routes: Home, About, Contact. Each route component should be lazy loaded using React.lazy.\n\nWrap them in a Suspense boundary with a custom loading spinner. Add a navigation bar.',
        constraints: [
          'Use React.lazy(() => import(...))',
          'Show a loading fallback during chunk load',
          'Each page component should be in its own file conceptually (can be in same file for demo)',
        ],
      },
      {
        id: 6,
        title: 'Data Fetching with Loading/Error States',
        type: 'react',
        difficulty: 'Medium',
        description: 'Build a generic useFetch(url) custom hook that returns { data, loading, error, refetch }.\n\nUse it to display a list of users from https://jsonplaceholder.typicode.com/users.\n\nAdd a "Refetch" button and show loading/error states.',
        constraints: [
          'Cancel previous request if url changes (AbortController)',
          'Handle network errors gracefully',
          'refetch function should re-trigger the fetch',
          'Show skeleton/placeholder during loading',
        ],
      },
      {
        id: 7,
        title: 'Build a File Explorer Tree',
        type: 'project',
        difficulty: 'Hard',
        description: 'Build a collapsible file explorer tree component.',
        constraints: [
          'Render a nested folder/file structure from JSON data',
          'Click folder to expand/collapse',
          'Show different icons for folders vs files',
          'Highlight the selected file',
          'Support at least 3 levels of nesting',
          'Add "New File" and "New Folder" buttons',
        ],
      },
      {
        id: 8,
        title: 'Implement JSON.stringify from scratch',
        type: 'bonus',
        difficulty: 'Hard',
        description: `Write myStringify(value) that converts a JS value to JSON string.

Handle: strings, numbers, booleans, null, arrays, objects.
Ignore: undefined, functions, symbols (skip those keys in objects).

myStringify({ a: 1, b: "hello", c: [true, null] })
// '{"a":1,"b":"hello","c":[true,null]}'

myStringify(undefined) // undefined (not a string)

Bonus: support an indent parameter for pretty printing.`,
      },
    ],
  },
  {
    day: 7,
    date: '2026-04-05',
    title: 'Graphs, Error Handling & Testing Patterns',
    conceptsToRevise: [
      'Graph representation — adjacency list vs adjacency matrix, directed vs undirected',
      'BFS/DFS on graphs — shortest path, cycle detection, topological sort',
      'Error handling in JS — custom errors, error types, async error handling patterns',
      'React error boundaries — class component approach, recovery patterns',
      'Testing mindset — what to test, AAA pattern, mocking, and test-driven development',
    ],
    questions: [
      {
        id: 1,
        title: 'Graph BFS & DFS',
        type: 'js',
        difficulty: 'Hard',
        description: 'Implement a Graph class with addVertex, addEdge, BFS(start), and DFS(start). Use adjacency list representation.',
        input: `const g = new Graph();
g.addVertex("A"); g.addVertex("B"); g.addVertex("C"); g.addVertex("D");
g.addEdge("A", "B"); g.addEdge("A", "C"); g.addEdge("B", "D"); g.addEdge("C", "D");
g.bfs("A"); g.dfs("A");`,
        output: 'BFS: [A, B, C, D], DFS: [A, B, D, C] (or similar valid order)',
        constraints: ['Use adjacency list (Map or object)', 'Track visited nodes', 'BFS uses a queue, DFS uses recursion or stack'],
      },
      {
        id: 2,
        title: 'Custom Error Classes',
        type: 'js',
        difficulty: 'Medium',
        description: 'Create a hierarchy of custom error classes: AppError (base), ValidationError, NotFoundError, AuthError. Each should have a statusCode and a toJSON() method.',
        input: `throw new ValidationError("Email is required", { field: "email" })`,
        output: '{ name: "ValidationError", message: "Email is required", statusCode: 400, field: "email" }',
        constraints: [
          'Extend from Error properly (correct prototype chain)',
          'instanceof checks should work: err instanceof AppError === true',
          'Include stack trace',
        ],
      },
      {
        id: 3,
        title: 'Rate Limiter',
        type: 'js',
        difficulty: 'Hard',
        description: 'Implement a rate limiter using the sliding window algorithm. rateLimiter(maxRequests, windowMs) returns a function that returns true if the request is allowed, false if rate limited.',
        input: `const limiter = rateLimiter(3, 1000); // 3 requests per second
limiter() // true
limiter() // true
limiter() // true
limiter() // false (rate limited)
// after 1 second...
limiter() // true again`,
        constraints: ['Use sliding window (not fixed window)', 'Clean up old timestamps to prevent memory leak', 'Should be accurate across window boundaries'],
      },
      {
        id: 4,
        title: 'Topological Sort',
        type: 'js',
        difficulty: 'Hard',
        description: 'Given a list of tasks with dependencies, return a valid execution order using topological sort.',
        input: `topSort({
  A: [],
  B: ["A"],
  C: ["A"],
  D: ["B", "C"],
  E: ["D"]
})`,
        output: '["A", "B", "C", "D", "E"] or ["A", "C", "B", "D", "E"]',
        constraints: ['Detect circular dependencies and throw an error', 'Use Kahn\'s algorithm (BFS) or DFS-based approach', 'Return any valid ordering'],
      },
      {
        id: 5,
        title: 'Error Boundary Component',
        type: 'react',
        difficulty: 'Medium',
        description: 'Build a reusable ErrorBoundary component.\n\n- Catches render errors in children\n- Shows a fallback UI with the error message\n- Has a "Try Again" button that resets the error state\n- Accepts a custom fallback prop\n\nCreate a BuggyComponent that throws an error after a button click to test it.',
        constraints: [
          'Use componentDidCatch and getDerivedStateFromError',
          'Must be a class component (error boundaries don\'t work with hooks)',
          'Support both default and custom fallback UI',
        ],
      },
      {
        id: 6,
        title: 'Undo/Redo System',
        type: 'react',
        difficulty: 'Hard',
        description: 'Build a text editor with undo/redo functionality.\n\n- A textarea for input\n- Undo button (Ctrl+Z also works)\n- Redo button (Ctrl+Y also works)\n- Show the history stack visually',
        constraints: [
          'Maintain a history stack and a pointer to current position',
          'New edits after undo should clear the redo history',
          'Debounce history entries (don\'t save every keystroke, save after 500ms pause)',
          'Keyboard shortcuts should work',
        ],
      },
      {
        id: 7,
        title: 'Build a Kanban Board',
        type: 'project',
        difficulty: 'Hard',
        description: 'Build a simple Kanban board with 3 columns: Todo, In Progress, Done.',
        constraints: [
          'Add new cards to the Todo column',
          'Move cards between columns using buttons (→ and ←)',
          'Edit card text inline',
          'Delete cards with confirmation',
          'Persist board state in localStorage',
          'Show card count per column',
        ],
      },
      {
        id: 8,
        title: 'Implement a Virtual DOM Differ',
        type: 'bonus',
        difficulty: 'Hard',
        description: `Implement a simplified virtual DOM diff algorithm.

Represent vnodes as: { tag, props, children }

Write:
1. createElement(vnode) — creates real DOM from vnode
2. diff(oldVNode, newVNode) — returns a list of patches
3. patch(dom, patches) — applies patches to real DOM

const old = { tag: "div", props: { id: "app" }, children: [
  { tag: "h1", props: {}, children: ["Hello"] }
]};
const next = { tag: "div", props: { id: "app" }, children: [
  { tag: "h1", props: {}, children: ["World"] }
]};
const patches = diff(old, next);
patch(document.getElementById("app"), patches);`,
      },
    ],
  },
]
