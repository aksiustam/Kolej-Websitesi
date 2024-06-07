"use client";

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
import Swal from "sweetalert2";
import Image from "next/image";
import "./tablecss.css";
import { FaChevronDown, FaChevronUp, FaRegTrashAlt } from "react-icons/fa";
import { CldUploadWidget } from "next-cloudinary";
import { useState } from "react";
import setGalery from "@/app/actions/galeri/setGalery";
import delGalery from "@/app/actions/galeri/delGalery";
import { useRouter } from "next/navigation";
const GaleriTable = (props) => {
  const { galery } = props;
  const router = useRouter();
  const data = { nodes: galery };

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

  const [bimage, setBImage] = useState([]);
  const addGalery = async () => {
    let formData = [];
    if (bimage.length > 0) {
      const galeri = bimage.map((item) => {
        return { imageid: item.public_id, imageurl: item.secure_url };
      });
      formData = galeri;
    }
    const res = await setGalery(formData);
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

  const GaleryDelete = async (data) => {
    const res = await delGalery(data);
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
    <div>
      <div className="tw-flex tw-flex-row tw-items-center tw-justify-center tw-gap-5">
        <div className="tw-flex tw-flex-col tw-gap-2">
          <div className="tw-text-red-600 tw-underline tw-mb-2 tw-text-nowrap">
            *Resmi Yükledikten sonra Lütfen Kaydet e Basınız...
          </div>
          <CldUploadWidget
            signatureEndpoint="/api/sign-cloudinary-params"
            onSuccess={(result) => {
              setBImage((prev) => {
                const data = prev || [];
                return [...data, { ...result?.info }];
              });
            }}
            uploadPreset="dreamland_galery"
          >
            {({ open }) => {
              function handleOnClick() {
                setBImage(null);
                open();
              }

              return (
                <button
                  type="button"
                  className="form-control"
                  onClick={handleOnClick}
                >
                  Galeri Resmi Yükle
                </button>
              );
            }}
          </CldUploadWidget>
        </div>
        <button className="btn-box-common" onClick={addGalery}>
          Kaydet
        </button>
      </div>
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
                      <Cell className="hover:tw-bg-slate-100">#{item?.id}</Cell>
                      <Cell className="hover:tw-bg-slate-100">
                        <Image
                          src={item?.imageurl}
                          alt="image"
                          width={150}
                          height={90}
                          className="tw-object-contain"
                        />
                      </Cell>
                      <Cell>
                        <button onClick={() => GaleryDelete(item)}>
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
    </div>
  );
};

export default GaleriTable;
