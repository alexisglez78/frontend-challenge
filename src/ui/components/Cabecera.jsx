export default function Cabecera() {
    return (
        <div className="mb-1 container justify-start">
            <div class="d-flex flex-row ">
                <div class="pt-3 pl-1">
                    <img
                        style={cabecera}
                        className="mt-1 mb-4"
                        src="https://static.wixstatic.com/media/475185_0c498a2fe6454b43a81b98719406dafe~mv2.png/v1/fill/w_192,h_50,al_c,usm_0.66_1.00_0.01/LOGO-REWORTH-BLACK_edited.png"
                        alt="" />
                </div>
            </div>
        </div>
    );
}
const cabecera = {
    width: "70%",
};
