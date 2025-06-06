# Frontend Examples:

## Google Redirect Button

```React
function GoogleAccessBtn() {
    const handleGoogleLogin = () => {
      const clientId = "966493847250-hglfvkd9dicq5eadghj7pteje00f3mrn.apps.googleusercontent.com";
      const redirectUri = "http://localhost:5173/google-callback"; // Debe coincidir con lo registrado en Google Console
      const scope = "openid profile email";
      const responseType = "token id_token";
      const state = "random_state_value"; // Para seguridad opcional
      const nonce = "random_nonce"; // Obligatorio para seguridad
  
      const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&state=${state}&nonce=${nonce}&prompt=select_account`;
  
      // Redirigir a Google en la misma ventana
      window.location.href = url;
    };
  
    return (
        <>
            <button type="button" className="login-with-google-btn" onClick={handleGoogleLogin}>
                Sign in with Google
            </button>
        </>
    );
  }
  
  export default GoogleAccessBtn;
```


## Google Callback:
```React
import axios from "axios";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function GoogleCallback() {
    const navigate = useNavigate();
    const alreadyProcessed = useRef(false);

    useEffect(() => {
        if (alreadyProcessed.current) return;
        alreadyProcessed.current = true;

        const hash = window.location.hash;
        const params = new URLSearchParams(hash.replace("#", ""));

        const id_token = params.get("id_token");
        const access_token = params.get("access_token");

        if (id_token) {
            const decoded = jwtDecode(id_token);
            console.log("Usuario autenticado:", decoded);

            // Guardar temporalmente el id_token (Google)
            localStorage.setItem("google_id_token", id_token);

            axios
                .post("http://127.0.0.1:8000/auth/google/", {
                    access_token,
                    id_token,
                })
                .then((res) => {
                    const { access, refresh, user } = res.data;

                    localStorage.setItem("accessToken", access);
                    localStorage.setItem("refreshToken", refresh);
                    window.location.href = "/profile";
                })
                .catch((err) => {
                    console.error("Error al autenticar con el backend", err);
                });

            navigate("/profile");
        } else {
            console.error("Token no encontrado en la URL");
        }
    }, []);

    return null; // No necesitas renderizar nada
}

export default GoogleCallback;

```