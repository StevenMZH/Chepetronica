
export function IO_Panel({name, type, description}) {
    const typeClass = type === "write" ? "write" : type === "read" ? "read" : "non";
    
    return (
        <div className={"var-panel panel row p0"}>
            <div className={`p5 tag font-S ${typeClass}`}>I/O</div>
            <div className="panel-data fullwidth fullheight p20">
                <div className="panel-header">{name}</div>            
                <div className="panel-body"> 
                    <p>{description}</p>
                </div>
            </div>

            <style>{`
                .var-panel.panel {
                    border: 3px solid #777;
                }
                .panel-data{
                    height: 500px;
                    max-width: 80%;
                }

                .tag{
                    width: 50px;
                    height: 100%;
                }                
                .write {
                    background-color: #69c;
                }

                .read {
                    background-color: #69c;
                }

                .non {
                    background-color: #666;    
                }
            `}</style>
        </div>
    );
}

export default IO_Panel;
