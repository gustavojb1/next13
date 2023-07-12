export async function ComponentComDelayMaior() {

  await new Promise(resolve => setTimeout(resolve, 4000))

  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/1",
    {
      cache: "no-store",
    }
  );

  const repos = await response.json();

  return (
    <div>
      <h1 className="font-extrabold text-4xl">Repositório</h1>

      <div className="p-20">
        <pre>{JSON.stringify(repos, null, 2)}</pre>
      </div>
    </div>
  );
}
