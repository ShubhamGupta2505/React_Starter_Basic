
// import React from "react"
// import ReactDOM from "react-dom"
// import Header  from "./Header"
// import Footer from "./Footer"
// import MainContent from "./MainContent"

// function Header() {
//     return (
//        <div>
//            <header>
//                 <nav className="nav">
//                     <img src ="./react-logo.png" className ="image-logo"/>
//                     <ul className = "nav-items">
//                         <li>Pricing</li>
//                         <li>About</li>
//                         <li>Contact</li>
//                     </ul>
//                 </nav>
//             </header>
//        </div> 
//     )
// }

// function Footer() {
//     return (
//         <footer>2022 XYZ development. All rights reserved .</footer>
//     )
// }


// function MainContent(){
//     return(
//         <div>
//             <h1>Reason I am excited to learn React : </h1>
//             <ol>
//                 <li>It is a popular library </li>
//                 <li>It is fun to learn and creative.</li>
//                 <li>It  is more likely to get a job as developer .</li>
//             </ol>
//         </div>
//     )
// }

// function Page() {
//     return (
//         <div>
//             <Header />
//             <MainContent/>
//             <Footer />
//         </div>
//     )
// }

// ReactDOM.render(<Page/></Page>,document.getElementById("root"))


import React from "react"
import ReactDOM from "react-dom"

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
*/

function Header() {
    return (
        <header>
            <nav>
                <img src="./react-logo.png" width="40px" />
            </nav>
        </header>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2021 Ziroll development. All rights reserved.</small>
        </footer>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's a popular library, so I'll be 
                able to fit in with the cool kids!</li>
                <li>I'm more likely to get a job as a developer
                if I know React</li>
            </ol>
        </div>
    )
}

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))