import { Photo } from "../interfaces/Photo"

export const PhotoCard = ({ photo }: { photo: Photo }) => {
  return <div className="product">
    <div className="left" style={{ backgroundImage: `url(${photo.thumbnailUrl})` }}>
    </div>
    <div className="right">
      <h5>{photo.title}</h5>
      <p>{photo.url}</p>
    </div>
  </div>
}