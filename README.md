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

## ⚠️ Disclaimer

This application is for demonstration purposes only. In a production environment, consider:

- 🔐 Implementing proper security measures
- 💽 Using a database for persistent storage
- 🧪 Adding error handling and input validation

---

Made with ❤️ by [Ronknight](https://github.com/ronknight)
