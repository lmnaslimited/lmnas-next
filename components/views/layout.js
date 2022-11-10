import  { Footer } from "../footer";
import { Nav }from "../nav";

export default function Layout({ children }) {
    return (
        <>
            <Nav />

            <main>{children}</main>
            <Footer />
        </>
    )
}