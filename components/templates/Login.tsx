import { useState } from "react";
import Cookies from "universal-cookie";
import consts from "consts";
import form from "styles/components/Form.module.scss";
import login from "styles/components/Login.module.scss";
import cn from "classnames";

const Login = ({
  redirectPath,
  slug,
}: {
  slug: string;
  redirectPath?: string;
}) => {
  const [password, setPassword] = useState("");

  return (
    <article className={cn("project-content", login.loginForm)}>
      <div className={cn("container", login.container)}>
        <form className={form.styles}>
          <label className={form["input-element"]}>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </label>
          <button
            type="submit"
            className="mt-3 bg-green-400 text-white p-2 font-bold rounded hover:bg-green-600"
            onClick={(e) => {
              e.preventDefault();
              const cookies = new Cookies();
              if (slug)
                cookies.set(
                  consts.SiteReadCookie,
                  {
                    [slug]: password,
                  },
                  {
                    path: "/",
                  }
                );
              window.location.href = redirectPath ?? "/";
            }}
          >
            Login
          </button>
        </form>
      </div>
    </article>
  );
};

export default Login;
