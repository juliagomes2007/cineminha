import Navbar from "../Navbar/Navbar";


function Header() {
    return (  
        <header className="flex justify-between bg-black text-white p-5">
            <span>Olá, visitantes</span>
            <h1>Cineminha po</h1>
            <Navbar/>
        </header>
    );
}

export default Header;