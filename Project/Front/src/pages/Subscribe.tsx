import { useEffect, useState } from "react";
import { Benefit } from "../components/Benefit";
import { useNavigate } from "react-router-dom";
import { api } from "../services/axios";
import useWindowDimensions from "../hooks/useWindowsDimensions";

const benefitsList = [
  "Product discovery and building what matters",
  "Measuring to ensure updates are a success",
  "And much more",
];

export default function Subscribe() {
  const [email, setEmail] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [emailIsBeingSent, setEmailIsBeingSent] = useState<boolean>(false);
  const [randomAuthCode, setRandomAuthCode] = useState<string>("-");
  const [waitingForCode, setWaitingForCode] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const { width } = useWindowDimensions();

  const navigate = useNavigate();

  async function sendVerificationCode() {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email || !regex.test(email)) {
      setEmailError(true);
      return;
    }

    try {
      setEmailIsBeingSent(true);
      const mathRandomCode = Math.floor(
        100000 + Math.random() * 900000
      ).toString();
      setRandomAuthCode(mathRandomCode);

      const res = await api.post("/send", {
        email,
        randomAuthCode: mathRandomCode,
      });
      if (res.status === 200) {
        setWaitingForCode(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setEmailIsBeingSent(false);
    }
  }

  useEffect(() => {
    if (code === randomAuthCode) {
      setWaitingForCode(false);
      navigate("/success", { state: { email } });
    }
  }, [code]);

  return (
    <main className="sm:rounded-3xl max-w-[30rem] flex flex-col items-center md:justify-between mx-auto bg-white  md:flex-row-reverse md:p-4 md:max-w-[40rem] md:h-[28rem] transition-all">
      <img
        className="w-full  md:w-[18em] sm:rounded-3xl"
        src={
          width < 768
            ? "/illustration-sign-up-mobile.svg"
            : "/illustration-sign-up-desktop.svg"
        }
        alt="signup illustration"
      />
      <section className="p-8 ">
        <h1 className="font-roboto text-[2.5rem] font-bold text-slate-900">
          Stay updated!
        </h1>
        <p className="md:mb-6 md:mt-1 mt-3 font-roboto  text-slate-900 opacity-90 md:text-[0.85rem]">
          Join 60.000+ product managers receiving monthly updates on:
        </p>
        {benefitsList.map((item) => {
          return <Benefit text={item} key={item} />;
        })}

        <div className="md:mt-6 mt-10 mb-2 flex justify-between">
          <p
            className={`md:text-[0.75rem] font-roboto text-${
              waitingForCode ? "md" : "sm"
            } font-bold  text-slate-900 opacity-90 `}
          >
            {waitingForCode
              ? "A 6-digit authentication code has been sent to the provided email. To validate your email, enter the code in the field below."
              : "Email Adress"}
          </p>
          {emailError && (
            <p className="font-roboto text-xs font-bold  text-red-400 opacity-90">
              Valid email required
            </p>
          )}
        </div>
        <input
          className="border rounded-lg p-4 w-full pl-5 md:py-2"
          type={waitingForCode ? "text" : "email"}
          value={waitingForCode ? code : email}
          onChange={(e) => {
            if (waitingForCode) {
              setCode(e.target.value);
            } else {
              setEmail(e.target.value);
            }
          }}
          placeholder={waitingForCode ? "ENTER CODE HERE" : "email@company.com"}
        />

        {waitingForCode ? (
          <></>
        ) : (
          <button
            onClick={sendVerificationCode}
            className=" md:text-[0.7rem] mt-4 flex justify-center rounded-lg p-4  w-full text-zinc-50 bg-slate-900 font-bold hover:bg-gradient-to-r from-red-400 to-orange-300 transition-all duration-500"
          >
            {emailIsBeingSent ? (
              <img
                className="animate-spin md:text-[0.7rem]"
                src="/circle-notch.svg"
                alt="loading spin"
              />
            ) : (
              "Subscribe to monthly newsletter"
            )}
          </button>
        )}
      </section>
    </main>
  );
}
