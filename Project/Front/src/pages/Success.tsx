import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

type locationProps = {
  state: {
    email: string;
  };
};

export function Success() {
  const location = useLocation() as locationProps;
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state) {
      navigate("/");
      return;
    }
  }, [location, navigate]);

  if (!location.state) {
    return null;
  }

  const { email } = location.state;
  return (
    <main className="sm:mx-auto max-w-[24rem] p-8 md:p-12 flex flex-col min-h-[100vh] md:min-h-[24rem]  justify-between bg-white sm:rounded-xl transition-all ">
      <div className="mt-24 md:mt-0">
        <img className="w-20 md:w-14" src="/icon-list.svg" alt="icon list" />
        <h1 className="font-roboto text-[2.5rem] font-bold text-slate-900 leading-10 mt-12 md:mt-6">
          Thanks for subscribing!
        </h1>
        <p className="mt-3 font-roboto text-slate-900 opacity-90 md:text-[0.72rem]">
          You have successfully signed up your email
          <strong> {email}</strong> to our newsletter. We will send you
          occasional updates on how awesome we are.
        </p>
      </div>
      <button className="mt-4 rounded-lg p-4 w-full text-zinc-50 bg-slate-900 font-bold hover:bg-gradient-to-r from-red-400 to-orange-300">
        <a href="/">Dismiss message</a>
      </button>
    </main>
  );
}
