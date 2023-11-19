import { Outlet } from "react-router-dom";

export const AuthTemplate = (props) => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 w-full h-full flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 w-full">
        <span className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          {props.title}
        </span>
        <div className="w-full h-auto bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              {props.subTitle}
            </h1>
            <form onSubmit={props.onSubmit} className="space-y-4 md:space-y-6 w-full">
              {props.children || <Outlet />}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
