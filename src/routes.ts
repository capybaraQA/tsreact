// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

// other
import {FC} from "react";

// interface
interface Route {
    key: string,
    title: string,
    path: string,
    enabled: boolean,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'home-route',
        title: 'Home',
        path: 'tsreact/home',
        enabled: true,
        component: Home
    },
    {
        key: 'about-route',
        title: 'About',
        path: 'tsreact/about',
        enabled: true,
        component: About
    },
    {
        key: 'products-route',
        title: 'Products',
        path: 'tsreact/products',
        enabled: true,
        component: Products
    }
]