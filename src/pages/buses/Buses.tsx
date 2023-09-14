import { Add } from "iconsax-react";
import React, { useState } from "react";
import ListTableComponent from "../../components/list-table";
import { colPropType } from "../../core-ui/table/types";
import AddBus from "./modals/AddBus";
import DeleteBus from "./modals/DeleteBus";
import EditBus from "./modals/EditBus";
import { fakeBusData } from "./fakeBusDetails";

function Buses() {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = React.useState<number>(10);
  const [skip, setSkip] = React.useState<number>(0);
  const [end, setEnd] = React.useState<number>(0);

  const cols: colPropType[] = [
    {
      title: "Vehicle Number",
      align : "center",
      type: "value",
      rows: [{ text: { accessor: ["vehicleNumber"] } }],
    },
    {
      title: "Insurance",
      align : "center",
      type: "value",
      rows: [
        { text: { accessor: ["insuranceFrom"] } },
        { text: { accessor: ["insuranceTo"], className: "text-gray-400" } },
      ],
    },
    {
      title: "Roadworthy",
      align : "center",
      type: "value",
      rows: [{ text: { accessor: ["roadworthy"] } }],
    },
    {
      title: "Model",
      subTitle: "(Color)",
      align : "center",
      type: "value",
      rows: [
        { text: { accessor: ["model"] } },
        { text: { accessor: ["color"], className: "text-gray-400" } },
      ],
    },
    {
      title: "Year of Make",
      align : "center",
      subTitle: "(Seats)",
      type: "value",
      rows: [
        { text: { accessor: ["yearOfMake"] } },
        { text: { accessor: ["numberOfSeats"], className: "text-gray-400" } },
      ],
    },
    {
      title: "Status",
      type: "value",
      align : "center",
      rows: [
        {
          status: {
            accessor: ["status"],
            statusItems: [
              {
                label: "Inactive",
                value: "Inactive",
                className: "bg-red-100 text-red-800 px-3 font-medium py-1",
              },
              {
                label: "Active",
                value: "Active",
                className: "bg-green-100 text-green-800 px-3 font-medium py-1",
              },
            ],
          },
        },
      ],
    },
    {
      title: "Assigned Driver",
      align : "center",
      type: "with-image",
      imageSrc: fakeBusData[0].driverProfile,
      rows: [{ text: { accessor: ["assignedDriver"] } }],
    },
    {
      title: "Actions",
      type: "actions",
      align: "right",
      rows: [
        {
          action: {
            type: "button",
            title: "delete",
            svg: "delete",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onClick: function () {
              setShowDeleteModal(true);
            },
          },
        },
        {
          action: {
            type: "button",
            title: "edit",
            svg: "edit",
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onClick: function () {
              setShowEditModal(true);
            },
          },
        },
      ],
    },
  ];

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-background w-screen shadow-md ">
        <div className="bg-white flex px-3  items-center justify-between py-6 lg:px-28">
          <header>
            <div className="">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
                Buses
              </h1>
            </div>
          </header>
          <div>
            <button
              onClick={() => setShowModal(true)}
              className="text-white flex items-center  bg-primary px-4 py-2 rounded-lg "
            >
              <Add className="h-5 w-5" aria-hidden="true" />
              Add New Bus
            </button>
          </div>
        </div>

        <main className={"mt-5 lg:px-28 overflow-x-auto pb-16"}>
          <ListTableComponent
            refetch={""}
            setLimit={setLimit}
            loading={loading}
            limit={limit}
            data={fakeBusData || []}
            total={fakeBusData?.length || 0}
            skip={skip}
            setSkip={setSkip}
            end={end}
            setEnd={setEnd}
            cols={cols}
            showPagination
            showTop
          />
        </main>
      </div>
      <DeleteBus
        showDeleteModal={showDeleteModal}
        setshowDeleteModal={setShowDeleteModal}
      />
      <AddBus onClose={handleClose} visible={showModal} />
      <EditBus
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
      />
    </>
  );
}

export default Buses;
