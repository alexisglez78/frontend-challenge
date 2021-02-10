import { useEffect } from "react";
import Paginacion from "./Paginacion";
import logo from "./assets/processed.jpeg";

export default function Tabla() {
    const [datos, setData] = useState([]);
    const [loader, setLoader] = useState(false);
    const [paginaActiva, setPaginaActiva] = useState(1);
    const [cantidad, setCantidad] = useState([]);

    const offers = props => {
        if (props === 0) {
            return;
        }
        setLoader("true");
        setCantidad([]);
        var requestOptions = {
            method: "GET",
        };
        fetch(
            "https://e6di35qzm7.execute-api.us-west-2.amazonaws.com/latest/directory?epp=9&p=" +
                props +
                "",
            requestOptions,
        )
            .then(response => response.json())
            .then(result => {
                let arr = [];
                for (let i = props + 1; i <= props + 3; i++) {
                    if (result.pages !== i) {
                        arr.push({ boton: i });
                    }
                }
                setPaginaActiva(result.page);
                setCantidad(arr);
                setLoader(false);
                return setData(result.data);
            })
            .catch(error => console.log("error", error));
    };

    useEffect(() => {
        offers(paginaActiva);
    }, []);

    const list = datos.map(datoss => {
        return (
            <button className="col-md-4 mb-5 prueba" id={datoss.name}>
                <div
                    className="card"
                    style={{
                        width: "19rem",
                        height: "18rem",
                        backgroundColor: "black",
                    }}>
                    <div
                        className="card-body font-weight-bold "
                        style={{ height: "170px" }}>
                        <h6
                            className="card-title font-weight-bold"
                            style={{ color: "#2e58ff" }}>
                            {datoss.name}
                        </h6>
                        <img alt="Logo" src={logo} style={{ width: "100%" }} />
                        <small style={{ color: "white" }} key={datoss._id}>
                            Descuento de {datoss.discount}%
                        </small>
                    </div>
                </div>
            </button>
        );
    });
    if (loader) {
        return (
            <div className="row justify-center" style={{ marginTop: "10%" }}>
                <div class="loading">
                    <div class="dot" />
                    <div class="dot" />
                    <div class="dot" />
                    <div class="dot" />
                    <div class="dot" />
                </div>
            </div>
        );
    } else {
        return (
            <div className="container fadeIn">
                <div className=" text-center mt-3 mb-5 text-black">
                    <h2 className="font-weight-bold">Tiendas Disponibles</h2>
                </div>
                <div className="row">{list}</div>
                <Paginacion
                    back={() => offers(paginaActiva - 1)}
                    next={() => offers(paginaActiva + 1)}
                    cantidad={cantidad}
                    paginaActiva={paginaActiva}
                    handleClick={e => {
                        e.preventDefault();
                        offers(Number(e.target.id));
                    }}
                />
            </div>
        );
    }
}
