import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-neutral-900 text-white px-6 py-4">
      <header className="border-b border-neutral-700 pb-4 mb-6">
        <h1 className="text-3xl font-bold">OTSI Football Agency</h1>
        <p className="text-sm text-neutral-400">
          Elite Player Representation. Global Reach. Career Excellence.
        </p>
      </header>

      <main>{children}</main>

      <footer className="mt-12 pt-4 border-t border-neutral-700 text-xs text-neutral-500">
        © 2025 Osio &TEE Solutions International Limited. All rights reserved.
      </footer>
    </div>
  );
}
