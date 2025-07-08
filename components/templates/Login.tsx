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
    <form className="pt-[75px] max-sm:pt-[60px] h-[100vh] flex  flex-col min-h-[320px]:">
      <input
        type="text"
        placeholder={translate("login.password", "Enter password")}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="flex-1 text-center text-[3rem] bg-[--background-color] text-neutral-950 dark:text-white placeholder-neutral-600 focus:bg-neutral-100 dark:focus:bg-neutral-900"
      />
      <button
        type="submit"
        className="py-5 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-[1.4rem]"
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
