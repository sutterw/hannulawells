import Homepage from "@/pages/home";
import Services from "@/pages/services";
import Content from "@/pages/content";
import About from "@/pages/about";
import Contact from "@/pages/contact";
import Quote from "@/pages/quote";

export default function Home() {
    return (
        <>
            <div className="flex flex-col items-center px-4 pt-32">
                <Homepage />
                <Services />
                <Content />
                <About />
                <Contact />
                <Quote />
            </div>
        </>
    );
}
