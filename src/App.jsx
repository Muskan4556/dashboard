import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";
import Header from "./scenes/global/Header";
import SidebarC from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
// import Teams from "./scenes/teams";
// import Invoices from "./scenes/invoices";
// import Contacts from "./scenes/contacts";
// import Bar from "./scenes/bar";
// import Line from "./scenes/line";
// import Pie from "./scenes/pie";
// import Form from "./scenes/form";
// import FAQ from "./scenes/faq";
// import Geography from "./scenes/geography";
// import Calender from "./scenes/calender";

// CssBaseline - reset css to default
function App() {
  const mode = useSelector((state) => state.theme);
  const theme = createTheme(themeSettings(mode));
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <SidebarC />
          <main className="content">
            <Header />
            <Dashboard />
          </main>
        </>
      ),
    },
    // {
    //   path: "/teams",
    //   element: <Teams />,
    // },
    // {
    //   path: "/invoices",
    //   element: <Invoices />,
    // },
    // {
    //   path: "/contacts",
    //   element: <Contacts />,
    // },
    // {
    //   path: "/bar",
    //   element: <Bar />,
    // },
    // {
    //   path: "/line",
    //   element: <Line />,
    // },
    // {
    //   path: "/pie",
    //   element: <Pie />,
    // },
    // {
    //   path: "/form",
    //   element: <Form />,
    // },
    // {
    //   path: "/faq",
    //   element: <FAQ />,
    // },
    // {
    //   path: "/geography",
    //   element: <Geography />,
    // },
    // {
    //   path: "/calender",
    //   element: <Calender />,
    // }
  ]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <RouterProvider router={appRouter} />
      </div>
    </ThemeProvider>
  );
}

export default App;
