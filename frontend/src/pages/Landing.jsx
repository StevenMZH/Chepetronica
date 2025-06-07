import BarChart from "../components/anims/BarChart";
import ProjectTitle from "../components/anims/projectTitle";

export function Landing() {
    return (
        <div className="page">
            <ProjectTitle/>
            <div className="galery">
                <div className="fullscreen center row gap-20">
                    <img className="artwork" src="./illustration/trees.svg"/>
                    <div className="info column-center gap-20">
                        <p className="header font-XXL text-title blue">Process Automata</p>
                        <p className="body font-L text-sybtitle">representa un avance significativo en la optimización de la Gestión Integral de Cultivos introduciendo un sistema inteligente con una interfaz intuitiva que redefine el control agrícola. Este sistema facilita la migración de operaciones manuales a un entorno automatizado y plenamente controlable, superando las limitaciones de los métodos tradicionales</p>
                    </div>
                </div>
                <div className="fullscreen center row gap-20">
                    <div className="info">
                        <p className="header font-XXL text-title blue">Process Automata</p>
                        <p className="body font-L text-subtitle">representa un avance significativo en la optimización de la Gestión Integral de Cultivos introduciendo un sistema inteligente con una interfaz intuitiva que redefine el control agrícola. Este sistema facilita la migración de operaciones manuales a un entorno automatizado y plenamente controlable, superando las limitaciones de los métodos tradicionales</p>
                    </div>
                    <BarChart/>
                    {/* <img className="artwork" src="./illustration/wealth.svg"/> */}
                </div>
            </div>
            
            <style>{`

                    .artwork {
                        padding-top: 40px;
                        max-height: 80vh;
                        max-width: 60%;    
                    }
                    .galery {
                        display: flex;
                        flex-direction: column;
                        gap: 50px;
                    }
                    .info {
                        max-width: 40%;
                        height: 100%;
                        justify-content: center;
                    }
                    .body {
                      line-height: 1.5; 
                    }

                    .blue {
                        color: #578;
                    }
                    .red {
                        color: #855;
                    }

                    .progress-container, .sheet-container{
                        width: 70vw;
                    }

                    .columnDiv {
                        gap: 20px;
                    }
                    
                    .progress-formula, .units, .bottom-formulaSheet {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 20px;
                    }

                    .bottom-formulaSheet {
                        display: none;
                    }
                        
                    .progress-container, .sheet-container {
                        width: 20vw;
                    }

                    @media (max-width: 880px) {
                        .columnDiv {
                            display: flex;
                            flex-direction: column;
                            gap: 20px;
                        }
                        .units {
                            gap: 10px;
                        }
                        .progress-formula {
                            position: static;
                        }
                        .progress-container, .sheet-container, .unit-container, .noUnits-container {
                            width: 90vw;
                        }

                        .bottom-formulaSheet {
                            display: flex;
                        }
                        .top-formulaSheet {
                            display: none;
                        }
                    }
            `}</style>
        </div>
    );
}

export default Landing;
