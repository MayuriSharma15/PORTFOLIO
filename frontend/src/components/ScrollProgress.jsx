import { useEffect, useState } from "react";

export default function ScrollProgress() {

  const [scroll,setScroll]=useState(0);

  useEffect(()=>{

    const handleScroll=()=>{

      const total=
        document.documentElement.scrollHeight-
        document.documentElement.clientHeight;

      const progress=
        (window.scrollY/total)*100;

      setScroll(progress);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return()=>window.removeEventListener(
      "scroll",
      handleScroll
    );
  },[]);

  return(
    <div
      className="fixed top-0 left-0
      h-1 z-[1000]
      bg-gradient-to-r
      from-violet-500 to-cyan-400"
      style={{width:`${scroll}%`}}
    />
  );
}