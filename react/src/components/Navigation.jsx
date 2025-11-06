import {Link} from 'react-router-dom';
import '../App.css'

function Navigation() {
    return (
        <div className="content">
            <nav>
                <Link to="/"> Home </Link>
                <Link to="/add-exercise"> Create </Link>
            </nav>
        </div>

    )

}

export default Navigation;