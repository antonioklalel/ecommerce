
const Layout = ({children})=>{

    return(
        <div className="flex flex-col items-center mt-20">
            {children}
        </div>
    )

}

export default Layout
/* este componente padre se crea para que suc componentes hijos compartan una misma posicion o estructura */