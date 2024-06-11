"use client";

import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const AdminClient = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const onChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const sumbit = async () => {
    try {
      const { ok, error } = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (ok) {
        router.push("/admin/anasayfa");
        router.refresh();
      }

      if (error) {
        alert("Hata Oluştu " + error);
      }
    } catch (error) {
      alert("Hata Oluştu " + error);
    }
  };
  return (
    <>
      <div className="tw-flex tw-items-center tw-justify-center tw-py-24">
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-3 tw-w-96">
          <div className="tw-flex tw-w-[400px] tw-h-[100px]">
            <Image
              src={"/assets/common/bogazlogokare.png"}
              alt={"LOGO"}
              fill
              className="!tw-relative tw-object-contain"
            />
          </div>
          <div>Konya Boğaziçi Koleji ADMIN GİRİŞ</div>
          <input
            type="text"
            name="email"
            id="email"
            onChange={onChange}
            className="form-control"
          />
          <input
            type="password"
            name="password"
            id="password"
            onChange={onChange}
            className="form-control"
          />
          <button type="button" onClick={sumbit}>
            Giriş
          </button>
        </div>
      </div>
    </>
  );
};

export default AdminClient;
