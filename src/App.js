import React from "react";
import "./app.css"
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {

    return (
        <main>
            <Header />

            <div className="main-text">
                <h2>To <span id="orange">linux</span> users navigating <span id="blue-purple">cmd</span></h2>
                <p>Find equivalent cmd commands for frequently<br />used linux ones.</p>
            </div>

            
            
            <Footer />
        </main>
    )
}