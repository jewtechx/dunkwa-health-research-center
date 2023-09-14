import { Add } from "iconsax-react";
import React, { useState } from "react";
import CreateUserModal from "../../core-ui/modals/basic";
import ListTableComponent from "../../components/list-table";
import { colPropType } from "../../core-ui/table/types";
import { fakeDriverInfo } from "./fakeDriverInfo";
import DeleteDriver from "./modals/DeleteDriver";
import AddDriver from "./modals/AddDriver";
import EditDriver from "./modals/EditDriver";

function Drivers() {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedData, setSelectedData] = useState();
  const [showView, setShowView] = useState(false);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = React.useState<number>(10);
  const [skip, setSkip] = React.useState<number>(0);
  const [end, setEnd] = React.useState<number>(0);

  // create a fake bus data that consist of vehicle number , insurance, roadworthy, model(colour), year of mode status assigned driver actions

  const cols: colPropType[] = [
    {
      title: "Driver Name",
      type: "with-image",
      imageSrc:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      rows: [{ text: { accessor: ["name"] } }],
    },
    {
      title: "Contact",
      type: "value",
      rows: [
        { text: { accessor: ["contact.email"] } },
        {
          text: { accessor: ["contact.phoneNumber"], className: "font-medium" },
        },
      ],
    },
    {
      title: "Address",
      type: "value",
      rows: [
        { text: { accessor: ["address.postbox"] } },
        {
          text: {
            accessor: ["address.digitalAddress"],
            className: "font-medium",
          },
        },
      ],
    },
    {
      title: "License Class",
      type: "value",
      rows: [{ text: { accessor: ["licenseClass"] } }],
    },
    {
      title: "Vehicle Assigned",
      type: "value",
      rows: [{ text: { accessor: ["vehicleAssigned"] } }],
    },
    {
      title: "Status",
      type: "value",
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
                Drivers
              </h1>
            </div>
          </header>
          <div>
            <button
              onClick={() => setShowModal(true)}
              className="text-white flex items-center  bg-primary px-4 py-2 rounded-lg "
            >
              <Add className="h-5 w-5" aria-hidden="true" />
              Add New Driver
            </button>
          </div>
        </div>

        <main className={"mt-5 lg:px-28 overflow-x-auto pb-16"}>
          <ListTableComponent
            refetch={""}
            setLimit={setLimit}
            loading={loading}
            limit={limit}
            data={fakeDriverInfo || []}
            total={fakeDriverInfo?.length || 0}
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
      <DeleteDriver
        showDeleteModal={showDeleteModal}
        setshowDeleteModal={setShowDeleteModal}
      />
      <AddDriver onClose={handleClose} visible={showModal} />
      <EditDriver
        showEditModal={showEditModal}
        setShowEditModal={setShowEditModal}
      />{" "}
    </>
  );
}

export default Drivers;
