import { AuthLayout, RegisterForm } from "@/components/auth";

const RegisterPage = () => {
  return (
    <AuthLayout title="Create your account">
      <RegisterForm />
    </AuthLayout>
  );
};

export default RegisterPage;
