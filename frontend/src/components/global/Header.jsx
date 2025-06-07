import { Link} from 'react-router-dom';
import { useAuthFormContext } from '../../context/AuthFormContext';

export function AppHeader() {
    const {isAuthFormVisible, setIsAuthFormVisible} = useAuthFormContext();
    const token = localStorage.getItem("accessToken");

    return (
        <div className="flexCenter appHeader-container">
            {/* <img src=".\images\logo.png" className='logo' alt="" /> */}

            <div className='text-subtitle center start font-4XS blue gap-2'>
                <div>
                    <div>P</div>
                    <div>R</div>
                    <div>O</div>
                    <div>C</div>
                    <div>E</div>
                    <div>S</div>
                    <div>S</div>
                </div>
                <div>
                    <div>A</div>
                    <div>U</div>
                    <div>T</div>
                    <div>O</div>
                    <div>M</div>
                    <div>A</div>
                    <div>T</div>
                    <div>A</div>
                </div>
            </div>

            <div className='flexCenter nav-right'>
                {!token && (
                    <Link to={"/login"}>
                    <button className='button-square2 font-M text-title2'>Access</button>
                    </Link>
                )}
                {token && (
                    <div className="flexCenter profilePicture-container">
                        <Link to="/profile">
                            <img className='circleImage profilePicture' src='/images/nav/defaultUser.png' alt="defaultUserImage" />
                        </Link>
                    </div>

                )}                
            </div>

            <style>{`
                header {
                    position: fixed;
                    top: 0;
                    z-index: 1000; 

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    width: 100%;
                    height: 72px;
                    padding: 20px;
                    padding-bottom: 15px;

                    background-color: #0000;
                    font-family: "Work Sans", sans-serif;
                    backdrop-filter: blur(10px);
                }
                .appHeader-container {
                    display: flex;
                    width: 100%;
                    justify-content: start;
                }

                .logo {
                    width: 100px;
                }
                    
                .appHeader-container .nav-left {
                    display: flex;
                    width: 100%;
                    justify-content: start;
                }
                .appHeader-container #logo5 {
                    display: none;
                }

                .appHeader-container .nav-right {
                    width: 100%;
                    justify-content: end;
                    gap: 7px;
                }

                .appHeader-container .profilePicture-container a, .appHeader-container .profilePicture-container a:hover{
                    background-color: #0000;
                    border: none;
                    padding: 0;
                }
                .appHeader-container .profilePicture{
                    background-color: #00000000;
                    width: 40px;
                    height: 40px;
                    padding: 0;
                }
                .appHeader-container .profilePicture:hover{
                    background-color: #00000000;
                    padding: 0;
                }
            `}</style>
        </div>
    );
};
export default AppHeader;
