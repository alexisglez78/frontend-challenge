import Cabecera from "./ui/components/Cabecera";
import Tabla from "./ui/components/Tabla";

const fetchOffersList = () => {
    return [];
};
export default function App() {
    return (
        <div>
            <div className="fadeIn" style={{backgroundColor:'white'}}>
           <Cabecera />

            </div>
           <Tabla />
        </div>
    );
}
