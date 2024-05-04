type ButtonProps = {
  handleClick: () => void;
};

export const Tab = (url: string) => {
  window.open(url);
};

export function Button(props: ButtonProps) {
  return (
    <>
      <button className="activity-details-button" onClick={props.handleClick}>
        ทั้งหมด
      </button>
    </>
  );
}
