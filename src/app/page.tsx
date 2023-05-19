import { Button } from '@/components/Button'

export default function Home() {
  return (
    <div className="text-2xl font-bold uppercase">
      Hello
      <Button title="oi" />
      <Button title="dois" />
      <Button title="tres" />
      <div className="h-screen bg-zinc-950 p-9 text-zinc-100">
        tailwind here<div className="text-4xl font-bold">Cáśula do tempo</div>
      </div>
    </div>
  )
}
