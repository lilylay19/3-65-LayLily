"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  registerSchema,
  type RegisterFormData,
} from "../authSchema";

import { useRegisterMutation } from "../authApi";

export function RegisterForm() {
  const [registerUser, { isLoading }] = useRegisterMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const result = await registerUser(data).unwrap();

      console.log("Registration successful:", result);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create an account</CardTitle>

        <CardDescription>
          Enter your information to create your account.
        </CardDescription>
      </CardHeader>

      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <div className="flex flex-col gap-5">

            <div className="grid gap-2">
              <Label htmlFor="fullName">
                Full Name
              </Label>

              <Input
                id="fullName"
                placeholder="John Doe"
                {...register("fullName")}
              />

              {errors.fullName && (
                <p className="text-sm text-red-500">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="gender">
                Gender
              </Label>

              <select
                id="gender"
                {...register("gender")}
                className="h-10 rounded-md border bg-background px-3 text-sm"
              >
                <option value="">
                  Select gender
                </option>

                <option value="male">
                  Male
                </option>

                <option value="female">
                  Female
                </option>

                <option value="other">
                  Other
                </option>
              </select>

              {errors.gender && (
                <p className="text-sm text-red-500">
                  {errors.gender.message}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="dateOfBirth">
                Date of Birth
              </Label>

              <Input
                id="dateOfBirth"
                type="date"
                {...register("dateOfBirth")}
              />

              {errors.dateOfBirth && (
                <p className="text-sm text-red-500">
                  {errors.dateOfBirth.message}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email">
                Email
              </Label>

              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                {...register("email")}
              />

              {errors.email && (
                <p className="text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="password">
                Password
              </Label>

              <Input
                id="password"
                type="password"
                {...register("password")}
              />

              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">
                Confirm Password
              </Label>

              <Input
                id="confirmPassword"
                type="password"
                {...register("confirmPassword")}
              />

              {errors.confirmPassword && (
                <p className="text-sm text-red-500">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

          </div>
        </CardContent>

        <CardFooter className="flex-col gap-3">
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Creating account..." : "Create Account"}
          </Button>

          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="/login"
              className="underline"
            >
              Login
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}