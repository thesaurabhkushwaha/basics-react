import {
    createBrowserRouter,
    Link,
  } from "react-router-dom";
import MyButton from "../MyBotton/MyButton";

export default function getBrowserRouter(){
    return createBrowserRouter([
        {
          path: "/",
          element: (
            <>
              <h1>Hello World</h1>
              <MyButton></MyButton>
              <Link to="about">About Us</Link><br/>
              <Link to="base">About Base</Link><br/>
            </>
          ),
        },
        {
          path: "about",
          element: <div>About</div>,
        },
        {
            path: "base",
            element: <div>basenabi duru</div>,
          },
      ]);
}