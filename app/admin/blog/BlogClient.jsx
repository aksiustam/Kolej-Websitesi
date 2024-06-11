"use client";

import { Col, Row as BootstrapRow } from "react-bootstrap";
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  Cell,
} from "@table-library/react-table-library/table";
import {
  useSort,
  HeaderCellSort,
  SortToggleType,
} from "@table-library/react-table-library/sort";
import { usePagination } from "@table-library/react-table-library/pagination";
import { useTheme } from "@table-library/react-table-library/theme";
import {
  DEFAULT_OPTIONS,
  getTheme,
} from "@table-library/react-table-library/material-ui";
import { FaChevronDown, FaChevronUp, FaRegTrashAlt } from "react-icons/fa";

import { CldUploadWidget } from "next-cloudinary";
import { useEffect, useState } from "react";
import setBlog from "@/app/actions/blog/setBlog";
import delBlog from "@/app/actions/blog/delBlog";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "./tablecss.css";
import "react-quill/dist/quill.snow.css";
const BlogClient = (props) => {
  const router = useRouter();

  const { blog } = props;

  const data = { nodes: blog };

  const materialTheme = getTheme(DEFAULT_OPTIONS);
  const theme = useTheme(materialTheme);

  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortIcon: {
        iconDefault: null,
        iconUp: <FaChevronUp />,
        iconDown: <FaChevronDown />,
      },
      sortToggleType: SortToggleType.AlternateWithReset,
      sortFns: {
        ID: (array) => array.sort((a, b) => b.id - a.id),
        NAME: (array) => array.sort((a, b) => a?.name?.localeCompare(b?.name)),
        JOB: (array) => array.sort((a, b) => a?.job?.localeCompare(b?.job)),
      },
    }
  );

  function onSortChange(action, state) {
    //console.log(action, state);
  }
  const pagination = usePagination(data, {
    state: {
      page: 0,
      size: 5,
    },
    onChange: onPaginationChange,
  });
  function onPaginationChange(action, state) {}

  const totalPage = pagination?.state?.getTotalPages(data.nodes);

  const [quillValue, setQuillValue] = useState("");

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm();
  const BlogDelete = async (data) => {
    Swal.fire({
      title: data.name + " Adlı Blog Silinecek!! ",
      showDenyButton: true,
      confirmButtonText: "Sil",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await delBlog(data);
        if (res === true) {
          await Swal.fire({
            icon: "success",
            title: "Başarıyla Silindi",
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
      }
    });
  };
  const [cimage, setCImage] = useState([]);
  const onSubmit = async (data) => {
    if (cimage?.length === 0) {
      await Swal.fire({
        icon: "error",
        title: "Resim Yükleyin",
        showConfirmButton: false,
        timer: 700,
      });
      return;
    }

    const formData = { ...data, quill: quillValue };

    const res = await setBlog(formData);
    if (res === true) {
      await Swal.fire({
        icon: "success",
        title: "Başarıyla Eklendi",
        showConfirmButton: false,
        timer: 1500,
      });
      setCImage([]);
    } else {
      Swal.fire({
        icon: "error",
        title: JSON.stringify(res.message),
      });
    }
    router.refresh();
  };
  useEffect(() => {
    const data = cimage.map((item) => {
      return { imageid: item.public_id, imageurl: item.secure_url };
    });
    setValue(`Image`, data);
  }, [setValue, cimage]);

  return (
    <BootstrapRow>
      <Col xl={12} lg={12} sm={12}>
        <div className="table-responsive">
          <Table data={data} sort={sort} theme={theme} pagination={pagination}>
            {(tableList) => (
              <>
                <Header>
                  <HeaderRow>
                    <HeaderCellSort sortKey="ID">
                      <span className="tw-text-sm tw-text-gray-600 tw-text-center">
                        ID (Sıra)
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort sortKey="NAME">
                      <span className="tw-text-gray-600 tw-text-center">
                        Blog Adı
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort sortKey="JOB">
                      <span className="tw-text-gray-600 tw-text-center">
                        Resim
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
                      <span className="tw-text-sm tw-text-gray-600 tw-text-center">
                        Düzenle/Sil
                      </span>
                    </HeaderCellSort>
                  </HeaderRow>
                </Header>
                <Body>
                  {tableList?.map((item) => {
                    return (
                      <Row key={item?.id}>
                        <Cell className="hover:tw-bg-slate-100">
                          #{item?.index}
                        </Cell>
                        <Cell className="hover:tw-bg-slate-100">
                          {item?.name}
                        </Cell>
                        <Cell className="hover:tw-bg-slate-100">
                          <Image
                            src={item?.images[0]?.imageurl}
                            alt="image"
                            width={150}
                            height={150}
                            className="tw-object-contain"
                          />
                        </Cell>
                        <Cell>
                          <button onClick={() => BlogDelete(item)}>
                            <FaRegTrashAlt size={26} color="red" />
                          </button>
                        </Cell>
                      </Row>
                    );
                  })}
                </Body>
              </>
            )}
          </Table>
        </div>
        <div className="col-lg-12">
          <div className="tw-flex tw-items-center tw-justify-between tw-gap-4 tw-mb-12">
            <span className="tw-font-bold">Toplam Sayfa: {totalPage}</span>
            <div className="tw-flex tw-items-center tw-justify-center tw-gap-2 tw-mr-12">
              <span className="tw-font-bold">
                Sayfa : {pagination?.state?.page + 1}
              </span>

              <button
                type="button"
                className="theme-btn-one tw-p-1 tw-text-xl tw-bg-stone-200 "
                disabled={pagination?.state?.page === 0}
                onClick={() => pagination.fns.onSetPage(0)}
              >
                {"|<"}
              </button>
              <button
                type="button"
                className="theme-btn-one tw-p-1 tw-text-xl tw-bg-stone-200 "
                disabled={pagination?.state?.page === 0}
                onClick={() =>
                  pagination.fns.onSetPage(pagination.state.page - 1)
                }
              >
                {"<"}
              </button>
              <button
                type="button"
                className="theme-btn-one tw-p-1 tw-text-xl tw-bg-stone-200 "
                disabled={pagination?.state?.page + 1 === totalPage}
                onClick={() =>
                  pagination.fns.onSetPage(pagination.state.page + 1)
                }
              >
                {">"}
              </button>
              <button
                type="button"
                className="theme-btn-one tw-p-1 tw-text-xl tw-bg-stone-200 "
                disabled={pagination?.state?.page + 1 === totalPage}
                onClick={() => pagination.fns.onSetPage(totalPage - 1)}
              >
                {">|"}
              </button>
            </div>
          </div>
        </div>
      </Col>
      <Col xl={12} lg={12} sm={12}>
        <form className="tw-w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-5 tw-mb-6">
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
    </BootstrapRow>
  );
};

export default BlogClient;
