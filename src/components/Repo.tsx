export async function Repo() {
  const response = await fetch("https://api.github.com/users/gustavojb1/repos",{
    cache: "force-cache"
  });

  const repos = await response.json();

  return (
    <div>
      <h1 className="font-extrabold text-4xl">Repos</h1>

      <div className="p-20">
        <pre>{JSON.stringify(repos, null, 2)}</pre>
      </div>
    </div>
  );
}