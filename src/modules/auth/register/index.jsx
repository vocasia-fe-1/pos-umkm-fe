import { Button, ControlledFieldCheckbox, ControlledFieldText, AuthTemplate } from "@/components";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRegister } from "./hook";
import { z } from "zod";
import { useNavigate, Link } from "react-router-dom";
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
    confirm_password: z
      .string()
      .min(1, { message: "Konfirmasi password harus diisi" })
      .refine((val) => val === watch("password"), {
        message: "Konfirmasi password tidak sama",
      }),
    toc: z
      .literal(true, { message: "Anda harus menyetujui syarat dan ketentuan" })
      .refine((val) => val, {
        message: "Anda harus menyetujui syarat dan ketentuan",
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
      confirm_password: "",
      toc: false,
    },
  });

  const { mutate, isLoading } = useRegister();

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
    <AuthTemplate onSubmit={onSubmit} subTitle="Buat Akun anda sekarang">
      <section className="flex gap-x-4">
        <ControlledFieldText
          control={control}
          size="md"
          label="Nama Lengkap"
          type="text"
          name="fullname"
          placeholder="Masukkan nama lengkap anda"
          status={
            watch("fullname") === "" && !errors.fullname
              ? "none"
              : errors.fullname
              ? "error"
              : "success"
          }
          message={
            watch("fullname") === "" && !errors.fullname
              ? ""
              : errors.fullname
              ? errors.fullname?.message
              : "Nama Lengkap Valid"
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
      </section>
      <ControlledFieldText
        control={control}
        size="md"
        label="Kata Sandi"
        type="password"
        name="password"
        hint="Kata sandi setidaknya ada 8 karakter, 1 huruf kapital, 1 angka, dan 1 karakter khusus"
        autoComplete="new-password"
        placeholder="Masukkan kata sandi anda"
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
      <ControlledFieldText
        control={control}
        size="md"
        label="Konfirmasi Kata Sandi"
        type="password"
        name="confirm_password"
        placeholder="Masukkan konfirmasi kata sandi"
        hint="Konfirmasi kata sandi harus sama dengan kata sandi yang anda masukkan di atas"
        status={
          watch("confirm_password") === "" && !errors.confirm_password
            ? "none"
            : errors.confirm_password
            ? "error"
            : "success"
        }
        message={
          watch("confirm_password") === "" && !errors.confirm_password
            ? ""
            : errors.confirm_password
            ? errors.confirm_password?.message
            : "Konfirmasi Kata Sandi Valid"
        }
      />

      <div className="flex items-center justify-between">
        <ControlledFieldCheckbox
          control={control}
          text="Setujui syarat dan ketentuan"
          name="toc"
          required
          hint="Anda perlu menyetujui syarat dan ketentuan berlaku untuk bisa menyelesaikan pendaftaran"
          status={!watch("toc") && !errors.toc ? "none" : errors.toc ? "error" : "success"}
          message={
            !watch("password") && !errors.toc
              ? ""
              : errors.toc
              ? errors.toc?.message
              : "Berhasil Menyetujui syarat dan ketentuan"
          }
        />
      </div>
      <Button disabled={!isValid} loading={isLoading} type="submit">
        Daftar sekarang
      </Button>
      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        Sudah punya akun?{" "}
        <Link
          to="/auth/login"
          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
        >
          Login disini
        </Link>
      </p>
    </AuthTemplate>
  );
};
