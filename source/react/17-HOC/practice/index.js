// Core
import React from 'react';
import { render } from 'react-dom';

// Farm
import { default as Farm } from './components/Farm';

export const withHarvest = (
  items
) => {
  return (Enhanceable) => {
    class WithHarvest extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          items,
          _yieldItems: this._yieldItems,
        }
      }

      _yieldItems = () => {
        this.setState(prevState => ({
          items: prevState.items + 1
        }))
      };

      render() {
        return <Enhanceable { ...this.state } />;
      }
    }
    return WithHarvest;
  };
};

const HarvestFarm = withHarvest(10)(Farm);

render(<HarvestFarm />, document.getElementById('app'));
