"use client";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import setAyarlar from "@/app/actions/ayarlar/setAyarlar";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
const AnasayfaClient = () => {
  const [image, setImage] = useState(null);
  const router = useRouter();
  const addBanner = async () => {
    let formData = { imageid: image.public_id, imageurl: image.secure_url };
    const res = await setAyarlar(formData);
    if (res === true) {
      await Swal.fire({
        icon: "success",
        title: "Başarıyla Kaydedildi",
        showConfirmButton: false,
        timer: 1500,
      });
      router.refresh();
    } else {
      Swal.fire({
        icon: "error",
        title: JSON.stringify(res),
      });
    }
  };
  return (
    <div className="tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-5">
      <div className="tw-flex tw-flex-col tw-gap-2">
        <div className="tw-text-red-600 tw-underline tw-mb-2 tw-text-nowrap">
          *Resmi Yükledikten sonra Lütfen Kaydet e Basınız...
        </div>
        <CldUploadWidget
          signatureEndpoint="/api/sign-cloudinary-params"
          onSuccess={(result) => {
            setImage(result?.info);
          }}
          uploadPreset="dreamland_root"
          options={{
            maxFiles: 1,
          }}
        >
          {({ open }) => {
            function handleOnClick() {
              setImage(null);
              open();
            }

            return (
              <button
                type="button"
                className="form-control"
                onClick={handleOnClick}
              >
                Banner Resmi Yükle
              </button>
            );
          }}
        </CldUploadWidget>
      </div>
      <button className="btn-box-common" onClick={addBanner}>
        Kaydet
      </button>
    </div>
  );
};

export default AnasayfaClient;
