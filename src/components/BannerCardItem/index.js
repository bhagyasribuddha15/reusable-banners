// Write your code here.

import './index.css'

const BannerCardItem = props => {
  const {bannerCardDetails} = props
  const {headerText, description, className} = bannerCardDetails

  return (
    <li>
      <div className="banner-card-container">
        <h1 className="header-text">{headerText}</h1>
        <p className="description">{description}</p>
        <div className="button-container">
          <button>{className}</button>
        </div>
      </div>
    </li>
  )
}

export default BannerCardItem
