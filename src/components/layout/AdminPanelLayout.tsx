import { layoutPropsType } from "@/app/type";
import React from "react";
import Navbar from "../module/Navbar/Navbar";
import MainHeader from "../module/MainHeader/MainHeader";
import Sidebar from "../module/Sidebar/Sidebar";
import connectToDB from "@/config/db";
import { authUser } from "@/utils/serverHelpers";
import { cookies } from "next/headers";
import Link from "next/link";

const AdminPanelLayout: React.FC = async ({
  children,
}: layoutPropsType): Promise<React.JSX.Element> => {
  await connectToDB();
  const user = await authUser();
  const token = cookies().get("token");

  if (!user || !token) {
    return (
      <div className="block mx-auto text-center font-iranBlack text-4xl mt-12">
        <h5 className="block">ابتدا باید وارد شوید</h5>
        <Link
          href="/loginOrRegister"
          className="block mt-8 text-2xl text-blue-500"
        >
          وارد شوید
        </Link>
      </div>
    );
  }
  return (
    <section className="black">
      <div className="block">
        <Navbar isLogin={user ? true : false} role={user?.role} />
        <MainHeader />
      </div>
      <div className="container mt-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="block lg:col-span-1">
            <Sidebar users={user?.role} />
          </div>
          <div className="block lg:col-span-3">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default AdminPanelLayout;
