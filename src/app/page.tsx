import Header from "./components/Header";
import NavBar from "./components/NavBar";

export default function Home() {
    return (
        <div className="bg-bgContainer shadow-[inset_0_0_0_1px_#1D1D1D] h-full">
            <Header />
            <main>
                <NavBar />
            </main>
        </div>
    );
}
