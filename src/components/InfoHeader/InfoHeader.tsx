import photo from '../../assets/yo.jpg'

export const InfoHeader = () => {
  return (
    <div className='info_header'>
      <div className='card_info'>

        <img className='img_header' src={photo} alt='eduardo photo' />
        <h2>

          Eduardo Javier Garcia Alfonso

        </h2>
        <br />
        <p>
          <b> Frontend Developer </b>
        </p>
      </div>

      <div>
        iconos
      </div>
    </div>
  )
}
