import React from 'react';

import Navigation from 'Navigation';

class Main extends React.Component {
  render() {
      return (
          <div>
              <div>
                  <Navigation/>
                  <div>
                      {this.props.children}
                  </div>
              </div>
          </div>
      );
  }
}

export default Main;