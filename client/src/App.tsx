import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Assessment from "@/pages/assessment";
import Privacy from "@/pages/privacy";
import NotFound from "@/pages/not-found";

// Service pages
import HelpDesk from "@/pages/services/help-desk";
import HIPAACompliance from "@/pages/services/hipaa-compliance";
import Microsoft365 from "@/pages/services/microsoft-365";
import SecurityManagement from "@/pages/services/security-management";
import CloudIntegration from "@/pages/services/cloud-integration";
import EHRIntegration from "@/pages/services/ehr-emr-integration";
import CRMMultiChannel from "@/pages/services/crm-multi-channel";
import MedSpaAutomation from "@/pages/services/medspa-automation";

// Resource pages
import HIPAAGuide from "@/pages/resources/hipaa-guide";
import SecurityChecklist from "@/pages/resources/security-checklist";
import CaseStudies from "@/pages/resources/case-studies";
import Blog from "@/pages/resources/blog";
import SupportPortal from "@/pages/resources/support-portal";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/assessment" component={Assessment} />
      <Route path="/privacy" component={Privacy} />
      
      {/* Service Routes */}
      <Route path="/services/help-desk" component={HelpDesk} />
      <Route path="/services/hipaa-compliance" component={HIPAACompliance} />
      <Route path="/services/microsoft-365" component={Microsoft365} />
      <Route path="/services/security-management" component={SecurityManagement} />
      <Route path="/services/cloud-integration" component={CloudIntegration} />
      <Route path="/services/ehr-emr-integration" component={EHRIntegration} />
      <Route path="/services/crm-multi-channel" component={CRMMultiChannel} />
      <Route path="/services/medspa-automation" component={MedSpaAutomation} />
      
      {/* Resource Routes */}
      <Route path="/resources/hipaa-guide" component={HIPAAGuide} />
      <Route path="/resources/security-checklist" component={SecurityChecklist} />
      <Route path="/resources/case-studies" component={CaseStudies} />
      <Route path="/resources/blog" component={Blog} />
      <Route path="/resources/support-portal" component={SupportPortal} />
      
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
