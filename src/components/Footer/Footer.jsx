import { NavLink } from 'react-router-dom';
import Card from '../../shared/Card';

const Footer = () => {
  return (
    <div className="container">
      <Card>
        <div className="footer">
          <div>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </div>

          <div>
            <NavLink to="/about" activeClassName="active">
              About
            </NavLink>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Footer;
