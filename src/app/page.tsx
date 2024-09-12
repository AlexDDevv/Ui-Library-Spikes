import Header from "./components/Header";
import NavBar from "./components/NavBar";

export default function Home() {
    return (
        <div className="bg-bgContainer w-[1440px] mx-auto rounded-3xl shadow-[inset_0_0_0_1px_#1D1D1D]">
            <Header />
            <main>
                <NavBar />
            </main>
        </div>
    );
}
