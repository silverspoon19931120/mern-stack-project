import { Routes, Route, Navigate } from "react-router-dom";
import { Footer, Navbar } from "src/widgets/layout";
import routes from "src/routes";

function App() {
  return (
    <>
      <div className="absolute left-2/4 z-10 mx-auto -translate-x-2/4 w-full">
        <Navbar routes={routes} />
      </div>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/product" replace />} />
      </Routes>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default App;
