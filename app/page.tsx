import Image from 'next/image'
import NotesList from './components/notes-list'
import TimerCounter from './components/timer-counter'
import { Suspense } from 'react'
import Spinner from './components/spinner'

export default function Home() {
  return (
    <main>
      <div className='m-10 text-center'>
        Hello World🚀
        <Suspense fallback={<Spinner color='border-green-500' />}>
          <NotesList />
        </Suspense>
        <TimerCounter />
      </div>
    </main>
  )
}
