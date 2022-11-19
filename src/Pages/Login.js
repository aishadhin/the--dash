import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  if(user){
    console.log(user)
  }
  return (
    <div className="flex pt-14 pb-12 justify-center">
      <div className=" w-96 shadow">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-blue">Login</h2>

          <form className="w-full">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>

              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Please provide a valid email address",
                  },
                })}
              />

              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Your Password</span>
              </label>

              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password should be minimum 6 character or long",
                  },
                })}
              />

              <label className="label">
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
            </div>
            
            <input
            
              className="btn btn-blue w-full my-3 max-w-xs text-white"
              type="submit"
              value="Login"
            />
          </form>

          <span>
            Haven't any account?{" "}
            <Link to="/signup" className="text-blue">
              Create An Account
            </Link>
          </span>

          <div className="divider">OR</div>

          <button
              onClick={() => signInWithGoogle()}
            className="btn btn-blue btn-outline w-full my-3 max-w-xs"
          >
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
