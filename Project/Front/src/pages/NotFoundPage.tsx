export function NotFoundPage() {
  return (
    <main className="text-white">
      <h1 className="text-4xl font-bold mb-4">404 - Page not found</h1>
      <p className="text-lg mb-4">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <p className="text-lg mb-4">
        Please check the URL you typed and try again. If you think this is an
        error, please contact us.
      </p>
      <a href="/" className="text-blue-500 underline">
        Back to home page
      </a>
    </main>
  );
}
