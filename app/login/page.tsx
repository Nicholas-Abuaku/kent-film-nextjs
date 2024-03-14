import dynamic from "next/dynamic";
// import LoginForm from "../components/LoginForm";
const LoginForm = dynamic(() => import("../components/LoginForm"), {
  ssr: true,
});
const page = () => {
  return <LoginForm />;
};

export default page;
