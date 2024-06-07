"use client";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import setKadro from "@/app/actions/kadro/setKadro";
import delKadro from "@/app/actions/kadro/delKadro";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
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
import Image from "next/image";
import "./tablecss.css";
const KadroClient = (props) => {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [check, setCheck] = useState("true");
  const [image, setImage] = useState(null);
  const router = useRouter();
  const addBanner = async () => {
    if (image === null && name === "" && job === "") {
      await Swal.fire({
        icon: "error",
        title: "Ad, İş veya Resim Yükleyin",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    let formData = {
      name: name,
      job: job,
      teacher: check === "true" ? true : false,
      imageid: image?.public_id,
      imageurl: image?.secure_url,
    };
    const res = await setKadro(formData);
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
  const { kadro } = props;

  const data = { nodes: kadro };

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
      size: 10,
    },
    onChange: onPaginationChange,
  });
  function onPaginationChange(action, state) {}

  const totalPage = pagination?.state?.getTotalPages(data.nodes);

  const KadroDelete = async (data) => {
    const res = await delKadro(data);
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
  };
  return (
    <BootstrapRow>
      <Col xl={12} lg={12} sm={12}>
        <div className="tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-5">
          <div className="tw-flex tw-flex-col tw-gap-2">
            <div className="Form-group">
              <span>
                <input
                  type="text"
                  name="name"
                  className="tw-border tw-border-black tw-px-4 tw-py-2"
                  placeholder="Ad Soyadı"
                  onChange={(e) => setName(e.target.value)}
                />
              </span>
            </div>
            <div className="Form-group">
              <span>
                <input
                  type="text"
                  name="name"
                  className="tw-border tw-border-black tw-px-4 tw-py-2"
                  placeholder="İşi"
                  onChange={(e) => setJob(e.target.value)}
                />
              </span>
            </div>
          </div>
          <div className="tw-flex tw-flex-col tw-gap-2">
            <div className="Form-group">
              <span>
                <div className="tw-text-nowrap tw-font-bold">
                  Öğretmen Mi ?{" "}
                </div>
                <select
                  name="type"
                  id="teacher_type"
                  className="tw-border tw-border-black tw-px-4 tw-py-2"
                  onChange={(e) => setCheck(e.target.value)}
                >
                  <option value="true">Evet</option>
                  <option value="false">Hayır</option>
                </select>
              </span>
            </div>
          </div>
          <div className="tw-flex tw-flex-col tw-gap-2">
            <div className="tw-text-red-600 tw-underline tw-mb-2 tw-text-nowrap tw-font-bold">
              *Ad-İş ve Resmi Yükledikten sonra Lütfen Kaydet e Basınız...
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
                    Profil Resmi Yükle
                  </button>
                );
              }}
            </CldUploadWidget>
          </div>
          <button className="btn-box-common" onClick={addBanner}>
            Kaydet
          </button>
        </div>
      </Col>
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
                        Ad Soyad
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort sortKey="JOB">
                      <span className="tw-text-gray-600 tw-text-center">
                        İşi
                      </span>
                    </HeaderCellSort>
                    <HeaderCellSort>
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
                          #{item?.id}
                        </Cell>
                        <Cell className="hover:tw-bg-slate-100">
                          {item?.name}
                        </Cell>
                        <Cell className="hover:tw-bg-slate-100">
                          {item?.job}
                        </Cell>
                        <Cell className="hover:tw-bg-slate-100">
                          <Image
                            src={item?.imageurl}
                            alt="image"
                            width={150}
                            height={150}
                            className="tw-object-contain"
                          />
                        </Cell>
                        <Cell>
                          <button onClick={() => KadroDelete(item)}>
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
    </BootstrapRow>
  );
};

export default KadroClient;
