import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

const showToast = (duration: number, status: string, message: string) => {
  if(status == "success") {
    toast.success(message, {
      autoClose: duration,
      theme: "colored",
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
    });
  } else if (status == "danger") {
    toast.error(message, {
      autoClose: duration,
      theme: "colored",
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true,
    });
  }
};

export default showToast;
