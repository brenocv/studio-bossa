import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-jacaranda px-6 text-center">
      <p className="font-italiana text-7xl text-couro-cognac-light sm:text-9xl">
        404
      </p>
      <h1 className="mt-6 font-italiana text-3xl text-linho-cru sm:text-4xl">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-md text-base text-linho-cru/70">
        A página que procura pode ter sido movida ou não existe mais. Volte ao
        início do Studio Bossa.
      </p>
      <Link
        href="/"
        className="btn-shine btn-lift mt-8 inline-flex items-center gap-2 rounded-full bg-couro-cognac px-7 py-3.5 text-base font-semibold text-linho-cru hover:bg-couro-cognac-light hover:shadow-xl hover:shadow-couro-cognac/30"
      >
        Voltar ao início
      </Link>
    </main>
  );
}
