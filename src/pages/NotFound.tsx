import { Layout } from "@/components/layout";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
export default function NotFound() {
  return (
    <Layout>
      <section className="py-32 bg-background">
        <div className="section-container text-center">
          <h1 className="font-heading text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">The page you're looking for doesn't exist.</p>
          <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:brightness-110 transition-all"><Home className="h-5 w-5" />Back to Home</Link>
        </div>
      </section>
    </Layout>
  );
}
