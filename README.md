# ConnectUs

<img width="1900" height="910" alt="Screenshot 2025-08-15 001029" src="https://github.com/user-attachments/assets/869de86a-c3cc-4bde-afb6-7390a4b73a62" />

A full-stack, real-time communication platform designed to connect people who want to learn different languages. **ConnectUs** provides a seamless environment for users to find friends, chat instantly, and engage in voice and video calls, all within a clean and responsive interface.

## 🌟 Key Features

* **Secure Authentication:** User registration and login powered by JSON Web Tokens (JWT).
* **Real-Time Chat:** Instant messaging using a dedicated streaming API to ensure live, low-latency communication.
* **Friend Management:** Send and accept friend requests to build your network.
* **Voice & Video Calls:** Peer-to-peer audio and video calls enabled by WebRTC signaling.
* **Responsive UI:** A modern and intuitive user interface built with Tailwind CSS, ensuring a consistent experience across all devices.

<span><img width="500" height="1115" alt="Screenshot 2025-08-15 001129" src="https://github.com/user-attachments/assets/1686c42f-b921-4b29-bc69-b272478b2680" />
<img width="500" height="1115" alt="Screenshot 2025-08-15 001145" src="https://github.com/user-attachments/assets/38af5662-3c9e-4cb8-ae0c-ac2ff5d4e20b" /></span>
<span><img width="500" height="1115" alt="Screenshot 2025-08-15 001200" src="https://github.com/user-attachments/assets/cda81c8b-c154-4d9c-85bd-7fd0a1472632" />
<img width="500" height="1115" alt="Screenshot 2025-08-15 001213" src="https://github.com/user-attachments/assets/589a007f-cc0c-4605-9f9d-6f738868e443" /></span>



## 🚀 Technology Stack

### Frontend
* **React:** A declarative and component-based UI library.
* **Vite:** A fast and modern build tool for a great developer experience.
* **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
* **Zustand:** A small, fast, and scalable state management solution.

### Backend
* **Node.js & Express:** A powerful and flexible backend runtime and framework.
* **MongoDB:** A NoSQL database for flexible and scalable data storage.
* **JWT:** Secure, token-based authentication.
* **Streaming API:** A custom implementation for handling real-time data flow.

## 🏛️ Architecture

This project is structured as a **monorepo**, containing both the frontend and backend services within a single repository. This approach simplifies development and dependency management while maintaining a clear separation of concerns. The frontend communicates with the backend via a **RESTful API** for authentication and data management, and a dedicated **streaming API** handles all real-time communication.

---

## ⚙️ Getting Started

### Prerequisites

* Node.js (>= 16.x)
* npm or yarn
* MongoDB Atlas or a local instance

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/your-username/ConnectUs.git](https://github.com/your-username/ConnectUs.git)
    cd ConnectUs
    ```

2.  Install dependencies for both frontend and backend:
    ```bash
    # From the root directory
    npm install
    ```

3.  Set up environment variables:
    Create a `.env` file in the `backend` directory with the following variables:
    ```
    MONGO_URI=<Your-MongoDB-Connection-String>
    JWT_SECRET=<A-Strong-Secret-Key>
    PORT=5000
    ```

### Running the Project

1.  Start the backend server:
    ```bash
    # From the root directory
    npm run dev:backend
    ```

2.  Start the frontend application:
    ```bash
    # In a new terminal, from the root directory
    npm run dev:frontend
    ```
    The frontend will be available at `http://localhost:5173`.

---

## 🙏 Acknowledgments

This project was developed as a demonstration of full-stack, real-time application development.
