import React from "react"
import "./app.css"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Lists from "./components/Lists"
import github from "./assets/GitHub.svg"
import githubLight from "./assets/GitHubLight.svg"
import { Context } from "./Context";



export default function App() {

    const { checked, setChecked } = React.useContext(Context);

    //Error handling to avoid no-unused-vars error
    try {
        if (setChecked === undefined) throw Error('');
    } catch (err) {
        alert('Error' + err);
    }

    return (
        <main className={checked ? "main" : "main light-main"}>

            <Header />

            <div className="main-text">

                <h2 className={checked ? "heading" : "heading light-heading"}>To <span className="orange">linux</span> users navigating <span className="blue-purple">cmd</span></h2>
                <p className={checked ? "heading-para" : "heading-para light-heading-para"}>Find equivalent cmd commands for frequently<br />used linux ones</p>

            </div>

            <Lists />

            <a href="https://github.com/SeunAgbede/Linux2cmd" target="_blank" rel="noopener noreferrer"><img src={checked ? github : githubLight} alt="github-logo" className="github-logo" /></a>

            <Footer />

        </main>
    )
}