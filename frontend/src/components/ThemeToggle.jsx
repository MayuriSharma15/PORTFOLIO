import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {

  const [dark,setDark]=useState(true);

  const toggleTheme=()=>{

    document.documentElement.classList.toggle(
      "dark"
    );

    setDark(!dark);
  };

  return(
    <button
      onClick={toggleTheme}
      className="glass p-2 rounded-xl"
    >
      {
        dark
        ? <Sun size={20}/>
        : <Moon size={20}/>
      }
    </button>
  );
}