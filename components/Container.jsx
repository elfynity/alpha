import { ReactNode } from "react"

export const Container = ({
    children, 
    id=undefined, 
    bgColorClass="", 
    bgColorACF="",
    pad="", 
    wrap="", 
    customClass="",
    alignment=""
  }) => {
return (
<>
  <section
    id={id || undefined}
    className={`${pad} ${bgColorClass} ${alignment}`}
    style={{backgroundColor:bgColorACF}}
  >
    <div className={`${wrap} ${customClass}`}>
      {children}
    </div>   
  </section>   
</>
)}