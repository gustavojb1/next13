import { Repo } from "@/components/Repo";
import { User } from "@/components/User";
import Link from "next/link";

export default function Dashboard() {
  // const response = await fetch("https://api.github.com/users/diego3g", {
  //   next: {
  //     revalidate: 30,
  //     //essa configuração recarregará os dados do fetch a cada 30 segundos dentro do servidor
  //   },
  // });

  // const response = await fetch("https://api.github.com/users/diego3g", {
  //   cache: "force-cache",
  //   //essa configuração fará a requisição ser guardada em cache, fazendo apenas uma requisição
  //   // e enviado a mesma requisição guardada em cache para todos usuários
  // });

  // const response = await fetch("https://api.github.com/users/diego3g", {
  //   cache: "no-store",
  //   //essa configuração fará executar uma requisição diferente para cada usuário (não guardará em cache)
  // });

  // const user = await response.json();




  // EXECUTAR DUAS REQUISIÇÕES AO MESMO TEMPO SEM UMA DEPENDER DA OUTRA !!!!!
  // const [resposta1, resposta2] = await Promisse.all([]
  //   fetch(''),
  //   fetch('')
  // ])





  return (
    <div>
      <h1 className="font-extrabold">Dashboard</h1>
      <Link href="/">Home</Link>
      <br />
      <Link href="/main/products/01">Produtc 01</Link>

      <div className="p-20">
        <User />

      </div>
    </div>
  );
}
