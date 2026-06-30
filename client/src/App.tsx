/* ============================================================
   BETTER KNOW BO — App Router
   All 20 pages wired to /pg/[slug] routes
   ============================================================ */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import ChatWidget from "./components/ChatWidget";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import HomePage from "./pages/Home";
import CriminalDefensePage from "./pages/CriminalDefense";
import DUIDefensePage from "./pages/DUIDefense";
import PersonalInjuryPage from "./pages/PersonalInjury";
import TruckWrecksPage from "./pages/TruckWrecks";
import MotorcycleAccidentsPage from "./pages/MotorcycleAccidents";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import ReviewsPage from "./pages/Reviews";
import FAQsPage from "./pages/FAQs";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsPage from "./pages/Terms";
import DisclaimerPage from "./pages/Disclaimer";

// Area Pages
import NashvillePage from "./pages/areas/Nashville";
import FranklinPage from "./pages/areas/Franklin";
import BrentwoodPage from "./pages/areas/Brentwood";
import LebanonPage from "./pages/areas/Lebanon";
import MountJulietPage from "./pages/areas/MountJuliet";
import AshlandCityPage from "./pages/areas/AshlandCity";
import DicksonPage from "./pages/areas/Dickson";
import MurfreesboroPage from "./pages/areas/Murfreesboro";
import SmyrnaPage from "./pages/areas/Smyrna";
import ColumbiaPage from "./pages/areas/Columbia";
import MountPleasantPage from "./pages/areas/MountPleasant";

function Router() {
  return (
    <Switch>
      {/* Root redirect */}
      <Route path="/">
        <Redirect to="/pg/home" />
      </Route>

      {/* Main Pages */}
      <Route path="/pg/home" component={HomePage} />
      <Route path="/pg/criminal-defense-nashville" component={CriminalDefensePage} />
      <Route path="/pg/dui-defense-nashville" component={DUIDefensePage} />
      <Route path="/pg/personal-injury-nashville" component={PersonalInjuryPage} />
      <Route path="/pg/truck-wreck-attorney-nashville" component={TruckWrecksPage} />
      <Route path="/pg/motorcycle-accident-attorney-nashville" component={MotorcycleAccidentsPage} />
      <Route path="/pg/about" component={AboutPage} />
      <Route path="/pg/contact" component={ContactPage} />
      <Route path="/pg/reviews" component={ReviewsPage} />
      <Route path="/pg/faqs" component={FAQsPage} />
      <Route path="/pg/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/pg/terms-and-conditions" component={TermsPage} />
      <Route path="/pg/disclaimer" component={DisclaimerPage} />

      {/* Area Pages */}
      <Route path="/pg/nashville-criminal-defense-lawyer" component={NashvillePage} />
      <Route path="/pg/franklin-criminal-defense-lawyer" component={FranklinPage} />
      <Route path="/pg/brentwood-criminal-defense-lawyer" component={BrentwoodPage} />
      <Route path="/pg/lebanon-criminal-defense-lawyer" component={LebanonPage} />
      <Route path="/pg/mount-juliet-criminal-defense-lawyer" component={MountJulietPage} />
      <Route path="/pg/ashland-city-criminal-defense-lawyer" component={AshlandCityPage} />
      <Route path="/pg/dickson-criminal-defense-lawyer" component={DicksonPage} />
      <Route path="/pg/murfreesboro-criminal-defense-lawyer" component={MurfreesboroPage} />
      <Route path="/pg/smyrna-criminal-defense-lawyer" component={SmyrnaPage} />
      <Route path="/pg/columbia-criminal-defense-lawyer" component={ColumbiaPage} />
      <Route path="/pg/mount-pleasant-criminal-defense-lawyer" component={MountPleasantPage} />

      {/* 404 */}
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
          <ChatWidget />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
