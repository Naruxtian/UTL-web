import FooterInformativo from '../../components/footerInformativo';
import Footer from '../../components/footerLogoAso';
import Navbar from '../../components/navbar';

const Aspirante = () => {

  return (
    <div>
      <div>
        <Navbar />
        <div className=" div-historia">
          <h1 className="title">Historia</h1>
          <img src="https://www.utleon.edu.mx/resource/img/banners/0%20Roll%20Up%20Aspirante%201_202209140218.PNG" alt="Imagen" className="image" />
          <p>La Universidad Tecnológica de León inició su funcionamiento el 26 de Septiembre de 1995, con la inauguración de cursos efectuada por el C. Vicente Fox Quesada, Gobernador Constitucional del Estado de Guanajuato, ante la presencia de altas personalidades del Gobierno Federal, Estatal, Municipal y la Comunidad Universitaria.
            Desde el 25 de septiembre de 1995 y hasta la fecha, formamos ciudadanos y ciudadanas de bien, con pensamiento global y acción local, con innovación, profundos valores humanos y universales y sobre todo, brindando educación tecnológica y de calidad, orientada a la industria 4.0 y la mente-factura”.</p>
          <div className='carousel'>
            <div id="carouselExampleCaptions" className="carousel slide">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://www.utleon.edu.mx/resource/img/banners/0%20Roll%20Up%20Aspirante%202_202209140216.JPG" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>PREPARATE Y TRASCIENDE PARA EL MAÑANA</h5>
                    <p>Estás en la zona donde converge el aprendizaje, la innovación y el conocimiento aplicado.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="https://www.utleon.edu.mx/resource/img/banners/0%20Roll%20Up%20Aspirante%201_202209140218.PNG" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>PREPARATE Y TRASCIENDE PARA EL MAÑANA</h5>
                    <p>Somos una institución tecnológica con sentido humano.</p>
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
        <div>
          <FooterInformativo />
        </div>
      </div>
    </div>
  );
};

export default Aspirante;
