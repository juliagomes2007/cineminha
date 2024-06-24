import Navbar from "../Navbar/Navbar";


function Header() {
    return (  
        <header className="flex justify-between text-xl bg-green-200 text-black p-5 items-center">
            <span>Seja Muito Bem Vindo!</span>
            <h1 className="font-extrabold text-5xl">Cineminha</h1>
            <Navbar/>
        </header>
    );
}

export default Header;