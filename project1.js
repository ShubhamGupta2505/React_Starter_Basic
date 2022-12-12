// const page1 = (
//     <div>
//         <img src="./react-logo.png" width= "80px" />
//         <h1>Fun facts About React</h1>
//         <ul>
//             <li>Was First released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Power thousands os enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )
// function Temporaryname() {
//     return (
//         <div>
//         <img src="./react-logo.png" width= "80px" />
//         <h1>Fun facts About React</h1>
//         <ul>
//             <li>Was First released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K stars on Github</li>
//             <li>Is maintained by Facebook</li>
//             <li>Power thousands os enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
//     )
// }
function Header() {
    return (
       <div>
           <header>
                <nav className="nav">
                    <img src ="./react-logo.png" className ="image-logo"/>
                    <ul className = "nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
       </div> 
    )
}
function Footer() {
    return (
        <footer>2022 XYZ development. All rights reserved .</footer>
    )
}
function MainContent(){
    return(
        <div>
            <h1>Reason I am excited to learn React : </h1>
            <ol>
                <li>It is a popular library </li>
                <li>It is fun to learn and creative.</li>
                <li>It  is more likely to get a job as developer .</li>
            </ol>
        </div>
    )
}
function Page() {
    return (
        <div>
            <Header />
            <MainContent/>
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />,document.getElementById("root"))