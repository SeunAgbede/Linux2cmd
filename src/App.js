import React from "react"
import "./app.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Lists from "./components/Lists"
import github from "./assets/GitHubWhite.svg"


export default function App() {

    return (
        <main>
            <Header />

            <div className="main-text">
                <h2>To <span className="orange">linux</span> users navigating <span className="blue-purple">cmd</span></h2>
                <p>Find equivalent cmd commands for frequently<br />used linux ones.</p>
            </div>

            <Lists />

            <a href="https://github.com/SeunAgbede/Linux2cmd" target="_blank" rel="noopener noreferrer"><img src={github} alt="github-logo" className="github-logo" /></a>
                        
            <Footer />
        </main>
    )
}