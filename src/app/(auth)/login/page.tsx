import { Button } from "@/components/ui/button";

const page = () => {
  return <div>Login page
    <Button children="Login" />
    <Button children="Login" variant={"destructive"} />
    <Button children="Login" variant={"ghost"} />
    <Button children="Login" variant={"link"} />
    <Button children="Login" variant={"outline"}/>
    <Button children="Login" variant={"secondary"}/>
  </div>;
};

export default page;
