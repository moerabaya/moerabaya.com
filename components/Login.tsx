import { useState } from "react"
import Cookies from "universal-cookie"
import consts from "consts"
import form from "styles/components/Form.module.scss"
import login from "styles/components/Login.module.scss"
import classnames from 'classnames/bind';

const Login = ({ redirectPath }:any) => {
  const [password, setPassword] = useState("")

  return (
    <article className={classnames("project-content", login.loginForm)}>
      <div className={classnames("container", login.container)}>
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
              e.preventDefault()
              const cookies = new Cookies()
              cookies.set(consts.SiteReadCookie, password, {
                path: "/",
              })
              window.location.href = redirectPath ?? "/"
            }}
          >
            Login
          </button>
        </form>
      </div>
    </article>
  )
}

export default Login