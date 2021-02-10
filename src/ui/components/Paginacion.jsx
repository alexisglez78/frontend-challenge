import { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
const Paginacion = props => {
    const [data,setData] = useState([])

        useEffect(() => {
            // let buttons = [];
            // for (let index = 0; index < props.cantidad.length; index++) {
            //     console.log(props.cantidad[index].i);
            //     buttons.push({'boton':props.cantidad[index].i});
                
            // }
            setData(props.cantidad);
        });
        const ie = props.cantidad;
        const lista = ie.map((btn) => {
                return (
                    <button type="button" class="btn btn-outline-secondary" onClick={props.handleClick}  key="" id={btn.boton} style={{fontSize:'18px'}}>{btn.boton}</button>
                )
            })
    return (
        <div class="d-flex justify-content-center mt-4 mb-5 fadeIn" style="z-index: 100000;">
            <div class="btn-group mr-2 text-right" role="group" aria-label="First group" style="z-index: 4;">
                <button
                    type="button" class="btn btn-outline-secondary"
                    onClick={props.back}
                    style={{fontSize:'18px'}}
                >
                    <AiOutlineArrowLeft />
                </button>
                <button
                    type="button" class="btn btn-outline-secondary"
                    style={{fontSize:'18px',backgroundColor:'gray',color:'white'}}
                >
                    {props.paginaActiva}
                </button>
               {lista}
                <button
                    type="button" class="btn btn-outline-secondary"
                    onClick={props.next}
                    style={{fontSize:'18'}}
                >
                    <AiOutlineArrowRight />
                </button>
            </div>
        </div>
    )
}

export default Paginacion;