# <h1 align="center"><a href="https://github.com/ronknight/app-js">📱 Express.js Query Parameter Saver</a></h1>
<h4 align="center">A simple Express.js application that saves and retrieves query parameters.
</h4>

<p align="center">
<a href="https://twitter.com/PinoyITSolution"><img src="https://img.shields.io/twitter/follow/PinoyITSolution?style=social"></a>
<a href="https://github.com/ronknight?tab=followers"><img src="https://img.shields.io/github/followers/ronknight?style=social"></a>
<a href="https://github.com/ronknight/ronknight/stargazers"><img src="https://img.shields.io/github/stars/BEPb/BEPb.svg?logo=github"></a>
<a href="https://github.com/ronknight/ronknight/network/members"><img src="https://img.shields.io/github/forks/BEPb/BEPb.svg?color=blue&logo=github"></a>
<a href="https://youtube.com/@PinoyITSolution"><img src="https://img.shields.io/youtube/channel/subscribers/UCeoETAlg3skyMcQPqr97omg"></a>
<a href="https://github.com/ronknight/app-js/issues"><img src="https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat"></a>
<a href="https://github.com/ronknight/app-js/blob/master/LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>
<a href="#"><img src="https://img.shields.io/badge/Made%20with-Node.js-green.svg"></a>
<a href="https://github.com/ronknight"><img src="https://img.shields.io/badge/Made%20with%20%F0%9F%A4%8D%20by%20-%20Ronknight%20-%20red"></a>
</p>

<p align="center">
<a href="#requirements">📋 Requirements</a> •
<a href="#usage">🚀 Usage</a> •
<a href="#endpoints">🛣️ Endpoints</a> •
<a href="#script">📜 Script</a> •
<a href="#visualization">🔍 Visualization</a> •
<a href="#disclaimer">⚠️ Disclaimer</a>
</p>

---

## 📋 Requirements

- Node.js
- Express.js

## 🚀 Usage

1. Clone the repository:
   ```
   git clone https://github.com/ronknight/app-js.git
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Run the server:
   ```
   node app.js
   ```
4. The server will start running on `http://localhost:80`

## 🛣️ Endpoints

1. 🌐 **/** (GET)
   - Saves the `code` and `state` query parameters
   - Returns a blank HTML page

2. 🔍 **/get-saved-name** (GET)
   - Retrieves the saved `code` and `state` parameters
   - Returns a JSON object with the saved values

## 📜 Script

The `app.js` script sets up an Express.js server that:

- 💾 Saves `code` and `state` query parameters from the root endpoint
- 🔒 Stores these values in memory
- 🔍 Provides an endpoint to retrieve the saved values

## 🔍 Visualization

Here's a flow chart that visualizes the structure and flow of the application:


```mermaid
graph TD
    A[Start Server] -->|Listen on PORT 80| B[Initialize Variables]
    B --> C{Receive Request}
    C -->|GET '/'| D[Save Query Parameters]
    D --> E[Return Blank HTML]
    C -->|GET '/get-saved-name'| F{Saved Code Exists?}
    F -->|Yes| G[Return JSON with Code and State]
    F -->|No| H[Return 404 Not Found]

    style A fill:#f9d71c,stroke:#333,stroke-width:2px
    style B fill:#f9d71c,stroke:#333,stroke-width:2px
    style C fill:#f9d71c,stroke:#333,stroke-width:2px
    style D fill:#a2d2ff,stroke:#333,stroke-width:2px
    style E fill:#a2d2ff,stroke:#333,stroke-width:2px
    style F fill:#f9d71c,stroke:#333,stroke-width:2px
    style G fill:#a2d2ff,stroke:#333,stroke-width:2px
    style H fill:#ffadad,stroke:#333,stroke-width:2px
```

This flow chart illustrates:
- The server start and initialization process
- How requests are handled for different endpoints
- The logic flow for saving and retrieving parameters
- Success and error states

Color coding:
- Yellow: Main flow and decision points
- Light Blue: Successful operations
- Light Red: Error state

## ⚠️ Disclaimer

This application is for demonstration purposes only. In a production environment, consider:

- 🔐 Implementing proper security measures
- 💽 Using a database for persistent storage
- 🧪 Adding error handling and input validation

---

Made with ❤️ by [Ronknight](https://github.com/ronknight)