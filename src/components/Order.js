import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish.status === 'available';
    if (!isAvailable) {
      return <li>sorry {fish ? fish.name : 'fish'} is no longer abailable</li>;
    }
    return (
      <li>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
      </li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      if (isAvailable) {
        return prevTotal + (count * fish.price);
      }
      return prevTotal;
    }, 0);

    return (
      <div className="Order">
        <h2>Order</h2>
        <ul>{orderIds.map(key => <li>{key}</li>)}</ul>
        <div className='total'>
          Total:
            <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order; 