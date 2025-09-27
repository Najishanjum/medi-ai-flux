import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center pt-20 px-4">
      <div className="text-center max-w-2xl mx-auto">
        <div className="glass-elevated rounded-xl p-12">
          <div className="mb-8">
            <h1 className="text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              404
            </h1>
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Page Not Found
            </h2>
            <p className="text-xl text-muted-foreground">
              Oops! The page you're looking for seems to have wandered off into the digital void.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="bg-gradient-primary hover:glow-primary">
              <Link to="/">
                <Home className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="glass hover:glass-elevated">
              <Link to="/diagnosis">
                <Search className="w-5 h-5 mr-2" />
                Start Diagnosis
              </Link>
            </Button>
          </div>

          <div className="mt-8 text-sm text-muted-foreground">
            <p>
              If you believe this is an error, please{" "}
              <Link to="/contact" className="text-primary hover:underline">
                contact our support team
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
