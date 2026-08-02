import { ReactNode } from "react"

export const Container = ({
    children, 
    id=undefined, 
    bgColorClass="", 
    bgColorACF="",
    pad="content-padding-m", 
    wrap="wrapper", 
    customClass=""
  }) => {
return (
<>
  <section
    id={id || undefined}
    className={`${pad} ${bgColorClass}`}
    style={{backgroundColor:bgColorACF}}
  >
    <div className={`${wrap} ${customClass}`}>
      {children}
    </div>   
  </section>   
</>
)}