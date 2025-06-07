import IO_Panel from "../components/IOs/IO_panel";

export function Profile() {
    return (
        <div className="page-center">
            <div className="p0 fullwidth fullheight login-panel">
                <div className="panel-grid fullwidth fullheight gap-2">
                    <IO_Panel name="Var 11313" type="write" 
                    description="loejnrfuvibbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbfnvjekfvnjefnvjkefjvnjbnfjvnnfv
                    rem riv"/>
                    <IO_Panel name="Var 11313" type="read"/>
                    <IO_Panel name="Var 11313" type="read"/>
                    <IO_Panel name="Var 11313" type="writajke"/>
                    <IO_Panel name="Var 11313" type="read"/>
                    <IO_Panel name="Var 11313" type="write"/>
                </div>
            </div>
            <style>{`
                    header {
                        display: none;
                    }
                    main {
                        padding: 0px 20px;
                        padding-top: 30px;
                        gap: 20px;
                    }
                    
                    .login-panel {
                        width: 95vw;
                        height: 90vh;
                    }

                    .panel-grid {
                        display: grid;
                        width: 100%;
                        grid-template-columns: repeat(3, 1fr);
                        gap: 15px;
                    }

                    @media (max-width: 1100px) {
                        .panel-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }
                    }
                    @media (max-width: 880px) {
                        .panel-grid {
                            grid-template-columns: repeat(1, 1fr);
                        }
                    }


            `}</style>
        </div>
    );
}

export default Profile;
