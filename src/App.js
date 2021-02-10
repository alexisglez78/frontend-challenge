import Cabecera from "./ui/components/Cabecera";
import Tabla from "./ui/components/Tabla";

export default function App() {
    return (
        <div>
            <div className="fadeIn" style={{ backgroundColor: "white" }}>
                <Cabecera />
            </div>
            <Tabla />
        </div>
    );
}
