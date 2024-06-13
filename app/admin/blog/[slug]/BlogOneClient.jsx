"use client";
import Image from "next/image";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import "react-quill/dist/quill.snow.css";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import updateBlog from "@/app/actions/blog/updateBlog";
const BlogOneClient = (props) => {
  const { blog } = props;
  const [quillValue, setQuillValue] = useState(blog?.quill);

  const [cimage, setCImage] = useState([]);
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      name: blog?.name,
      index: blog?.index,
    },
    shouldUnregister: true,
  });

  const onSubmit = async (data) => {
    let formData = {
      ...data,
      id: blog.id,
      quill: quillValue,
      images: null,
    };
    if (cimage?.length > 0) {
      const data = cimage.map((item) => {
        return { imageid: item.public_id, imageurl: item.secure_url };
      });
      formData.images = data;
    }

    const res = await updateBlog(formData);
    if (res === true) {
      await Swal.fire({
        icon: "success",
        title: "Başarıyla Güncellendi",
        showConfirmButton: false,
        timer: 1500,
      });
      setCImage([]);
      router.push("/admin/blog");
      router.refresh();
    } else {
      Swal.fire({
        icon: "error",
        title: JSON.stringify(res.message),
      });
    }
  };
  return (
    <Row>
      <Col xl={12} lg={12} sm={12}>
        <form className=" tw-w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="tw-font-bold tw-text-shadow-md tw-text-xl tw-my-6">
            Blog Düzenle
          </div>
          <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-5 tw-mb-6 !tw-bg-white tw-shadow-lg tw-p-3">
            <div className="tw-w-full tw-flex tw-items-center tw-justify-between tw-gap-2">
              <div className="Form-group tw-flex-1">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"name"}
                >
                  *Blog Adı
                </label>

                <input
                  type="text"
                  name="name"
                  className="tw-w-full tw-border tw-border-black tw-px-4 tw-py-2"
                  placeholder="Blog Adı"
                  {...register("name")}
                  maxLength={75}
                  required
                />
              </div>
              <input hidden {...register(`Image`)} />
              <div className="Form-group">
                <label
                  className={`input-label tw-capitalize tw-block tw-mb-2 !tw-text-sm`}
                  htmlFor={"index"}
                >
                  *Sıra No
                </label>

                <input
                  type="number"
                  name="name"
                  min={0}
                  className="tw-border tw-border-black tw-px-4 tw-py-2 tw-max-w-32"
                  placeholder="Sıra No"
                  {...register("index")}
                  required
                />
              </div>
            </div>

            <div className="tw-flex tw-flex-wrap tw-gap-4 tw-mb-12">
              {blog?.images?.map((item) => (
                <div className="tw-w-40 tw-h-40 tw-pb-3" key={item?.id}>
                  <Image
                    src={item?.imageurl}
                    alt=""
                    width={1200}
                    height={1200}
                    className="tw-object-cover"
                  />
                </div>
              ))}
            </div>
            <div className="tw-w-full tw-flex tw-flex-col tw-justify-start tw-items-start tw-gap-2">
              <div className="tw-text-red-600 tw-underline tw-mb-2 tw-text-nowrap tw-font-bold">
                *Blog Resimleri yükledikten sonra lütfen kaydet e basın.
              </div>
              <CldUploadWidget
                signatureEndpoint="/api/sign-cloudinary-params"
                onSuccess={(result) => {
                  setCImage((prev) => {
                    const data = prev || [];
                    return [...data, { ...result?.info }];
                  });
                }}
                uploadPreset="bogazici_blog"
              >
                {({ open }) => {
                  function handleOnClick() {
                    open();
                  }

                  return (
                    <button
                      type="button"
                      className="form-control !tw-bg-cyan-600 !tw-text-white"
                      onClick={handleOnClick}
                    >
                      Resim Yükle
                    </button>
                  );
                }}
              </CldUploadWidget>
            </div>

            <div className="tw-w-full ">
              <ReactQuill
                theme="snow"
                value={quillValue}
                onChange={setQuillValue}
                modules={{
                  toolbar: [
                    [{ font: [] }],
                    [{ size: [] }],
                    [{ color: [] }, { background: [] }],
                    ["bold", "italic", "underline", "strike", "blockquote"],
                    [
                      { list: "ordered" },
                      { list: "bullet" },
                      { indent: "-1" },
                      { indent: "+1" },
                    ],

                    ["link"],
                    ["clean"],
                  ],
                }}
              />
            </div>

            <button
              className="button tw-self-start tw-text-white tw-w-32"
              type="sumbit"
            >
              Kaydet
            </button>
          </div>
        </form>
      </Col>
    </Row>
  );
};

export default BlogOneClient;
