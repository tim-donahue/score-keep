import React from 'react';
import PropTypes from 'prop-types';

import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';
import TitleBar from './TitleBar';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <TitleBar title={this.props.title} subtitle="Created by Tim"/>
        <div className="wrapper">
          <PlayerList players={this.props.players} />
          <AddPlayer/>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  players: PropTypes.array.isRequired
};