import {Component} from 'react';
import "./css/coin.css"

class Coin extends Component {
    render() {
        return (
            <div className="coin">
                <img src={this.props.info.imgSrc} alt={this.props.info.side} />
            </div>
        )
    }
}

export default Coin;