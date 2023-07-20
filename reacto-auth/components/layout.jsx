import Nav from "./Nav";
 const Layout = ({children}) => {
    <div>
        <Nav/>
        <main>{children}</main>
    </div>
}

export default Layout