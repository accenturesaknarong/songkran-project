import CustomButton from "../../components/button/CustomButton";
import "./Error.style.css";
import { Modal } from "antd";
import { ExclamationCircleFilled } from "@ant-design/icons";
export default function Error({ error, setError }) {
  return (
    <Modal open={error} footer={false} closeIcon={false} centered className="er-container" width={"80%"}>
      <div className="errorpopup">
        <ExclamationCircleFilled className="warning-icon" />
        <div>
          <div className="head">Sorry, something went wrong.</div>
          <div className="second">{error.message}</div>
        </div>

        <CustomButton
          onClick={() => {
            setError(false);
            if (error?.status?.toString() === "429") {
              window.location.reload(false);
            }
          }}
        >
          Try again!
        </CustomButton>
      </div>
    </Modal>
  );
}
