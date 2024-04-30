import AppProvider from "./hooks";
import RouterProvider from "./routes/RouterProvider";

function App() {
  return (
    <div className="min-w-full min-h-screen bg-slate-900 text-zinc-100 text-sm md:text-base">
      <AppProvider>
        <RouterProvider />
      </AppProvider>
    </div>
  );
}

export default App;
