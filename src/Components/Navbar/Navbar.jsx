import logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <div>
             {/* upper navber */}
             <div className="">
                <div className="">
                    <div className="">
                        <a href="#">
                            <img src={logo} alt="logo" />
                        </a>
                    </div>
                </div>
             </div>
             {/* lower navbar */}
        </div>
    );
};

export default Navbar;