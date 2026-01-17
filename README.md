# Alias URL

## Problem

Users often share URLs that point to resources such as documents, files, dashboards, or web pages.
When the underlying resource changes or is replaced, the original URL also changes.
This forces users to redistribute new links every time an update occurs, leading to broken links, manual follow-ups, and poor user experience.

## Solution

AliasUrl provides a **persistent alias-based URL system**.

* Users create a **short or custom alias URL** that points to a long destination URL.
* The alias URL remains constant and can be shared across platforms.
* When the destination changes, users update the **long URL** associated with the alias.
* All existing shares automatically redirect to the latest destination without requiring link redistribution.

This decouples **link sharing** from **resource updates**, ensuring stability, flexibility, and ease of management.

---

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
