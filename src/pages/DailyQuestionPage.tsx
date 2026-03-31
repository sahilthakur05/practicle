import { useParams, Link } from 'react-router-dom'
import { dailySets } from '../data/dailyPractice'

// Day 1
import Day1_FlattenNestedObject from './daily/Day1_FlattenNestedObject'
import Day1_GroupByCount from './daily/Day1_GroupByCount'
import Day1_PromiseAll from './daily/Day1_PromiseAll'
import Day1_ConsecutiveSequence from './daily/Day1_ConsecutiveSequence'
import Day1_StaleClosure from './daily/Day1_StaleClosure'
import Day1_RaceCondition from './daily/Day1_RaceCondition'
import Day1_DynamicFields from './daily/Day1_DynamicFields'
import Day1_Pagination from './daily/Day1_Pagination'
import Day1_Debounce from './daily/Day1_Debounce'

// Day 2
import Day2_StringCompression from './daily/Day2_StringCompression'
import Day2_DeepClone from './daily/Day2_DeepClone'
import Day2_RetryBackoff from './daily/Day2_RetryBackoff'
import Day2_Memoize from './daily/Day2_Memoize'
import Day2_CountdownTimer from './daily/Day2_CountdownTimer'
import Day2_UseWindowSize from './daily/Day2_UseWindowSize'
import Day2_TabsComponent from './daily/Day2_TabsComponent'
import Day2_StarRating from './daily/Day2_StarRating'
import Day2_Throttle from './daily/Day2_Throttle'

// Day 3
import Day3_FlattenArray from './daily/Day3_FlattenArray'
import Day3_ObjectDiff from './daily/Day3_ObjectDiff'
import Day3_EventLoop from './daily/Day3_EventLoop'
import Day3_Curry from './daily/Day3_Curry'
import Day3_ThemeSwitcher from './daily/Day3_ThemeSwitcher'
import Day3_OptimizedList from './daily/Day3_OptimizedList'
import Day3_ImageCarousel from './daily/Day3_ImageCarousel'
import Day3_PipeCompose from './daily/Day3_PipeCompose'

// Day 4
import Day4_LinkedList from './daily/Day4_LinkedList'
import Day4_EventEmitter from './daily/Day4_EventEmitter'
import Day4_DeepEqual from './daily/Day4_DeepEqual'
import Day4_LRUCache from './daily/Day4_LRUCache'
import Day4_TodoReducer from './daily/Day4_TodoReducer'
import Day4_StateMachine from './daily/Day4_StateMachine'
import Day4_DragDropList from './daily/Day4_DragDropList'
import Day4_ArrayMethods from './daily/Day4_ArrayMethods'

// Day 5
import Day5_AsyncQueue from './daily/Day5_AsyncQueue'
import Day5_PromiseAllSettled from './daily/Day5_PromiseAllSettled'
import Day5_RangeGenerator from './daily/Day5_RangeGenerator'
import Day5_PubSub from './daily/Day5_PubSub'
import Day5_ClickOutside from './daily/Day5_ClickOutside'
import Day5_PinInput from './daily/Day5_PinInput'
import Day5_ToastSystem from './daily/Day5_ToastSystem'
import Day5_PromiseRaceAny from './daily/Day5_PromiseRaceAny'

// Day 6
import Day6_BinaryTree from './daily/Day6_BinaryTree'
import Day6_DOMTraversal from './daily/Day6_DOMTraversal'
import Day6_JSONPath from './daily/Day6_JSONPath'
import Day6_DeepFreeze from './daily/Day6_DeepFreeze'
import Day6_LazySuspense from './daily/Day6_LazySuspense'
import Day6_UseFetch from './daily/Day6_UseFetch'
import Day6_FileExplorer from './daily/Day6_FileExplorer'
import Day6_JSONStringify from './daily/Day6_JSONStringify'

// Day 7
import Day7_GraphBFSDFS from './daily/Day7_GraphBFSDFS'
import Day7_CustomErrors from './daily/Day7_CustomErrors'
import Day7_RateLimiter from './daily/Day7_RateLimiter'
import Day7_TopologicalSort from './daily/Day7_TopologicalSort'
import Day7_ErrorBoundary from './daily/Day7_ErrorBoundary'
import Day7_UndoRedo from './daily/Day7_UndoRedo'
import Day7_KanbanBoard from './daily/Day7_KanbanBoard'
import Day7_VirtualDOM from './daily/Day7_VirtualDOM'

const componentMap: Record<string, React.FC> = {
  '1-1': Day1_FlattenNestedObject,
  '1-2': Day1_GroupByCount,
  '1-3': Day1_PromiseAll,
  '1-4': Day1_ConsecutiveSequence,
  '1-5': Day1_StaleClosure,
  '1-6': Day1_RaceCondition,
  '1-7': Day1_DynamicFields,
  '1-8': Day1_Pagination,
  '1-9': Day1_Debounce,
  '2-1': Day2_StringCompression,
  '2-2': Day2_DeepClone,
  '2-3': Day2_RetryBackoff,
  '2-4': Day2_Memoize,
  '2-5': Day2_CountdownTimer,
  '2-6': Day2_UseWindowSize,
  '2-7': Day2_TabsComponent,
  '2-8': Day2_StarRating,
  '2-9': Day2_Throttle,
  '3-1': Day3_FlattenArray,
  '3-2': Day3_ObjectDiff,
  '3-3': Day3_EventLoop,
  '3-4': Day3_Curry,
  '3-5': Day3_ThemeSwitcher,
  '3-6': Day3_OptimizedList,
  '3-7': Day3_ImageCarousel,
  '3-8': Day3_PipeCompose,
  '4-1': Day4_LinkedList,
  '4-2': Day4_EventEmitter,
  '4-3': Day4_DeepEqual,
  '4-4': Day4_LRUCache,
  '4-5': Day4_TodoReducer,
  '4-6': Day4_StateMachine,
  '4-7': Day4_DragDropList,
  '4-8': Day4_ArrayMethods,
  '5-1': Day5_AsyncQueue,
  '5-2': Day5_PromiseAllSettled,
  '5-3': Day5_RangeGenerator,
  '5-4': Day5_PubSub,
  '5-5': Day5_ClickOutside,
  '5-6': Day5_PinInput,
  '5-7': Day5_ToastSystem,
  '5-8': Day5_PromiseRaceAny,
  '6-1': Day6_BinaryTree,
  '6-2': Day6_DOMTraversal,
  '6-3': Day6_JSONPath,
  '6-4': Day6_DeepFreeze,
  '6-5': Day6_LazySuspense,
  '6-6': Day6_UseFetch,
  '6-7': Day6_FileExplorer,
  '6-8': Day6_JSONStringify,
  '7-1': Day7_GraphBFSDFS,
  '7-2': Day7_CustomErrors,
  '7-3': Day7_RateLimiter,
  '7-4': Day7_TopologicalSort,
  '7-5': Day7_ErrorBoundary,
  '7-6': Day7_UndoRedo,
  '7-7': Day7_KanbanBoard,
  '7-8': Day7_VirtualDOM,
}

const difficultyColor: Record<string, string> = {
  Easy: '#22c55e',
  Medium: '#f59e0b',
  Hard: '#ef4444',
}

const typeColor: Record<string, string> = {
  js: '#f59e0b',
  react: '#3b82f6',
  project: '#8b5cf6',
  bonus: '#ef4444',
}

const typeLabel: Record<string, string> = {
  js: 'JavaScript',
  react: 'React',
  project: 'Mini Project',
  bonus: 'Bonus Challenge',
}

export default function DailyQuestionPage() {
  const { day, questionId } = useParams()
  const dayNum = Number(day)
  const qId = Number(questionId)

  const set = dailySets.find(s => s.day === dayNum)
  const question = set?.questions.find(q => q.id === qId)

  if (!set || !question) {
    return (
      <div className="page">
        <h2>Question not found</h2>
        <Link to={`/daily/${day}`}>← Back to Day {day}</Link>
      </div>
    )
  }

  const key = `${dayNum}-${qId}`
  const Component = componentMap[key]

  return (
    <div className="page">
      <Link to={`/daily/${dayNum}`} className="back-link">← Back to Day {dayNum}</Link>

      <div className="page-header">
        <span className="badge">Q{qId}</span>
        <h1>{question.title}</h1>
        <span
          className="difficulty"
          style={{ color: difficultyColor[question.difficulty], borderColor: difficultyColor[question.difficulty] }}
        >
          {question.difficulty}
        </span>
      </div>

      <div style={{ marginBottom: 16 }}>
        <span
          style={{
            display: 'inline-block',
            padding: '2px 10px',
            borderRadius: 12,
            fontSize: 12,
            fontWeight: 600,
            background: `${typeColor[question.type]}20`,
            color: typeColor[question.type],
          }}
        >
          {typeLabel[question.type]}
        </span>
      </div>

      <p className="description">{question.description}</p>

      {question.input && (
        <div style={{ marginBottom: 12 }}>
          <strong style={{ color: '#888', fontSize: 13 }}>Input:</strong>
          <pre style={{ background: '#1a1a2e', color: '#e0e0e0', padding: 12, borderRadius: 8, marginTop: 4, whiteSpace: 'pre-wrap' }}>
            {question.input}
          </pre>
        </div>
      )}

      {question.output && (
        <div style={{ marginBottom: 12 }}>
          <strong style={{ color: '#888', fontSize: 13 }}>Expected Output:</strong>
          <pre style={{ background: '#1a1a2e', color: '#4ecca3', padding: 12, borderRadius: 8, marginTop: 4, whiteSpace: 'pre-wrap' }}>
            {question.output}
          </pre>
        </div>
      )}

      {question.constraints && question.constraints.length > 0 && (
        <div style={{ marginBottom: 16 }}>
          <strong style={{ color: '#888', fontSize: 13 }}>Constraints:</strong>
          <ul style={{ color: '#ccc', paddingLeft: 20, marginTop: 4 }}>
            {question.constraints.map((c, i) => <li key={i} style={{ marginBottom: 4 }}>{c}</li>)}
          </ul>
        </div>
      )}

      <hr className="divider" />

      <h3>Your Solution:</h3>
      <div className="solution-area">
        {Component ? <Component /> : <p style={{ color: '#888' }}>No solution component found for this question.</p>}
      </div>
    </div>
  )
}
