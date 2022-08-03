
import { Logo } from "./Logo";


export function Header() {
  

  return (
    <header className="w-full py-5 flex items-center justify-center bg-gray-700 border-b border-gray-600 md:justify-start">
      <div className="md:ml-3">
        <Logo/>
      </div>
    </header>
  )
}