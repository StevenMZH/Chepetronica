import AccessForm from "../components/auth/AccessForm";

export function Login() {
    return (
        <div className="page-center">
            <div className="panel fullwidth fullheight login-panel column-center">
                <AccessForm/>
            </div>
            <style>{`
                    header {
                        display: none;
                    }

                    main {
                        padding: 10px 20px;
                        padding-top: 30px;
                        gap: 20px;
                    }
                    
                    .login-panel {
                        width: 80vw;
                        height: 90vh;
                    }

                    .blue {
                        color: #578;
                    }

                    
                    .artwork {
                        max-height: clamp(200px, 60vh, 1000px);
                        max-width: 70%;    
                    }
                    .galery {
                        display: flex;
                        flex-direction: column;
                        gap: 50px;
                    }
            `}</style>
        </div>
    );
}

export default Login;
