import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function SignInPage() {
  return (
    <div className=" bg-white w-[100%] lg:w-[40%] mx-auto h-[100%]">
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
        {/* Logo y titulo */}
        <div className="sm:mx-auto sm:w-ful sm:max-w-sm">
          <img
            className="mx-auto h-20 2xl:h-40"
            src="https://media.discordapp.net/attachments/498604686077722655/1153122372115775559/logo-rectangular.jpg"
            alt="Your Company"
          />
          <h2 className="mt-4 text-center text-2xl 2xl:text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Crear cuenta
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-4 2xl:space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-md 2xl:text-xl font-medium leading-6 text-gray-900"
              >
                Correo
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="correo@sitio.com"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-md 2xl:text-xl font-medium leading-6 text-gray-900"
                >
                  Contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-md 2xl:text-xl font-medium leading-6 text-gray-900"
                >
                  Confirmar contraseña
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="confirm-password"
                  name="confirm-password"
                  type="confirm-password"
                  placeholder="••••••••"
                  autoComplete="current-confirm-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-900 px-3 py-1.5 text-sm 2xl:text-lg font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Crear cuenta
              </button>
            </div>
          </form>
          <div className="mt-2">
            <Link href={'/user/login'} className="font-bold">Iniciar Sesion</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
