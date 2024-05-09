import { useNavigate } from "react-router-dom";
import { UrlProps } from "../../types/TranscriptReport.types";

export function ButtonAll(props: UrlProps) {
  const navigate = useNavigate();

  return (
    <>
      <button
        className="activity-details-button"
        onClick={() => {
          navigate(props.path , {state: props.data});
        }}
      >
        ทั้งหมด
      </button>
    </>
  );
}
