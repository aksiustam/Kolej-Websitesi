"use client";
import { useState } from "react";
import setAyarlar from "@/app/actions/ayarlar/setAyarlar";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { CldUploadWidget } from "next-cloudinary";
import { useForm } from "react-hook-form";
const AyarlarClient = (props) => {
  const { ayarlar } = props;
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const router = useRouter();
  console.log(ayarlar.banner2.bannerCheck);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      banner1Ust: ayarlar.banner1.bannerUst,
      banner1Alt: ayarlar.banner1.bannerAlt,
      banner1BtnName: ayarlar.banner1.bannerBtnName,
      banner1BtnUrl: ayarlar.banner1.bannerBtnUrl,
      banner1BtnCheck:
        ayarlar.banner1.bannerBtnCheck === true ? "true" : "false",
      banner1Check: ayarlar.banner1.bannerCheck === true ? "true" : "false",

      banner2Ust: ayarlar.banner2.bannerUst,
      banner2Alt: ayarlar.banner2.bannerAlt,
      banner2BtnName: ayarlar.banner2.bannerBtnName,
      banner2BtnUrl: ayarlar.banner2.bannerBtnUrl,
      banner2BtnCheck:
        ayarlar.banner2.bannerBtnCheck === true ? "true" : "false",
      banner2Check: ayarlar.banner2.bannerCheck === true ? "true" : "false",

      banner3Ust: ayarlar.banner3.bannerUst,
      banner3Alt: ayarlar.banner3.bannerAlt,
      banner3BtnName: ayarlar.banner3.bannerBtnName,
      banner3BtnUrl: ayarlar.banner3.bannerBtnUrl,
      banner3BtnCheck:
        ayarlar.banner3.bannerBtnCheck === true ? "true" : "false",
      banner3Check: ayarlar.banner3.bannerCheck === true ? "true" : "false",
    },
  });
  const onSubmit = async (data) => {
    let formData = {
      banner1: {
        image: null,
        bannerUst: data.banner1Ust,
        bannerAlt: data.banner1Alt,
        bannerBtnName: data.banner1BtnName,
        bannerBtnUrl: data.banner1BtnUrl,
        bannerBtnCheck: data.banner1BtnCheck === "true" ? true : false,
        bannerCheck: data.banner1Check === "true" ? true : false,
      },
      banner2: {
        image: null,
        bannerUst: data.banner2Ust,
        bannerAlt: data.banner2Alt,
        bannerBtnName: data.banner2BtnName,
        bannerBtnUrl: data.banner2BtnUrl,
        bannerBtnCheck: data.banner2BtnCheck === "true" ? true : false,
        bannerCheck: data.banner2Check === "true" ? true : false,
      },
      banner3: {
        image: null,
        bannerUst: data.banner3Ust,
        bannerAlt: data.banner3Alt,
        bannerBtnName: data.banner3BtnName,
        bannerBtnUrl: data.banner3BtnUrl,
        bannerBtnCheck: data.banner3BtnCheck === "true" ? true : false,
        bannerCheck: data.banner3Check === "true" ? true : false,
      },
    };
    if (image1 !== null) {
      formData.banner1.image = {
        imageid: image1.public_id,
        imageurl: image1.secure_url,
      };
    }
    if (image2 !== null) {
      formData.banner2.image = {
        imageid: image2.public_id,
        imageurl: image2.secure_url,
      };
    }
    if (image3 !== null) {
      formData.banner3.image = {
        imageid: image3.public_id,
        imageurl: image3.secure_url,
      };
    }

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
    <div className="tw-w-full">
      <div className="tw-w-full tw-bg-white tw-shadow-2xl tw-flex tw-flex-col tw-items-start tw-justify-start tw-p-3">
        <div className="tw-text-2xl tw-text-shadow-sm tw-font-bold tw-mb-6 tw-mt-2">
          Banner Ayarları
        </div>
        <form
          className="tw-flex tw-flex-col tw-w-full tw-h-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="tw-bg-gray-200 tw-p-3 tw-w-full tw-flex tw-flex-col tw-items-start tw-justify-start tw-rounded-2xl tw-mb-4">
            <div className="tw-font-semibold tw-mb-4 tw-text-lg tw-text-red-600">
              Banner 1.Slider Ayarları
            </div>

            <div className="tw-w-full tw-flex tw-flex-wrap">
              <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"banner1Ust"}
                >
                  *Banner 1.Slider ÜstYazı
                </label>

                <input
                  type="text"
                  name="name"
                  className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                  placeholder="Banner ÜstYazı"
                  {...register("banner1Ust")}
                />
              </div>
              <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"banner1Alt"}
                >
                  *Banner 1.Slider AltYazı
                </label>

                <input
                  type="text"
                  name="name"
                  className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                  placeholder="Banner AltYazı"
                  {...register("banner1Alt")}
                />
              </div>
              <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"banner1BtnName"}
                >
                  *Banner 1.Slider Buton Adı
                </label>

                <input
                  type="text"
                  name="name"
                  className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                  placeholder="Banner Button Adı"
                  {...register("banner1BtnName")}
                />
              </div>
              <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"banner1BtnUrl"}
                >
                  *Banner 1.Slider Buton Url
                </label>

                <input
                  type="text"
                  name="name"
                  className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                  placeholder="Banner Buton Url"
                  {...register("banner1BtnUrl")}
                />
              </div>
              <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"banner1Image"}
                >
                  *Banner 1.Slider Resim ( Yükledikten Sonra Aşşağıdan Kaydete
                  Basın...)
                </label>

                <CldUploadWidget
                  signatureEndpoint="/api/sign-cloudinary-params"
                  onSuccess={(result) => {
                    setImage1(result?.info);
                  }}
                  uploadPreset="bogazici_root"
                  options={{
                    maxFiles: 1,
                  }}
                >
                  {({ open }) => {
                    function handleOnClick() {
                      setImage1(null);
                      open();
                    }

                    return (
                      <button
                        type="button"
                        className="form-control !tw-bg-sky-400"
                        onClick={handleOnClick}
                      >
                        Banner Resmi Yükle
                      </button>
                    );
                  }}
                </CldUploadWidget>
              </div>
              <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"banner1BtnCheck"}
                >
                  *Banner 1.Slider Buton Göster
                </label>

                <select
                  id="banner1BtnCheck"
                  className="tw-text-sm tw-px-6 tw-py-2 tw-text-gray-900 tw-w-full tw-bg-white tw-border tw-border-black"
                  {...register("banner1BtnCheck")}
                >
                  <option value={"true"}>Evet</option>
                  <option value={"false"}>Hayır</option>
                </select>
              </div>
              <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"banner1Check"}
                >
                  *Banner 1.Slider Göster
                </label>
                <select
                  id="banner1Check"
                  className="tw-text-sm tw-px-6 tw-py-2 tw-text-gray-900 tw-w-full tw-bg-white tw-border tw-border-black"
                  {...register("banner1Check")}
                >
                  <option value={"true"}>Evet</option>
                  <option value={"false"}>Hayır</option>
                </select>
              </div>
            </div>
          </div>
          <div className="tw-bg-gray-300 tw-p-3 tw-w-full tw-flex tw-flex-col tw-items-start tw-justify-start tw-rounded-2xl tw-mb-4">
            <div className="tw-font-semibold tw-mb-4 tw-text-lg tw-text-green-500">
              Banner 2.Slider Ayarları
            </div>

            <div className="tw-w-full tw-flex tw-flex-wrap">
              <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"banner2Ust"}
                >
                  *Banner 2.Slider ÜstYazı
                </label>

                <input
                  type="text"
                  name="name"
                  className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                  placeholder="Banner ÜstYazı"
                  {...register("banner2Ust")}
                />
              </div>
              <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"banner2Alt"}
                >
                  *Banner 2.Slider AltYazı
                </label>

                <input
                  type="text"
                  name="name"
                  className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                  placeholder="Banner AltYazı"
                  {...register("banner2Alt")}
                />
              </div>
              <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"banner2BtnName"}
                >
                  *Banner 2.Slider Buton Adı
                </label>

                <input
                  type="text"
                  name="name"
                  className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                  placeholder="Banner Button Adı"
                  {...register("banner2BtnName")}
                />
              </div>
              <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"banner2BtnUrl"}
                >
                  *Banner 2.Slider Buton Url
                </label>

                <input
                  type="text"
                  name="name"
                  className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                  placeholder="Banner Buton Url"
                  {...register("banner2BtnUrl")}
                />
              </div>
              <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"banner2Image"}
                >
                  *Banner 2.Slider Resim ( Yükledikten Sonra Aşşağıdan Kaydete
                  Basın...)
                </label>

                <CldUploadWidget
                  signatureEndpoint="/api/sign-cloudinary-params"
                  onSuccess={(result) => {
                    setImage2(result?.info);
                  }}
                  uploadPreset="bogazici_root"
                  options={{
                    maxFiles: 1,
                  }}
                >
                  {({ open }) => {
                    function handleOnClick() {
                      setImage2(null);
                      open();
                    }

                    return (
                      <button
                        type="button"
                        className="form-control !tw-bg-sky-400"
                        onClick={handleOnClick}
                      >
                        Banner Resmi Yükle
                      </button>
                    );
                  }}
                </CldUploadWidget>
              </div>
              <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"banner1BtnCheck"}
                >
                  *Banner 2.Slider Buton Göster
                </label>

                <select
                  id="banner1BtnCheck"
                  className="tw-text-sm tw-px-6 tw-py-2 tw-text-gray-900 tw-w-full tw-bg-white tw-border tw-border-black"
                  {...register("banner2BtnCheck")}
                >
                  <option value={"true"}>Evet</option>
                  <option value={"false"}>Hayır</option>
                </select>
              </div>
              <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"banner2Check"}
                >
                  *Banner 2.Slider Göster
                </label>
                <select
                  id="banner2Check"
                  className="tw-text-sm tw-px-6 tw-py-2 tw-text-gray-900 tw-w-full tw-bg-white tw-border tw-border-black"
                  {...register("banner2Check")}
                >
                  <option value={"true"}>Evet</option>
                  <option value={"false"}>Hayır</option>
                </select>
              </div>
            </div>
          </div>

          <div className="tw-bg-gray-200 tw-p-3 tw-w-full tw-flex tw-flex-col tw-items-start tw-justify-start tw-rounded-2xl tw-mb-4">
            <div className="tw-font-semibold tw-mb-4 tw-text-lg tw-text-amber-500">
              Banner 3.Slider Ayarları
            </div>

            <div className="tw-w-full tw-flex tw-flex-wrap">
              <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"banner1Ust"}
                >
                  *Banner 3.Slider ÜstYazı
                </label>

                <input
                  type="text"
                  name="name"
                  className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                  placeholder="Banner ÜstYazı"
                  {...register("banner3Ust")}
                />
              </div>
              <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"banner3Alt"}
                >
                  *Banner 3.Slider AltYazı
                </label>

                <input
                  type="text"
                  name="name"
                  className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                  placeholder="Banner AltYazı"
                  {...register("banner3Alt")}
                />
              </div>
              <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"banner3BtnName"}
                >
                  *Banner 3.Slider Buton Adı
                </label>

                <input
                  type="text"
                  name="name"
                  className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                  placeholder="Banner Button Adı"
                  {...register("banner3BtnName")}
                />
              </div>
              <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"banner3BtnUrl"}
                >
                  *Banner 3.Slider Buton Url
                </label>

                <input
                  type="text"
                  name="name"
                  className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                  placeholder="Banner Buton Url"
                  {...register("banner3BtnUrl")}
                />
              </div>
              <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"banner3Image"}
                >
                  *Banner 3.Slider Resim ( Yükledikten Sonra Aşşağıdan Kaydete
                  Basın...)
                </label>

                <CldUploadWidget
                  signatureEndpoint="/api/sign-cloudinary-params"
                  onSuccess={(result) => {
                    setImage3(result?.info);
                  }}
                  uploadPreset="bogazici_root"
                  options={{
                    maxFiles: 1,
                  }}
                >
                  {({ open }) => {
                    function handleOnClick() {
                      setImage3(null);
                      open();
                    }

                    return (
                      <button
                        type="button"
                        className="form-control !tw-bg-sky-400"
                        onClick={handleOnClick}
                      >
                        Banner Resmi Yükle
                      </button>
                    );
                  }}
                </CldUploadWidget>
              </div>
              <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"banner3BtnCheck"}
                >
                  *Banner 3.Slider Buton Göster
                </label>

                <select
                  id="banner1BtnCheck"
                  className="tw-text-sm tw-px-6 tw-py-2 tw-text-gray-900 tw-w-full tw-bg-white tw-border tw-border-black"
                  {...register("banner3BtnCheck")}
                >
                  <option value={"true"}>Evet</option>
                  <option value={"false"}>Hayır</option>
                </select>
              </div>
              <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"banner3Check"}
                >
                  *Banner 3.Slider Göster
                </label>
                <select
                  id="banner3Check"
                  className="tw-text-sm tw-px-6 tw-py-2 tw-text-gray-900 tw-w-full tw-bg-white tw-border tw-border-black"
                  {...register("banner3Check")}
                >
                  <option value={"true"}>Evet</option>
                  <option value={"false"}>Hayır</option>
                </select>
              </div>
            </div>
          </div>

          <div className="tw-w-full tw-flex tw-items-center tw-justify-center">
            <button type="sumbit" className="button tw-text-white tw-min-w-96">
              Kaydet
            </button>
          </div>
        </form>
      </div>
      {/* <div className="tw-flex tw-flex-col tw-gap-2">
        <div className="tw-text-red-600 tw-underline tw-mb-2 tw-text-nowrap">
          *Resmi Yükledikten sonra Lütfen Kaydet e Basınız...
        </div>
        
      </div>
      <button className="btn-box-common" onClick={addBanner}>
        Kaydet
      </button> */}
    </div>
  );
};

export default AyarlarClient;
