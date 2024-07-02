"use client";
import { useState } from "react";
import setAyarlar from "@/app/actions/ayarlar/setAyarlar";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { CldUploadWidget } from "next-cloudinary";
import { useForm } from "react-hook-form";
import Accordion from "react-bootstrap/Accordion";
import bannerorn from "@/public/assets/common/bannerorn.png";
import Image from "next/image";
const AyarlarClient = (props) => {
  const { ayarlar } = props;
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [image5, setImage5] = useState(null);
  const [image6, setImage6] = useState(null);
  const [image7, setImage7] = useState(null);
  const [image8, setImage8] = useState(null);
  const router = useRouter();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      banner1Ust: ayarlar?.banner1?.bannerUst,
      banner1Alt: ayarlar?.banner1?.bannerAlt,
      banner1BtnName: ayarlar?.banner1?.bannerBtnName,
      banner1BtnUrl: ayarlar?.banner1?.bannerBtnUrl,
      banner1BtnCheck:
        ayarlar?.banner1?.bannerBtnCheck === true ? "true" : "false",
      banner1Check: ayarlar?.banner1?.bannerCheck === true ? "true" : "false",

      banner2Ust: ayarlar?.banner2?.bannerUst,
      banner2Alt: ayarlar?.banner2?.bannerAlt,
      banner2BtnName: ayarlar?.banner2?.bannerBtnName,
      banner2BtnUrl: ayarlar?.banner2?.bannerBtnUrl,
      banner2BtnCheck:
        ayarlar?.banner2?.bannerBtnCheck === true ? "true" : "false",
      banner2Check: ayarlar?.banner2?.bannerCheck === true ? "true" : "false",

      banner3Ust: ayarlar?.banner3?.bannerUst,
      banner3Alt: ayarlar?.banner3?.bannerAlt,
      banner3BtnName: ayarlar?.banner3?.bannerBtnName,
      banner3BtnUrl: ayarlar?.banner3?.bannerBtnUrl,
      banner3BtnCheck:
        ayarlar?.banner3?.bannerBtnCheck === true ? "true" : "false",
      banner3Check: ayarlar?.banner3?.bannerCheck === true ? "true" : "false",

      banner4Ust: ayarlar?.banner4?.bannerUst,
      banner4Alt: ayarlar?.banner4?.bannerAlt,
      banner4BtnName: ayarlar?.banner4?.bannerBtnName,
      banner4BtnUrl: ayarlar?.banner4?.bannerBtnUrl,
      banner4BtnCheck:
        ayarlar?.banner4?.bannerBtnCheck === true ? "true" : "false",
      banner4Check: ayarlar?.banner4?.bannerCheck === true ? "true" : "false",

      banner5Ust: ayarlar?.banner5?.bannerUst,
      banner5Alt: ayarlar?.banner5?.bannerAlt,
      banner5BtnName: ayarlar?.banner5?.bannerBtnName,
      banner5BtnUrl: ayarlar?.banner5?.bannerBtnUrl,
      banner5BtnCheck:
        ayarlar?.banner5?.bannerBtnCheck === true ? "true" : "false",
      banner5Check: ayarlar?.banner5?.bannerCheck === true ? "true" : "false",

      banner6Ust: ayarlar?.banner6?.bannerUst,
      banner6Alt: ayarlar?.banner6?.bannerAlt,
      banner6BtnName: ayarlar?.banner6?.bannerBtnName,
      banner6BtnUrl: ayarlar?.banner6?.bannerBtnUrl,
      banner6BtnCheck:
        ayarlar?.banner6?.bannerBtnCheck === true ? "true" : "false",
      banner6Check: ayarlar?.banner6?.bannerCheck === true ? "true" : "false",

      banner7Ust: ayarlar?.banner7?.bannerUst,
      banner7Alt: ayarlar?.banner7?.bannerAlt,
      banner7BtnName: ayarlar?.banner7?.bannerBtnName,
      banner7BtnUrl: ayarlar?.banner7?.bannerBtnUrl,
      banner7BtnCheck:
        ayarlar?.banner7?.bannerBtnCheck === true ? "true" : "false",
      banner7Check: ayarlar?.banner7?.bannerCheck === true ? "true" : "false",

      banner8Ust: ayarlar?.banner8?.bannerUst,
      banner8Alt: ayarlar?.banner8?.bannerAlt,
      banner8BtnName: ayarlar?.banner8?.bannerBtnName,
      banner8BtnUrl: ayarlar?.banner8?.bannerBtnUrl,
      banner8BtnCheck:
        ayarlar?.banner8?.bannerBtnCheck === true ? "true" : "false",
      banner8Check: ayarlar?.banner8?.bannerCheck === true ? "true" : "false",
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
      banner4: {
        image: null,
        bannerUst: data.banner4Ust,
        bannerAlt: data.banner4Alt,
        bannerBtnName: data.banner4BtnName,
        bannerBtnUrl: data.banner4BtnUrl,
        bannerBtnCheck: data.banner4BtnCheck === "true" ? true : false,
        bannerCheck: data.banner4Check === "true" ? true : false,
      },
      banner5: {
        image: null,
        bannerUst: data.banner5Ust,
        bannerAlt: data.banner5Alt,
        bannerBtnName: data.banner5BtnName,
        bannerBtnUrl: data.banner5BtnUrl,
        bannerBtnCheck: data.banner5BtnCheck === "true" ? true : false,
        bannerCheck: data.banner5Check === "true" ? true : false,
      },
      banner6: {
        image: null,
        bannerUst: data.banner6Ust,
        bannerAlt: data.banner6Alt,
        bannerBtnName: data.banner6BtnName,
        bannerBtnUrl: data.banner6BtnUrl,
        bannerBtnCheck: data.banner6BtnCheck === "true" ? true : false,
        bannerCheck: data.banner6Check === "true" ? true : false,
      },
      banner7: {
        image: null,
        bannerUst: data.banner7Ust,
        bannerAlt: data.banner7Alt,
        bannerBtnName: data.banner7BtnName,
        bannerBtnUrl: data.banner7BtnUrl,
        bannerBtnCheck: data.banner7BtnCheck === "true" ? true : false,
        bannerCheck: data.banner7Check === "true" ? true : false,
      },
      banner8: {
        image: null,
        bannerUst: data.banner8Ust,
        bannerAlt: data.banner8Alt,
        bannerBtnName: data.banner8BtnName,
        bannerBtnUrl: data.banner8BtnUrl,
        bannerBtnCheck: data.banner8BtnCheck === "true" ? true : false,
        bannerCheck: data.banner8Check === "true" ? true : false,
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
    if (image4 !== null) {
      formData.banner4.image = {
        imageid: image4.public_id,
        imageurl: image4.secure_url,
      };
    }
    if (image5 !== null) {
      formData.banner5.image = {
        imageid: image5.public_id,
        imageurl: image5.secure_url,
      };
    }
    if (image6 !== null) {
      formData.banner6.image = {
        imageid: image6.public_id,
        imageurl: image6.secure_url,
      };
    }
    if (image7 !== null) {
      formData.banner7.image = {
        imageid: image7.public_id,
        imageurl: image7.secure_url,
      };
    }
    if (image8 !== null) {
      formData.banner8.image = {
        imageid: image8.public_id,
        imageurl: image8.secure_url,
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
        <form
          className="tw-flex tw-flex-col tw-w-full tw-h-full"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="tw-flex tw-items-center tw-justify-start tw-my-6">
            <div className="tw-text-2xl tw-text-shadow-sm tw-font-bold tw-text-nowrap tw-pr-4">
              Banner Ayarları
            </div>
            <div className="tw-w-full tw-flex tw-items-center tw-justify-end">
              <button
                type="sumbit"
                className="button tw-text-white tw-min-w-96"
              >
                Kaydet
              </button>
            </div>
          </div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="tw-font-semibold tw-text-lg tw-text-red-600">
                  Banner 1.Slider Ayarları
                </div>
              </Accordion.Header>
              <Accordion.Body className="tw-bg-gray-200">
                <div className="tw-p-3 tw-flex tw-flex-col tw-items-start tw-justify-start">
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
                        maxLength={50}
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
                        maxLength={50}
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
                        maxLength={20}
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
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm tw-text-red-600`}
                        htmlFor={"banner1Image"}
                      >
                        *Banner 1.Slider Resim ( Yükledikten Sonra Yukarıdan
                        Kaydete Basın...)
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
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2">
                      <Image
                        src={bannerorn}
                        alt="Örnek Baner"
                        width={1250}
                        height={1250}
                        className="tw-object-cover tw-max-h-28 "
                      />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <div className="tw-font-semibold tw-text-lg tw-text-green-500">
                  Banner 2.Slider Ayarları
                </div>
              </Accordion.Header>
              <Accordion.Body className="tw-bg-gray-300">
                <div className="tw-p-3 tw-flex tw-flex-col tw-items-start tw-justify-start">
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
                        maxLength={50}
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
                        maxLength={50}
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
                        maxLength={20}
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
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm tw-text-red-600`}
                        htmlFor={"banner2Image"}
                      >
                        *Banner 2.Slider Resim ( Yükledikten Sonra Yukarıdan
                        Kaydete Basın...)
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
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2">
                      <Image
                        src={bannerorn}
                        alt="Örnek Baner"
                        width={1250}
                        height={1250}
                        className="tw-object-cover tw-max-h-28"
                      />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <div className="tw-font-semibold tw-text-lg tw-text-amber-500">
                  Banner 3.Slider Ayarları
                </div>
              </Accordion.Header>
              <Accordion.Body className="tw-bg-gray-200">
                <div className="tw-p-3 tw-w-full tw-flex tw-flex-col tw-items-start tw-justify-start">
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
                        maxLength={50}
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
                        maxLength={50}
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
                        maxLength={20}
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
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm tw-text-red-600`}
                        htmlFor={"banner3Image"}
                      >
                        *Banner 3.Slider Resim ( Yükledikten Sonra Yukarıdan
                        Kaydete Basın...)
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
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2">
                      <Image
                        src={bannerorn}
                        alt="Örnek Baner"
                        width={1250}
                        height={1250}
                        className="tw-object-cover tw-max-h-28"
                      />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <div className="tw-font-semibold tw-text-lg tw-text-violet-600">
                  Banner 4.Slider Ayarları
                </div>
              </Accordion.Header>
              <Accordion.Body className="tw-bg-gray-200">
                <div className="tw-p-3 tw-w-full tw-flex tw-flex-col tw-items-start tw-justify-start">
                  <div className="tw-w-full tw-flex tw-flex-wrap">
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner4Ust"}
                      >
                        *Banner 4.Slider ÜstYazı
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                        placeholder="Banner ÜstYazı"
                        {...register("banner4Ust")}
                        maxLength={50}
                      />
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner4Alt"}
                      >
                        *Banner 4.Slider AltYazı
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                        placeholder="Banner AltYazı"
                        {...register("banner4Alt")}
                        maxLength={50}
                      />
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner4BtnName"}
                      >
                        *Banner 4.Slider Buton Adı
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                        placeholder="Banner Button Adı"
                        {...register("banner4BtnName")}
                        maxLength={20}
                      />
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner4BtnUrl"}
                      >
                        *Banner 4.Slider Buton Url
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                        placeholder="Banner Buton Url"
                        {...register("banner4BtnUrl")}
                      />
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm tw-text-red-600`}
                        htmlFor={"banner4Image"}
                      >
                        *Banner 4.Slider Resim ( Yükledikten Sonra Yukarıdan
                        Kaydete Basın...)
                      </label>

                      <CldUploadWidget
                        signatureEndpoint="/api/sign-cloudinary-params"
                        onSuccess={(result) => {
                          setImage4(result?.info);
                        }}
                        uploadPreset="bogazici_root"
                        options={{
                          maxFiles: 1,
                        }}
                      >
                        {({ open }) => {
                          function handleOnClick() {
                            setImage4(null);
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
                        htmlFor={"banner4BtnCheck"}
                      >
                        *Banner 4.Slider Buton Göster
                      </label>

                      <select
                        id="banner1BtnCheck"
                        className="tw-text-sm tw-px-6 tw-py-2 tw-text-gray-900 tw-w-full tw-bg-white tw-border tw-border-black"
                        {...register("banner4BtnCheck")}
                      >
                        <option value={"true"}>Evet</option>
                        <option value={"false"}>Hayır</option>
                      </select>
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner4Check"}
                      >
                        *Banner 4.Slider Göster
                      </label>
                      <select
                        id="banner4Check"
                        className="tw-text-sm tw-px-6 tw-py-2 tw-text-gray-900 tw-w-full tw-bg-white tw-border tw-border-black"
                        {...register("banner4Check")}
                      >
                        <option value={"true"}>Evet</option>
                        <option value={"false"}>Hayır</option>
                      </select>
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2">
                      <Image
                        src={bannerorn}
                        alt="Örnek Baner"
                        width={1250}
                        height={1250}
                        className="tw-object-cover tw-max-h-28"
                      />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <div className="tw-font-semibold tw-text-lg tw-text-cyan-600">
                  Banner 5.Slider Ayarları
                </div>
              </Accordion.Header>
              <Accordion.Body className="tw-bg-gray-200">
                <div className="tw-p-3 tw-w-full tw-flex tw-flex-col tw-items-start tw-justify-start">
                  <div className="tw-w-full tw-flex tw-flex-wrap">
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner5Ust"}
                      >
                        *Banner 5.Slider ÜstYazı
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                        placeholder="Banner ÜstYazı"
                        {...register("banner5Ust")}
                        maxLength={50}
                      />
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner5Alt"}
                      >
                        *Banner 5.Slider AltYazı
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                        placeholder="Banner AltYazı"
                        {...register("banner5Alt")}
                        maxLength={50}
                      />
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner5BtnName"}
                      >
                        *Banner 5.Slider Buton Adı
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                        placeholder="Banner Button Adı"
                        {...register("banner5BtnName")}
                        maxLength={20}
                      />
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner5BtnUrl"}
                      >
                        *Banner 5.Slider Buton Url
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                        placeholder="Banner Buton Url"
                        {...register("banner5BtnUrl")}
                      />
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm tw-text-red-600`}
                        htmlFor={"banner5Image"}
                      >
                        *Banner 5.Slider Resim ( Yükledikten Sonra Yukarıdan
                        Kaydete Basın...)
                      </label>

                      <CldUploadWidget
                        signatureEndpoint="/api/sign-cloudinary-params"
                        onSuccess={(result) => {
                          setImage5(result?.info);
                        }}
                        uploadPreset="bogazici_root"
                        options={{
                          maxFiles: 1,
                        }}
                      >
                        {({ open }) => {
                          function handleOnClick() {
                            setImage5(null);
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
                        htmlFor={"banner5BtnCheck"}
                      >
                        *Banner 5.Slider Buton Göster
                      </label>

                      <select
                        id="banner1BtnCheck"
                        className="tw-text-sm tw-px-6 tw-py-2 tw-text-gray-900 tw-w-full tw-bg-white tw-border tw-border-black"
                        {...register("banner5BtnCheck")}
                      >
                        <option value={"true"}>Evet</option>
                        <option value={"false"}>Hayır</option>
                      </select>
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner5Check"}
                      >
                        *Banner 5.Slider Göster
                      </label>
                      <select
                        id="banner3Check"
                        className="tw-text-sm tw-px-6 tw-py-2 tw-text-gray-900 tw-w-full tw-bg-white tw-border tw-border-black"
                        {...register("banner5Check")}
                      >
                        <option value={"true"}>Evet</option>
                        <option value={"false"}>Hayır</option>
                      </select>
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2">
                      <Image
                        src={bannerorn}
                        alt="Örnek Baner"
                        width={1250}
                        height={1250}
                        className="tw-object-cover tw-max-h-28"
                      />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <div className="tw-font-semibold tw-text-lg tw-text-pink-600">
                  Banner 6.Slider Ayarları
                </div>
              </Accordion.Header>
              <Accordion.Body className="tw-bg-gray-200">
                <div className="tw-p-3 tw-w-full tw-flex tw-flex-col tw-items-start tw-justify-start">
                  <div className="tw-w-full tw-flex tw-flex-wrap">
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner6Ust"}
                      >
                        *Banner 6.Slider ÜstYazı
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                        placeholder="Banner ÜstYazı"
                        {...register("banner6Ust")}
                        maxLength={50}
                      />
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner6Alt"}
                      >
                        *Banner 6.Slider AltYazı
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                        placeholder="Banner AltYazı"
                        {...register("banner6Alt")}
                        maxLength={50}
                      />
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner6BtnName"}
                      >
                        *Banner 6.Slider Buton Adı
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                        placeholder="Banner Button Adı"
                        {...register("banner6BtnName")}
                        maxLength={20}
                      />
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner6BtnUrl"}
                      >
                        *Banner 6.Slider Buton Url
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                        placeholder="Banner Buton Url"
                        {...register("banner6BtnUrl")}
                      />
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm tw-text-red-600`}
                        htmlFor={"banner6Image"}
                      >
                        *Banner 6.Slider Resim ( Yükledikten Sonra Yukarıdan
                        Kaydete Basın...)
                      </label>

                      <CldUploadWidget
                        signatureEndpoint="/api/sign-cloudinary-params"
                        onSuccess={(result) => {
                          setImage6(result?.info);
                        }}
                        uploadPreset="bogazici_root"
                        options={{
                          maxFiles: 1,
                        }}
                      >
                        {({ open }) => {
                          function handleOnClick() {
                            setImage6(null);
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
                        htmlFor={"banner6BtnCheck"}
                      >
                        *Banner 6.Slider Buton Göster
                      </label>

                      <select
                        id="banner1BtnCheck"
                        className="tw-text-sm tw-px-6 tw-py-2 tw-text-gray-900 tw-w-full tw-bg-white tw-border tw-border-black"
                        {...register("banner6BtnCheck")}
                      >
                        <option value={"true"}>Evet</option>
                        <option value={"false"}>Hayır</option>
                      </select>
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner6Check"}
                      >
                        *Banner 6.Slider Göster
                      </label>
                      <select
                        id="banner3Check"
                        className="tw-text-sm tw-px-6 tw-py-2 tw-text-gray-900 tw-w-full tw-bg-white tw-border tw-border-black"
                        {...register("banner6Check")}
                      >
                        <option value={"true"}>Evet</option>
                        <option value={"false"}>Hayır</option>
                      </select>
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2">
                      <Image
                        src={bannerorn}
                        alt="Örnek Baner"
                        width={1250}
                        height={1250}
                        className="tw-object-cover tw-max-h-28"
                      />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                <div className="tw-font-semibold tw-text-lg tw-text-emerald-600">
                  Banner 7.Slider Ayarları
                </div>
              </Accordion.Header>
              <Accordion.Body className="tw-bg-gray-200">
                <div className="tw-p-3 tw-w-full tw-flex tw-flex-col tw-items-start tw-justify-start">
                  <div className="tw-w-full tw-flex tw-flex-wrap">
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner7Ust"}
                      >
                        *Banner 7.Slider ÜstYazı
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                        placeholder="Banner ÜstYazı"
                        {...register("banner7Ust")}
                        maxLength={50}
                      />
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner7Alt"}
                      >
                        *Banner 7.Slider AltYazı
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                        placeholder="Banner AltYazı"
                        {...register("banner7Alt")}
                        maxLength={50}
                      />
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner7BtnName"}
                      >
                        *Banner 7.Slider Buton Adı
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                        placeholder="Banner Button Adı"
                        {...register("banner7BtnName")}
                        maxLength={20}
                      />
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner7BtnUrl"}
                      >
                        *Banner 7.Slider Buton Url
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                        placeholder="Banner Buton Url"
                        {...register("banner7BtnUrl")}
                      />
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm tw-text-red-600`}
                        htmlFor={"banner7Image"}
                      >
                        *Banner 7.Slider Resim ( Yükledikten Sonra Yukarıdan
                        Kaydete Basın...)
                      </label>

                      <CldUploadWidget
                        signatureEndpoint="/api/sign-cloudinary-params"
                        onSuccess={(result) => {
                          setImage7(result?.info);
                        }}
                        uploadPreset="bogazici_root"
                        options={{
                          maxFiles: 1,
                        }}
                      >
                        {({ open }) => {
                          function handleOnClick() {
                            setImage7(null);
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
                        htmlFor={"banner7BtnCheck"}
                      >
                        *Banner 3.Slider Buton Göster
                      </label>

                      <select
                        id="banner7BtnCheck"
                        className="tw-text-sm tw-px-6 tw-py-2 tw-text-gray-900 tw-w-full tw-bg-white tw-border tw-border-black"
                        {...register("banner7BtnCheck")}
                      >
                        <option value={"true"}>Evet</option>
                        <option value={"false"}>Hayır</option>
                      </select>
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner7Check"}
                      >
                        *Banner 7.Slider Göster
                      </label>
                      <select
                        id="banner7Check"
                        className="tw-text-sm tw-px-6 tw-py-2 tw-text-gray-900 tw-w-full tw-bg-white tw-border tw-border-black"
                        {...register("banner7Check")}
                      >
                        <option value={"true"}>Evet</option>
                        <option value={"false"}>Hayır</option>
                      </select>
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2">
                      <Image
                        src={bannerorn}
                        alt="Örnek Baner"
                        width={1250}
                        height={1250}
                        className="tw-object-cover tw-max-h-28"
                      />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>
                <div className="tw-font-semibold tw-text-lg tw-text-blue-600">
                  Banner 8.Slider Ayarları
                </div>
              </Accordion.Header>
              <Accordion.Body className="tw-bg-gray-200">
                <div className="tw-p-3 tw-w-full tw-flex tw-flex-col tw-items-start tw-justify-start">
                  <div className="tw-w-full tw-flex tw-flex-wrap">
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner8Ust"}
                      >
                        *Banner 8.Slider ÜstYazı
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                        placeholder="Banner ÜstYazı"
                        {...register("banner8Ust")}
                        maxLength={50}
                      />
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner8Alt"}
                      >
                        *Banner 8.Slider AltYazı
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                        placeholder="Banner AltYazı"
                        {...register("banner8Alt")}
                        maxLength={50}
                      />
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner8BtnName"}
                      >
                        *Banner 8.Slider Buton Adı
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                        placeholder="Banner Button Adı"
                        {...register("banner8BtnName")}
                        maxLength={20}
                      />
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner8BtnUrl"}
                      >
                        *Banner 8.Slider Buton Url
                      </label>

                      <input
                        type="text"
                        name="name"
                        className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                        placeholder="Banner Buton Url"
                        {...register("banner8BtnUrl")}
                      />
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm tw-text-red-600`}
                        htmlFor={"banner8Image"}
                      >
                        *Banner 8.Slider Resim ( Yükledikten Sonra Yukarıdan
                        Kaydete Basın...)
                      </label>

                      <CldUploadWidget
                        signatureEndpoint="/api/sign-cloudinary-params"
                        onSuccess={(result) => {
                          setImage8(result?.info);
                        }}
                        uploadPreset="bogazici_root"
                        options={{
                          maxFiles: 1,
                        }}
                      >
                        {({ open }) => {
                          function handleOnClick() {
                            setImage8(null);
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
                        htmlFor={"banner8BtnCheck"}
                      >
                        *Banner 8.Slider Buton Göster
                      </label>

                      <select
                        id="banner1BtnCheck"
                        className="tw-text-sm tw-px-6 tw-py-2 tw-text-gray-900 tw-w-full tw-bg-white tw-border tw-border-black"
                        {...register("banner8BtnCheck")}
                      >
                        <option value={"true"}>Evet</option>
                        <option value={"false"}>Hayır</option>
                      </select>
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2 tw-mb-12">
                      <label
                        className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                        htmlFor={"banner8Check"}
                      >
                        *Banner 8.Slider Göster
                      </label>
                      <select
                        id="banner3Check"
                        className="tw-text-sm tw-px-6 tw-py-2 tw-text-gray-900 tw-w-full tw-bg-white tw-border tw-border-black"
                        {...register("banner8Check")}
                      >
                        <option value={"true"}>Evet</option>
                        <option value={"false"}>Hayır</option>
                      </select>
                    </div>
                    <div className="tw-w-full sm:tw-w-1/2 md:tw-w-1/3 lg:tw-w-1/4 tw-px-2">
                      <Image
                        src={bannerorn}
                        alt="Örnek Baner"
                        width={1250}
                        height={1250}
                        className="tw-object-cover tw-max-h-28"
                      />
                    </div>
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </form>
      </div>
    </div>
  );
};

export default AyarlarClient;
