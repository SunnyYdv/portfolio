import { App } from "App";
import { Blog } from "Blog";
import { Platforms } from "Platforms";
import { About } from "About";
import { PageLayout } from "components";
import { FC, memo } from "react";
import {
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router";
import { createBrowserRouter } from "react-router-dom";
// import { PageLayout } from "./layouts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={"/home"} element={<App />} />
      <Route element={<PageLayout />}>
        <Route path={"/blog"} element={<Blog />} />
        <Route path={"/platforms"} element={<Platforms />} />
        <Route path={"/about"} element={<About />} />
        <Route path={""} element={<Navigate replace to={"/home"} />} />
        <Route path={"*"} element={<Navigate replace to={"/home"} />} />
      </Route>
    </>
  )
);
const Router: FC = () => {
  return <RouterProvider router={router} />;
};

export default memo(Router);
