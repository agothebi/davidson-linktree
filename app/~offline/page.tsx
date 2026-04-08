export default function OfflinePage() {
  return (
    <div className="flex min-h-full flex-1 flex-col items-center justify-center bg-stone-50 px-6 py-16 text-center">
      <div className="max-w-sm rounded-3xl border border-stone-200/80 bg-white px-6 py-8 shadow-clay">
        <h1 className="text-xl font-extrabold text-stone-900">You are offline</h1>
        <p className="mt-2 text-sm font-medium text-muted">
          Davidson Hub needs a connection to open most links. Check your network and
          try again.
        </p>
      </div>
    </div>
  );
}
