export default function Cabecera() {
    return (
        <div className="mb-5 container">
            <div class="d-flex flex-row ">
                <div class="pt-3 pl-1">
                    <img
                        style={cabecera}
                        className="mt-1"
                        src="https://static.wixstatic.com/media/475185_0c498a2fe6454b43a81b98719406dafe~mv2.png/v1/fill/w_192,h_50,al_c,usm_0.66_1.00_0.01/LOGO-REWORTH-BLACK_edited.png"
                        alt=""></img>
                </div>
            </div>
            <div>
                <div class="container text-center mt-3 mb-2 text-black">
                    <h2 className="font-weight-bold">Tiendas Disponibles</h2>
                </div>
            </div>
        </div>
    );
}
const cabecera = {
    width: "70%",
};
