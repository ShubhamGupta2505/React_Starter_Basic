// function Navbar(){
//     return (
//         <nav className="navbar navbar-expand-lg bg-light">
//         <div className="container-fluid">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">Home</a>
//                 </li>
//                 <li className="nav-item">
//                 <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Dropdown
//                 </a>
//                 <ul className="dropdown-menu">
//                     <li><a className="dropdown-item" href="#">Action</a></li>
//                     <li><a className="dropdown-item" href="#">Another action</a></li>
//                     <li><hr className="dropdown-divider"></li>
//                     <li><a className="dropdown-item" href="#">Something else here</a></li>
//                 </ul>
//                 </li>
//                 <li className="nav-item">
//                 <a className="nav-link disabled">Disabled</a>
//                 </li>
//             </ul>
//             <form className="d-flex" role="search">
//                 <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search">
//                 <button className="btn btn-outline-success" type="submit">Search</button>
//             </form>
//             </div>
//         </div>
//         </nav>
//     )
// }
// function MainContent(){
//     return (
//         <h1>I'm learning React </h1>
//     )
// }
// ReactDOM.render(
//     <div>
//         {/* <Navbar /> */}
//         <MainContent />
//         </div>,
//     document.getElementById("root"))

// const h1 = document.createElement("h1")
// h1.textContent = "This is imperative way to program "
// h1.className = "header"
// console.log(h1)
// const element = <h1 className="header" >This is JSX </h1>
//console.log(element)

const page = (
    <div>
        <h1  >This is awesome website </h1>
        <h3> Let see why it is awesome : </h3>
        <ol>
            <li>It is created by me</li>
            <li>It is user friendly </li>
            <li>it is useful for everyone </li>
        </ol>
        <p>This is paragraph </p>
    </div>
)

// const nav = (
//     <nav>
//         <h1>Website</h1>
//         <ul><li>Pricing</li></ul>
//         <ul><li>About</li></ul>
//         <ul><li>Contacts</li></ul>
//     </nav>
// )
// ReactDOM.render(
//     nav,
//     document.getElementById("root"))

// document.getElementById("root").append(JSON.stringify(nav))
ReactDOM.render(page,document.getElementById("root"))