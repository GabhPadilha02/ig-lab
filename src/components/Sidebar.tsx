
import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";
import { List, X } from "phosphor-react";
import { useState } from "react";
import classNames from "classnames";

export function Sidebar() {
  const { data } = useGetLessonsQuery()
  console.log(data)
  const [sidebarOpen, setSidebarOpen] = useState('')
  
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    setSidebarOpen(button.name);
    
  };
 
  const buttonClosed = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;
    setSidebarOpen("");
    
  };
  
  return (
    <>
      {sidebarOpen ? (
          <button 
            name="openSidebar"
            onClick={buttonClosed}
            className="hidden md:block md:flex md:items-center md:text-blue-500 md:gap-2 md:absolute md:top-5 right-4"
          >
            Aulas
            <X size={32}/>
          </button>
      ) : (
          <button 
          name="openSidebar"
          onClick={buttonHandler}
          className="hidden md:block md:flex md:items-center md:text-blue-500 md:gap-2 md:absolute md:top-5 right-4"
        >
          Aulas
          <List size={32}/>
        </button>
      )}
      
      <aside className={classNames('w-[348px] bg-gray-700 p-6 border-l border-gray-600 ',{
        'md:hidden' : !sidebarOpen,
        'md:absolute md:w-[100vw]': sidebarOpen
      })}>
        
        <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
          Cronograma de aulas
        </span>
        <div className="flex flex-col gap-8">
          {data?.lessons.map(lesson => {
            return (
              <Lesson 
                key={lesson.id}
                title={lesson.title}
                slug={lesson.slug}
                availableAt={new Date(lesson.availableAt)}
                type={lesson.lessonType}
              />
            )
          })}
          
          </div>
      </aside>
      
        
    </>
  )
}