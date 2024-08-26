import { useEffect, useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import "./App.css";


function App() {
  const [isDark, setIsDark] = useState(false);
  const [dark,setDark] = useState(false);

  const click =()=>{
          setDark(!dark)
  }

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);
  return (
    <>
      <main className="p-7 dark:bg-slate-700">
        <div className="header w-full h-10 bg-violet-200  border-violet-600  border-solid border-4 my-4 rounded-md p-2 ">
          <p className=" font-mono text-center font-extrabold">DIV</p>
        </div>

        {/* layout */}

        <div className="fixed w-10 h-10 bg-red-600 top-0"></div>
        <div className="flex   justify-center gap-[400px] bg-slate-500">
          <div className="w-16 h-16 bg-blue-400 rounded-full"></div>
          <div className="w-16 h-16 bg-blue-400 rounded-full"></div>
          <div className="w-16 h-16 bg-blue-400 rounded-full"></div>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-2">
          <div className="h-10 bg-blue-500 "></div>
          <div className="h-10 bg-blue-500 "></div>
          <div className="h-10 bg-blue-500 "></div>
        </div>

        <div className="md:block hidden ">
          <p>hey you </p>
        </div>
        <div className="max-md:block  hidden">
          /<p>you only</p>
        </div>

        <ul className="my-3 space-y-3">
          <li className="first:bg-yellow-300 p-2 rounded-md">item1</li>
          <li className="odd:bg-green-500  p-2 even:bg-red-400 rounded-md">item2</li>
          <li className="first:bg-yellow-300 odd:bg-green-500 even:bg-red-400 rounded-md  p-2">item3</li>
          <li className="first:bg-yellow-300  odd:bg-green-500 even:bg-red-400 rounded-md  p-2">item4</li>
        </ul>
        <button className="btn"> click me
        </button>

{/* dark theme */}

        <div  className="px-10 h-[250px] shadow-xl mt-10 py-10 dark:bg-slate-800 ring-1 ring-slate-900/5" >
<h3 className="font-semibold tracking-tighter  text-blue-950 text dark:text-white">this is a text</h3>
<p className="font-mono text-pretty text-green-700">lorem ipsum sdrf wef werf</p>

<button 
            onClick={toggleDarkMode}
            className="py-16"
          >{dark?    <MdDarkMode onClick={click} size={35} /> : <MdOutlineDarkMode onClick={click} size={35}/>  }
            
          </button>
        </div>





      </main>
      
      
    </>
  );
  
}


export default App;
