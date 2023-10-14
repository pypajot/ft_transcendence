import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';
import First from './Notifications';
import { PopUpInvite } from '../pages/Message/PopUpInvite';
import { useGameContext } from '../context/GameContext';
import { useProfileContext } from '../context/ProfileContext';

const Navbar = () => {
    const { logout } = useAuth();
    const { gameInvite, inviter, inviter_id, mode, counter } = useGameContext();

    return (
        <nav>
            {gameInvite && (
                <PopUpInvite
                    key={counter}
                    from={inviter}
                    from_id={inviter_id}
                    mode={mode}
                />
            )}
            <div className="nav-left">
                <div className="nav-home">
                    <li>
                        <Link to="/profile">PROFILE</Link>
                    </li>
                </div>
                <div className="nav-home">
                    <li>
                        <Link to="/home">HOME</Link>
                    </li>
                </div>
                <div className="nav-home">
                    <li>
                        <Link to="/game">GAME</Link>
                    </li>
                </div>
                <div className="nav-home">
                    <li>
                        <Link to="/chatapp">CHAT</Link>
                    </li>
                </div>
            </div>
            <div className="nav-right">
                <div className="friends-notif">
                    <First></First>
                </div>
                <div className="img-avatar">
                    <img
                        className="contact-image"
                        src={useAuth().user?.avatar}
                    />
                </div>
                <div className="username">{useAuth().user?.username}</div>
                <div className="logout-button">
                    <button className="button" onClick={logout}>
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
