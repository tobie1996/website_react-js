import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import './gallery.css'

const Gallery = () => {
  const galleryLength = 15;
  const images = []

  for(let i = 1; i <= galleryLength; i++ ) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  return (
    <div>
        <Header title="Our Gallery" image={HeaderImage}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam commodo sapien id tortor euismod porttitor. Etiam non rhoncus ante
        </Header>

        <section className='gallery'>
            <div className='container gallery__container'>
              {
                images.map((image, index) => {

                  return <article key={index}>
                    <img src={image} alt={`Gallery Images ${index + 1}`} />
                  </article>
                })
              }
            </div>
        </section>
    </div>
  )
}

export default Gallery
