import { signIn } from "next-auth/client";
import Image from "next/image";

function Login() {
  return (
    <div className="grid place-items-center">
      <Image
        src="https://links.papareact.com/t4i"
        height={400}
        width={400}
        objectFit="contain"
      />
      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 cursor-pointer rounded-full text-white text-center"
      >
        Login With Facebook
      </h1>
    </div>
  );
}

export default Login;
