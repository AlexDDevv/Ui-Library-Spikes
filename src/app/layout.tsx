import "../../assets/styles/globals.css";
import "../../assets/styles/main.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="bg-background flex items-center justify-center pt-12">
                {children}
            </body>
        </html>
    );
}
