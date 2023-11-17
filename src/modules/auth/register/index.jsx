import { Button, ControlledFieldCheckbox, ControlledFieldText, AuthTemplate } from "@/components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "./hook";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const AuthRegisterModule = () => {
  const validationSchema = z.object({
    fullname: z
      .string()
      .min(1, { message: "Nama lengkap harus diisi" })
      .max(60, { message: "Nama lengkap tidak boleh lebih dari 60 karakter" }),
    email: z
      .string()
      .min(1, { message: "Email harus diisi" })
      .email({
        message: "Email tidak valid",
      })
      .max(60, { message: "Email tidak boleh lebih dari 60 karakter" }),
    password: z
      .string()
      .regex(new RegExp(".*[A-Z].*"), { message: "Password harus ada huruf kapital" })
      .min(1, { message: "Password harus diisi" })
      .max(60, { message: "Password tidak boleh lebih dari 60 karakter" })
      .regex(new RegExp(".*[a-z].*"), { message: "Password harus ada huruf kecil" })
      .regex(new RegExp(".*[0-9].*"), { message: "Password harus ada angka" })
      .regex(new RegExp(".*[`~<>?,./!@#$%^&*()\\-_+=\"'|{}\\[\\];:\\\\].*"), {
        message: "Password harus ada karakter khusus atau simbol",
      }),
  });

  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");

  console.log(errorMessage);

  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid, errors },
  } = useForm({
    mode: "all",
    resolver: zodResolver(validationSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
  });

  const { mutate, isLoading } = useLogin();

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/me", { replace: true });
      },
      onError: (error) => {
        setErrorMessage(error.response?.data?.message);
      },
    });
  });

  return (
    <AuthTemplate onSubmit={onSubmit} title="Register" subTitle="Daftarkan Akun anda">
      <ControlledFieldText
        control={control}
        size="md"
        label="Nama Lengkap"
        type="text"
        name="fullname"
        placeholder="Masukkan nama lengkap anda"
        status={
          watch("email") === "" && !errors.fullname ? "none" : errors.fullname ? "error" : "success"
        }
        message={
          watch("email") === "" && !errors.fullname
            ? ""
            : errors.fullname
            ? errors.fullname?.message
            : "Email Valid"
        }
      />

      <ControlledFieldText
        control={control}
        size="md"
        label="Email"
        type="email"
        name="email"
        placeholder="Masukkan email anda"
        status={
          watch("email") === "" && !errors.email ? "none" : errors.email ? "error" : "success"
        }
        message={
          watch("email") === "" && !errors.email
            ? ""
            : errors.email
            ? errors.email?.message
            : "Email Valid"
        }
      />
      <ControlledFieldText
        control={control}
        size="md"
        label="Kata Sandi"
        type="password"
        name="password"
        placeholder="Masukkan email anda"
        status={
          watch("password") === "" && !errors.password
            ? "none"
            : errors.password
            ? "error"
            : "success"
        }
        message={
          watch("password") === "" && !errors.password
            ? ""
            : errors.password
            ? errors.password?.message
            : "Kata Sandi Valid"
        }
      />
      <div className="flex items-center justify-between">
        <ControlledFieldCheckbox control={control} text="Ingat saya" name="remember" />
        <a
          href="#"
          className="text-sm font-medium text-primary-600 hover:underline dark:text-white"
        >
          Lupa Kata Sandi?
        </a>
      </div>
      <Button disabled={!isValid} loading={isLoading} type="submit">
        Masuk sekarang
      </Button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Belum punya akun?{" "}
        <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
          Daftar Sekarang
        </a>
      </p>
    </AuthTemplate>
  );
};
