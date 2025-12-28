/* eslint-disable no-undef */
import Title from "../../component/Title";
import PageTitle from "../../component/PageTitle";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Contact() {
  const [errMsg, setErrMsg] = useState(null);
  const naviget = useNavigate();

  const schema = z
    .object({
      firstname: z.string().min(2).max(9),
      lastname: z.string().min(2).max(9),
      phone: z.string().regex(/^\d{10,15}$/, "Invalid phone number"),
      email: z.string().email("Invalid email"),
      dataOfBirth: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format")
        .refine((date) => {
          const userDate = new Date(date);
          const today = new Date();
          return userDate < today;
        }, "Date of birth must be in the past"),
      password: z
        .string()
        .regex(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "Minimum 8 chars, one letter & one number"
        ),
      repassword: z.string(),
      gender: z.enum(["male", "female"], "Gender is required"),
    })
    .refine((data) => data.password === data.repassword, {
      message: "Passwords do not match",
      path: ["repassword"],
    });
  const { register, handleSubmit, formState } = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      phone: "",
      email: "",
      dataOfBirth: "",
      password: "",
      repassword: "",
      gender: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    axios
      .post("https://fakestoreapi.com/users", data)
      .then((res) => {
        if (res.data.message == "success") {
          naviget("/login");
        }
      })
      .catch((err) => setErrMsg(err.response.data.error));
  };

  const titles = [{ head: "contact section" }];

  return (
    <>
      <PageTitle title="Contact Page" />
      <div className="section-bg-white px-[8%] py-[70px]">
        <Title titles={titles} />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[750px] m-auto"
        >
          {errMsg && <h5 className="text-red-500">{errMsg}</h5>}
          <h5 className="text-red-500">{errMsg}</h5>
          <input
            type="text"
            {...register("firstname")}
            placeholder="First Name"
            className="input bg-white mt-[50px] block border border-b-[#eee] w-full"
          />
          {formState.errors.firstname && (
            <p className="text-red-500">{formState.errors.firstname.message}</p>
          )}

          <input
            type="text"
            {...register("lastname")}
            placeholder="Last Name"
            className="input bg-white mt-[50px] block border border-b-[#eee] w-full"
          />
          {formState.errors.lastname && (
            <p className="text-red-500">{formState.errors.lastname.message}</p>
          )}

          <input
            type="text"
            {...register("phone")}
            placeholder="Phone Number"
            className="input bg-white mt-[50px] block border border-b-[#eee] w-full"
          />
          {formState.errors.phone && (
            <p className="text-red-500">{formState.errors.phone.message}</p>
          )}
          <input
            type="email"
            {...register("email")}
            placeholder="User Email"
            className="input bg-white mt-[50px] block border border-b-[#eee] w-full"
          />
          {formState.errors.email && (
            <p className="text-red-500">{formState.errors.email.message}</p>
          )}
          <input
            {...register("dataOfBirth")}
            type="date"
            name="dataOfBirth"
            className="input bg-white mt-[50px] block border border-b-[#eee] w-full"
          />
          {formState.errors.dataOfBirth && (
            <p className="text-red-500">
              {formState.errors.dataOfBirth.message}
            </p>
          )}
          <div className="mt-2 text-gray-500">
            <label htmlFor="male">male</label>
            <input
              {...register("gender")}
              type="radio"
              id="male"
              value="male"
              name="gender"
              className="radio radio-accent"
            />
            <label htmlFor="female">female</label>
            <input
              {...register("gender")}
              type="radio"
              id="female"
              value="female"
              name="gender"
              className="radio radio-accent"
            />
            {formState.errors.gender && (
              <p className="text-red-500">{formState.errors.gender.message}</p>
            )}
          </div>
          <input
            type="password"
            {...register("password")}
            placeholder="User Password"
            className="input bg-white mt-[50px] block border border-b-[#eee] w-full"
          />
          {formState.errors.password && (
            <p className="text-red-500">{formState.errors.password.message}</p>
          )}
          <input
            type="password"
            {...register("repassword")}
            placeholder="User repassword"
            className="input bg-white mt-[50px] block border border-b-[#eee] w-full"
          />
          {formState.errors.repassword && (
            <p className="text-red-500">
              {formState.errors.repassword.message}
            </p>
          )}

          <button className="btn mt-[30px] bg-main text-white">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
