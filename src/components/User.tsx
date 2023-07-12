import { Repo } from "./Repo";

export async function User() {
  const response = await fetch("https://api.github.com/users/gustavojb1", {
    cache: "force-cache"
  });
  

  const user = await response.json();

  return (
    <div>
      <h1 className="font-extrabold text-4xl">USER</h1>

      <div className="p-20">
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
      <Repo/>

    </div>
  );
}