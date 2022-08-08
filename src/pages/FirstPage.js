import { Description1 } from "../components/pagina1/Description1";
import { YouWillDo } from "../components/pagina1/YouWillDo";
import { CourseIsFor } from "../components/pagina1/CourseIsFor";
import { Level } from "../components/pagina1/Level";

export const FirstPage = () => {

    
  return (

<div className="container">



        <div className="top">
            <Level />

            <button className="b1">
                <p className="negrita">Program</p>
            </button>

            <button className="b1">
                <p className="negrita">Price</p>
            </button>

            <button className="b1">
                <p className="negrita">Curators</p>
            </button>

            <button className="brigth">
                <p className="negrita">Consultation</p>
            </button>
        </div>


        <div>

            <div className="cuadro1">   {/*boton y dos textos*/}

                <div>
                    <h1 className="titulo1">web- <br/>designer</h1>
                </div>

                <div>
                    <p className="parrafo1">
                        You can find in design and take <br/>
                        first orders after the end of the course
                    </p>
                </div>


                <div className="button">
                    <button className="btn btn-warning">
                        <p className="pb">Sign up</p>
                    </button>
                </div>

            </div>


        </div>
       
            <div className="times">
                <h2 className="negrita">6 months</h2>
                <h2 className="negrita">2 times per week</h2>
                <h2 className="negrita">experienced mentors</h2>
            </div>

            <div className="descriptions">
                <Description1 />
                <YouWillDo />
            </div>

            <div>
                <CourseIsFor />
            </div>
        <br/> <br/><br/> <br/>
        <hr className="hr1"/>
</div>
  )
}
