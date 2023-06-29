import { App } from "App";
import { Blog } from "Blog";
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
      <Route path={"/"} element={<App />} />
      <Route element={<PageLayout />}>
        <Route path={"/blog"} element={<Blog />} />
        <Route path={""} element={<Navigate replace to={"/"} />} />
        <Route path={"*"} element={<Navigate replace to={"/"} />} />
      </Route>
    </>
  )
);
const Router: FC = () => {
  return <RouterProvider router={router} />;
};

export default memo(Router);
