import './Card.css'
import PropTypes from 'prop-types'
export const Card = ({cardData, isLoggedIn}) => {
  const {type, price, members, requests} = cardData;
  return (
    <div class="card-basic">
        <div class="card-header header-basic">
          <h1>{type}</h1>
        </div>
        <div class="card-body">
          <p><h2>${price}</h2></p>
          <div class="card-element-hidden-basic">
            <ul class="card-element-container">
              <li class="card-element">{members} team members</li>
              <li class="card-element">{requests} request per day</li>

            </ul>
            {isLoggedIn && <button class="btn btn-basic">Order now</button>}
          </div>
        </div>
      </div>
      
  )
}
Card.propTypes = {
  cardData: PropTypes.shape({
    type: PropTypes.string,
    price: PropTypes.string,
    members: PropTypes.number,
    requests: PropTypes.number
  }),
  isLoggedIn: PropTypes.bool
};

Card.defaultProps = {
  cardData: {
    type: 'Basic',
    price: '4.99',
    members: 2,
    requests: 1000
  },
  isLoggedIn: false
};
