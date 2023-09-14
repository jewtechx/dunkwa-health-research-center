import React, { useState } from "react";
import AddTrip from "./modals/AddTrip";
import { Add } from "iconsax-react";
import ListTrips from "../../components/list-trips";
import { fakeTripDetails } from "./fakeTripDetails";

function Trips() {
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedData, setSelectedData] = useState();
  const [showView, setShowView] = useState(false);
  const [loading, setLoading] = useState(false);
  const [limit, setLimit] = React.useState<number>(10);
  const [skip, setSkip] = React.useState<number>(0);
  const [end, setEnd] = React.useState<number>(0);

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-background w-screen shadow-md ">
        <div className="bg-white flex px-3  items-center justify-between py-6 lg:px-28">
          <header>
            <div className="">
              <h1 className="text-3xl font-medium leading-tight tracking-tight text-gray-900">
                Trips
              </h1>
            </div>
          </header>
          <div>
            <button
              onClick={() => setShowModal(true)}
              className="text-white flex items-center  bg-primary px-4 py-2 rounded-lg "
            >
              <Add className="h-5 w-5" aria-hidden="true" />
              Add New Trip
            </button>
          </div>
        </div>

        <main className="px-2 md:px-0">
          <ListTrips
            data={fakeTripDetails}
            limit={limit}
            loading={loading}
            setLimit={setLimit}
            setSkip={setSkip}
            skip={skip}
            total={fakeTripDetails.length}
            showTop
            showPagination
          />
        </main>
      </div>
      <AddTrip onClose={handleClose} visible={showModal} />
    </>
  );
}

export default Trips;
