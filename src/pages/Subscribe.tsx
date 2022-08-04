import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import bgMokup from "../assets/bg-mokup.png"

const LOCAL_STORAGE_KEY = "users:savedUsers"

export function Subscribe() {

  const navigate = useNavigate()
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const [createSubscriber, {loading}] = useCreateSubscriberMutation()

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault()
    const isInputEmailEmpty =  email.length == 0
    const isInputNameEmpty =  name.length == 0
    if (isInputEmailEmpty || isInputNameEmpty) {
      window.alert("Campos vazios")
    } 

    await createSubscriber({
      variables: {
        name,
        email
      }
    })
    navigate('/event')
  }
  
  function loadSavedUsers() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if(saved) {
      setEmail(JSON.parse(saved))
      setName(JSON.parse(saved))
    }
  }
  useEffect(() => {
    loadSavedUsers()
  },[])
  function setTasksAndSave(newUsers: string) {
    setEmail(newUsers)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newUsers))
    setName(newUsers)
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newUsers))
  }
  

  return (
    <div className="lesson min-h-screen bg-[url('../assets/blur-react-icon.png')] bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto md:flex-col md:text-center md:max-w-[70vw]">
          <div className="max-w-[640px] md:flex md:flex-col md:items-center">
              <Logo />
              <h1 className="mt-8 text-[2.5rem] leading-tight">
                Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
              </h1>
              <p className="mt-4 text-gray-200 leading-relaxed">
                Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
              </p>
          </div>
          <div className="p-8 bg-gray-700 border border-gray-500 rounded md:w-[100vw] md:mt-8">
            <strong className="text-2xl mb-6 block">
              Inscreva-se gratuitamente
            </strong>

            <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
              <input 
                className="bg-gray-900 rounded px-5 h-14"
                type="text" 
                placeholder="Digite seu nome completo" 
                onChange={event => setName(event.target.value)}
              />
              <input 
                className="bg-gray-900 rounded px-5 h-14"
                type="email" 
                placeholder="Digite seu e-mail" 
                onChange={event => setEmail(event.target.value)}
              />      
              <button
                type="submit"
                disabled={loading}
                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                Garantir minha vaga
              </button>
            </form>

            

          </div>
      </div>
      <img className="mt-10" src={bgMokup} alt="Print" />
    </div>
  )
}