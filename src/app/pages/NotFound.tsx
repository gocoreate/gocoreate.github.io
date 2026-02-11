import { Link } from 'react-router';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center px-4">
        <h1 className="text-9xl text-blue-600 mb-4">404</h1>
        <h2 className="text-4xl mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Home size={20} />
            Go Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
