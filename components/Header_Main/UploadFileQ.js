import React, { useState, useRef } from "react";
import { Text, Button, Grid, Row } from "@nextui-org/react";
import { Popover } from "@nextui-org/react";
import { Modal, Input, Checkbox } from "@nextui-org/react";
import ComputerOutlinedIcon from "@mui/icons-material/ComputerOutlined";
import AddToDriveOutlinedIcon from "@mui/icons-material/AddToDriveOutlined";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { db, storage } from "../../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { ref, getDownloadURL, uploadString } from "firebase/storage";
import { getStorage } from "firebase/storage";
import { useSession } from "next-auth/react";

function UploadFileQ() {
  const { data: session } = useSession();
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectrdFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(true);

  // Want to get edited
  const uploadPost = async () => {
    if (loading) return;

    setLoading(true);

    // Create a post and add data to it.
    // get post ID  of your newlu created value
    //  upload image to firestore with post id
    // get download url and update original post with url.

    const docRef = await addDoc(collection(db, "photos",`${session.user.email}`,`${session.user.email}`), {
      mail : session.user.email,
      username: "Anurag Sharma",
      timestamp: serverTimestamp(),
    });

    const imageRef = ref(storage, `photos/${docRef.mail}/${docRef.mail}/${docRef.id}/image`);

    await uploadString(imageRef, selectedFile, "data_url").then(
      async (snapshot) => {
        const downloadURL = await getDownloadURL(imageRef);
        await updateDoc(doc(db, "photos",`${session.user.email}`,`${session.user.email}`, docRef.id), {
          image: downloadURL,
        });
      }
    );

    setLoading(false);
    setSelectrdFile(null);
    console.log("Done");
  };

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectrdFile(readerEvent.target.result);
    };
  };

  return (
    <div className="!min-w-[18rem] !max-w-xs">
      {!selectedFile && (
        <div>
          <p className="-mb-8 m-1 ml-3 text-gray-600">Upload From</p>
          <br />
          <div>
            <input
              ref={filePickerRef}
              onChange={addImageToPost}
              type="file"
              hidden
            />

            <div
              className="flex items-center m-1 text-gray-800 cursor-pointer hover:bg-gray-100 rounded-md"
              onClick={() => filePickerRef.current.click()}
            >
              <ComputerOutlinedIcon className="m-3" />
              <p>Computer</p>
            </div>
          </div>
          <div className="flex -mt-5 items-center m-1 text-gray-800 cursor-pointer hover:bg-gray-100 rounded-md">
            <AddToDriveOutlinedIcon className="m-3" />
            <p>Drive</p>
          </div>
          <div className="flex -mt-2 items-start m-1 text-gray-800 cursor-pointer hover:bg-gray-100 rounded-md">
            <DriveFolderUploadOutlinedIcon className="m-3" />
            <div>
              <p className="mr-2">
                Automatically back up photos <br />
                From your Computer
              </p>
              <p className="mr-2 text-gray-600 text-sm">
                Download Google Drive for your <br /> Mac or PC
              </p>
            </div>
          </div>
        </div>
      )}
      {selectedFile && (
        <Modal
          closeButton
          preventClose
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <Modal.Header>
            <Text id="modal-title" size={18}>
              Now Click On
              <Text b size={18}>
                Done
              </Text>
            </Text>
          </Modal.Header>
          <Modal.Header>
          <Button auto onClick={uploadPost}>
              Done
            </Button>
          </Modal.Header>
          {/* <Modal.Footer>
            <Button auto onClick={uploadPost}>
              Done K
            </Button>
          </Modal.Footer> */}
        </Modal>
      )}
    </div>
  );
}

export default UploadFileQ;
