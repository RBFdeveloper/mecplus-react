import Header from '../components/header';
import Welcome from '../components/welcome';
import Portes from '../components/Portes';
import Services from '../components/Services';
import Footer from '../components/Footer';
import ManutencaoTipo from '../components/ManutencaoTipo';

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Welcome />
        <ManutencaoTipo />
        <Portes />
        <Services />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;