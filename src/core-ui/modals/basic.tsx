import React from "react";
// import Button from "./ Button";
// import Axios from "axios";
// import toast from "react-hot-toast";
// import auth from "../services/cookie-config";
import { XMarkIcon} from "@heroicons/react/20/solid";

function CreateUserModal({ visible, onClose }: any) {
  //   const [firstName, setFirstname] = useState("");
  //   const [lastName, setLastName] = useState("");
  //   const [programme, setProgramme] = useState("");
  //   const [residence, setResidence] = useState("");
  //   const [error, setError] = useState("");
  //   //   const [submitted, setSubmitted] = useState(false);
  //   const [loading, setLoading] = useState(false);

  if (!visible) return null;

  // const close = () => {
  //   onClose();
  // };

  // const handleFNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   setFirstname(value);
  // };

  // const handleLNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   setLastName(value);
  // };

  // const handleProChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   setProgramme(value);
  // };

  // const handleResChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;
  //   setResidence(value);
  // };

  // const handleSubmition = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   try {
  //     const token = auth.getCipher();
  //     const response = await Axios.post(
  //       "https://dcit-205-server.onrender.com/api/v1/create-student",
  //       {
  //         fName: firstName,
  //         lName: lastName,
  //         residence: residence,
  //         programme: programme,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     if (response) {
  //       toast.success("Student created Successfully");
  //       setLoading(false);
  //       setFirstname("");
  //       setLastName("");
  //       setProgramme("");
  //       setResidence("");
  //       close();
  //     }
  //   } catch (err: any) {
  //     setLoading(false);
  //     setError(error);
  //     toast.error(error);
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <div className="fixed  inset-0 bg-dark bg-opacity-50  flex justify-center items-center">
        <div className="bg-white h-[400px] w-[700px] relative rounded-lg">
          <XMarkIcon
            onClick={onClose}
            className="absolute top-4 h-5 w-5 right-4 cursor-pointer"
          />
        </div>
      </div>
    </>
  );
}

export default CreateUserModal;
