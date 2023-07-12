import { cookies, headers } from "next/dist/client/components/headers";
import Link from "next/link";

export default function SignIn() {

  const userCookies = cookies()
  const userHeaders = headers()

  return (
    <div>
      <h1 className="font-extrabold">Login</h1>
      <div className="p-5">
        {/* {JSON.stringify(userCookies.getAll(), null, 2)} */}
        {
           userCookies.getAll().map((cookie) => (
            <div key={cookie.name}>
              <p>Name: {cookie.name}</p>
              <p>Value: {cookie.value}</p>
            </div>
          ))
        }
      </div>
      <div className="p-5">
        {JSON.stringify(userHeaders.entries(), null, 2)}
      </div>
      <div className="p-5"></div>
      <Link href="/main">Dashboard</Link>
    </div>
  );
}
