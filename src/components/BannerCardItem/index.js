// Write your code here.
import './index.css'
const bannerCardItem = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList
  return (
    <div className="banner-card-container">
      <h1 className="banner-card-heading">The Seasons Latest</h1>
      <p className="banner-card-description">Get the seasons all latest designs in a flick of your hand</p>
      <button className = "banner-card-button">Show More</button>
    </div>
     <div className="banner-card-container">
      <h1 className="banner-card-heading">Our New Designs</h1>
      <p className="banner-card-description">Get the seasons all latest designs in a flick of your hand</p>
      <button className = "banner-card-button">Show More</button>
    </div>
     <div className="banner-card-container">
      <h1 className="banner-card-heading">Insiders</h1>
      <p className="banner-card-description">Get the seasons all latest designs in a flick of your hand</p>
      <button className = "banner-card-button">Show More</button>
    </div>
  )
}

export default bannerCardItem
