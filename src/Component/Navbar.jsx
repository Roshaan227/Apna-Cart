import React from 'react';

class Navbar extends React.Component {
  state = {} // If you don't need state, it can be omitted
  render() {
    return (
      <div>
        <nav className="navbar bg-success px-3">
          <div className="container-fluid">
            {/* Using Bootstrap text color utility classes */}
            <span className="navbar-brand mb-0 h1 text-warning">Apna Cart</span>
            {/* 'text-light' will make the text color light */}
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
