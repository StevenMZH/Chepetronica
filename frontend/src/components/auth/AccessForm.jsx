import axios from "axios";
import GoogleAccessBtn from "./GoogleAccessBtn";
import { useAuthFormContext } from "../../context/AuthFormContext";

export function AccessForm() {
    const {             
        formEmail, setFormEmail,
        formType, setFormType,
        formError, setFormError,
    } = useAuthFormContext();

    const handleAccess = async (e) => {
        e.preventDefault();
        setFormError(null);

        try {
            const response = await axios.get(`http://127.0.0.1:8000/account/check_user/${formEmail}/`);

            if (response.data.exists) { setFormType("login"); } 
            else { setFormType("signup"); }

        } catch (formError) {
            setFormError("Error verifying user,   please try again");
            setFormEmail("");
        }
    };

    return formType==="access" && (
        <form className="access-form column center fullwidth fullheight gap-20" onSubmit={handleAccess}>
            
            <div className="galery fullwidth center">
                <img className="artwork center" src="./illustration/login.svg"/>
            </div>

            <div className="box center gap-0">
                <label className="text-title font-L">Bienvenido, Inicie sesión o Regístrese</label>
                <label className="text-subtitle blue font-M">para acceder a su servicio</label>            
            </div>

            {/* {formError && <p className="text-subtitle error">{formError}</p>}
            <input className="fullwidth text-focus" type="text" placeholder="Email" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} required />

            <div className="buttons">
                <button className="button-square text-title" type="submit">Continuar</button>
            </div>     */}

            <div className="fullwidth social-login center">
                    <GoogleAccessBtn/>
            </div>

        </form>
    );
};
export default AccessForm;
