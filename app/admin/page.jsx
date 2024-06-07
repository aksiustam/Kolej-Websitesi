import AdminClient from "./AdminClient";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation";
export const metadata = {
  title: "Admin - Bogaziçi Koleji",
  description: "Bogaziçi Kolej Admin",
  robots: {
    index: false,
    nocache: true,
    follow: false,
  },
};

const page = async () => {
  const User = await getCurrentUser();
  const Auth = User && User.role === "ADMIN" ? true : false;

  if (Auth) {
    redirect("/admin/anasayfa");
  } else {
    return <AdminClient />;
  }
};

export default page;
