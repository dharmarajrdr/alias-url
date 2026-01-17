# Alias URL

### 1. Generate Short URL

* The system shall accept a **long URL** from the user.
* It shall generate and return a **unique short URL (alias)**.
* The generated short URL must be globally unique and resolvable.

### 2. Custom Alias Support

* The user may provide a **custom short URL (alias)** for their long URL.
* The system shall verify the **availability** of the requested alias.
* If the alias is available, it shall be assigned to the provided long URL.
* If the alias is already in use, the system shall reject the request with an appropriate error.

### 3. Update Long URL

* The user shall be able to **update the long URL** associated with an alias they own.
* Ownership verification must be performed before allowing updates.
* The alias itself must remain unchanged after the update.
* Subsequent requests to the alias shall redirect to the **updated long URL**.
