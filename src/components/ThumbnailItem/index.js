import './index.css'

const ThumbnailItem = props => {
  const {eachImage, updateState, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = eachImage
  const onClickImage = () => {
    updateState(id)
  }

  const style = isActive ? 'noBlur' : ''

  return (
    <li>
      <button type="button" className="btn">
        <img
          src={thumbnailUrl}
          className={`thumbImage ${style}`}
          onClick={onClickImage}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
