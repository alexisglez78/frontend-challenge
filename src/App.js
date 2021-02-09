import Cabecera from "./ui/components/Cabecera";
import Tabla from "./ui/components/Tabla";

const fetchOffersList = () => {
    return [];
};
const estiloImg = {

}
export default function App() {
    return (
        <div>
        <img style={{
 opacity: 0.2,
 position:'absolute',
 height:'100%',
 width:'100%'
    }} src="https://kinsta.com/es/wp-content/uploads/sites/8/2020/01/prevencion-del-fraude-en-el-comercio-electronico.png" />
        <Cabecera></Cabecera>
        <Tabla></Tabla>
        </div>
    );
}
