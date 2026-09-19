
import { createBrowserRouter } from "react-router";
import Home from "../../Pages/Home";
import HowItWork from "../../Pages/HowItWork";
import Root from "../Root";

const router = createBrowserRouter([
    {
        path: "/", Component: Root, children: [
            { index: true, Component: Home },
            { path: '/howItWork', Component: HowItWork }
        ]
    }
]);
export default router