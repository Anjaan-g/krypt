import "./App.css";

import { Loader, Navbar, Welcome, Footer, Services, Transactions } from "./components";

import { TransactionProvider } from "./context/TransactionContext";

const App = () => {
    return (
        <div className="min-h-screen">
            <TransactionProvider>
                <div className="gradient-bg-welcome">
                    <Navbar />
                    <Welcome />
                </div>

                <Services />
                <Transactions />
                <Footer />
            </TransactionProvider>
        </div>
    );
};

export default App;
