# NodeJS RBAC

## Table of Contents

-   [Overview](#overview)
-   [Getting Started](#getting-started)
-   [Features](#features)

## Overview

This project is a Node.js application that implements a Role-Based Access Control (RBAC) system. The primary goal is to manage user authentication and authorization using JSON Web Tokens (JWT). The system ensures that only authenticated users with the appropriate roles can access specific routes and resources.

## Getting Started

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/nodeJS_RBAC.git
    ```
2. Navigate to the project directory:
    ```
    cd nodeJS_RBAC
    ```
3. Install the dependencies:
    ```
    npm install
    ```
4. Set Up Environment Variables. Create a `.env` file add followings.
    ```
    PORT =
    JWT_SECRET =
    MONGO_CONNECTION_STRING  =
    ```

5. Start the server:
    ```
    npm run dev
    ```

## Features

-   **User Authentication:** Users can register and log in to the system. Upon successful login, a JWT token is issued.
-   **Role-Based Authorization:** The system supports multiple user roles (e.g., admin, user) and restricts access to certain routes based on the user's role.
-   **JWT Token Verification:** Middleware to verify the JWT token and extract user information from it.
-   **Secure Routes:** Protected routes that can only be accessed by authenticated users with the appropriate roles.
