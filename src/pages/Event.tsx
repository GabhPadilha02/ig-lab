import { RocketLaunch } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { ReactLogo } from "../components/ReactLogo";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{slug: string}>()
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-1">
          {slug 
          ? <Video lessonSlug={slug}/> 
          : <div className="flex-1 items-center justify-center flex flex-col">
              <div className="text-center flex m-10 w-3/4 justify-center text-gray-200 ">
                <span className="text-4xl">Acesse o <strong className="text-blue-500">menu</strong>, escolha sua aula, e embarque nessa nova jornada!</span>
                <RocketLaunch size={100} className="text-blue-500 md:w-2/3 md:relative md:bottom-5 md:left-5" />
              
              </div>
               <ReactLogo/>
            </div> 
            }
            
          <Sidebar/>
        </main>
      </div>
    </>
  )
}