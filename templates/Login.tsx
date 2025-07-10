import { useState } from "react";
import consts from "consts";
import useGlobalization from "hooks/useGlobalization";
import Cookies from "universal-cookie";

const Login = ({
  redirectPath,
  slug,
}: {
  slug: string;
  redirectPath?: string;
}) => {
  const [password, setPassword] = useState("");
  const { translate } = useGlobalization();
  return (
    <form className="min-h-[320px]: flex h-[100vh] flex-col pt-[75px] max-sm:pt-[60px]">
      <input
        type="text"
        placeholder={translate("login.password", "Enter password")}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="flex-1 bg-[--background-color] text-center text-[3rem] text-neutral-950 placeholder-neutral-600 focus:bg-neutral-100 dark:text-white dark:focus:bg-neutral-900"
      />
      <button
        type="submit"
        className="bg-amber-500 py-5 text-[1.4rem] font-semibold text-white hover:bg-amber-600"
        style={{ fontVariant: "all-small-caps" }}
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
        {translate("login.submit", "Login")}
      </button>
    </form>
  );
};

export default Login;
