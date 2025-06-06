
# API Endpoints Documentation

## Authentication Required
All endpoints that require authentication must include the following header:

```
Authorization: Bearer <access_token>
```

---

### `POST /auth/google/`
Authenticate or register a user via Google.

**Headers:**
- Content-Type: application/json

**Body:**

```json
{
  "access_token": "<google_access_token>",
  "id_token": "<google_id_token>"
}
```

**Response:**
```json
{
  "message": "Successfully authenticated",
  "refresh": "<refresh_token>",
  "access": "<access_token>"
}
```

---

### `GET /check_user/<email>/`
Check if a user with the specified email exists.

**Response:**
```json
{
  "exists": true
}
```

---

### `POST /register/`
Register a new user.

**Body:** JSON as required by `RegisterSerializer`.

**Response:**
```json
{
  "email": "...",
  "username": "...",
  "first_name": "...",
  "last_name": "..."
}
```

---

### `POST /login/`
Obtain JWT tokens.

**Body:**
```json
{
  "email": "...",
  "password": "..."
}
```

**Response:**
```json
{
  "refresh": "<refresh_token>",
  "access": "<access_token>"
}
```

---

### `POST /token/refresh/`
Refresh an access token.

**Body:**
```json
{
  "refresh": "<refresh_token>"
}
```

**Response:**
```json
{
  "access": "<new_access_token>"
}
```

---

### `GET /user_data/`
Get authenticated user data.

**Auth Required**

**Response:**
```json
{
  "email": "...",
  "username": "...",
  "first_name": "...",
  "last_name": "...",
  "profile_picture": "...",
  "date_joined": "..."
}
```

---

### `PUT /update_user/`
Update user profile data.

**Auth Required**

**Body:** JSON with user fields (e.g., `first_name`, `last_name`, `profile_picture`, etc.)

**Response:**
```json
{
  "message": "Preferences updated successfully."
}
```
