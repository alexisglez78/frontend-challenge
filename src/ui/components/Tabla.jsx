export { useEffect } from "react";
export default function Tabla() {
    const [datos, setData] = useState([]);
    useEffect(() => {
        console.log("fetch");
        var requestOptions = {
            method: "GET",
        };
        fetch(
            "https://e6di35qzm7.execute-api.us-west-2.amazonaws.com/latest/directory?epp=5&p=2",
            requestOptions,
        )
            .then(response => response.json())
            .then(result => {
                console.info(result);
                return setData(result.data);
            })
            .catch(error => console.log("error", error));
    }, []);
    const list = datos.map(datoss => {
        console.log(datoss.name);
        return (
            // <tr>
            //     <td >Logotipo</td>
            //     <td >{datoss.name}</td>
            //     <td >{datoss.discount}%</td>
            // </tr>
            <div class="card" style="width: 18rem;">
                <div
                    class="card-body font-weight-bold"
                    style={{ color: "#2e58ff" }}>
                    <h5 class="card-title font-weight-bold">{datoss.name}</h5>
                    <img
                        src="https://www.underconsideration.com/brandnew/archives/yema_logo.png"
                        alt=""
                    />
                    <smal>Descuento de {datoss.discount}%</smal>
                </div>
            </div>
        );
    });
    console.log(list);
    return (
        <div className="container">
            {/* <table className="table">
                <thead>
                    <tr>
                        <th>Logo</th>
                        <th> Nombre</th>
                        <th> Descuento</th>
                    </tr>
                </thead>
                <tbody>
                     {list}
                </tbody>
            </table> */}
            {/* <div class="card" style="width: 18rem;">
  <div class="card-body font-weight-bold" style={{color:'#2e58ff'}}>
    <h5 class="card-title font-weight-bold">Nombre</h5>
   <img src="https://www.underconsideration.com/brandnew/archives/yema_logo.png" alt=""/>
    <smal>Descuento de 0.2%</smal>
  </div>
</div> */}
            {list}
            {/* <div class="d-flex justify-content-center mt-4 " style="z-index: 100000;" >
            <div class="btn-group mr-2 text-right" role="group" aria-label="First group" style="z-index: 4;">
                <button type="button" class="btn btn-outline-secondary">
                    <mat-icon style="font-size:15px;width: auto !important;height: auto !important">navigate_before
                    </mat-icon>
                </button>
                <button type="button" class="btn btn-outline-secondary" *ngFor="let pagina of paginas"
                    [ngClass]="(paginaActiva == pagina) ? 'active' : ''" (click)="verPagina(pagina)">{{pagina}}</button>
                <button type="button" class="btn btn-outline-secondary"
                    *ngIf="paginaActiva < paginas[paginas.length - 1] " (click)="verPagina(paginaActiva + 1)">
                    <mat-icon style="font-size:15px;width: auto !important;height: auto !important">navigate_next
                    </mat-icon>
                </button>
            </div>
        </div> */}
        </div>
    );
}
