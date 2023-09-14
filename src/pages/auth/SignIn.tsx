// eslint-disable-next-line @typescript-eslint/no-var-requires
import signin from "../../assets/images/signin.jpeg"
export default function SignIn() {
  return (
    <>
      <div className="flex justify-between min-h-full  flex-1">
        <div
          style={{ flex: "3" }}
          className="flex flex-1 flex-col justify-around px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
        >
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <h1 className="text-center font-manrope text-3xl mb-7">
                App's Logo goes here
              </h1>
            </div>
            <div>
              <h1 className="text-3xl text-center font-manrope">
                Welcome Back
              </h1>
              <h3 className="text-base text-center leading-9 tracking-tight font-manrope text-gray-400">
                Sign in to your account
              </h3>
            </div>

            <div className="mt-10">
              <div>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm leading-6 font-manrope text-gray-600"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        autoComplete="email"
                        required
                        className="block w-full pl-4 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium font-manrope leading-6 text-gray-600"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        placeholder="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full pl-4 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 font-manrope text-gray-700"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-6">
                      <a
                        href="#"
                        className="font-semibold font-manrope text-primary hover:text-primary"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full font-manrope justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-16 lg:mt-0">
            <p className="font-manrope text-gray-500 text-sm text-center">
              All rights reserved, {new Date().getFullYear()}. Powered by
              Molidom
            </p>
          </div>
        </div>
        <div
          style={{ flex: "2" }}
          className="relative hidden w-0  lg:block lg:h-screen"
        >
          <img
            className="absolute inset-0 h-full w-full object-cover "
            src={signin}
            alt="signin"
          />
        </div>
      </div>
    </>
  );
}
