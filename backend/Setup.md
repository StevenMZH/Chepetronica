# Setup

## Google OAuth Credentials
En ID de Cliente para Aplicacion web
```
# Orígenes autorizados de JavaScript:
<frontend_domain>

# URIs de redireccionamiento autorizados:
<backend>/auth/social/google/login/callback/
<frontend_domain>/google-callback
```

## Rellenar el .env.dev / .env.prod

## Init Backend
```
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic
python manage.py createsuperuser
```

En <backend>/admin, entra a Social applications y añade un objecto con:
- Provider: Google
- Name: (str)
- Client id: GOOGLE_CLIENT_ID
- Secret key: GOOGLE_CLIENT_SECRET
- Key: (null)
- Sites: El 1ero que aparezca

## Frontend Flow to Access with Google:
### URL to Google OAuth Page:
    https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}&state=${state}&nonce=${nonce}&prompt=select_account

### Callback Page
- <frontend_domain>/google-callback

After access with google, it redirects you to the callback page assigned, this page returns id_token and access_token as url params:
```
const id_token = params.get("id_token");
const access_token = params.get("access_token");
```

- Access the tokens, storage them, then redirect to continue the normal app flow
- POST /auth/google/
- Storage access_token and refresh_token
