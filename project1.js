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
function temporaryname() {
    return (
        <div>
        <img src="./react-logo.png" width= "80px" />
        <h1>Fun facts About React</h1>
        <ul>
            <li>Was First released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Power thousands os enterprise apps, including mobile apps</li>
        </ul>
    </div>
    )
}

ReactDOM.render(temporaryname(),document.getElementById("root"))