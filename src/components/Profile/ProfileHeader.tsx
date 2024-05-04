type ProfileHeader = {
  children: React.ReactNode;
  first: string;
  last: string;
  email: string;
};

export default function ProfileHeader(props: ProfileHeader) {
  return (
    <>
      <div className="page1-frame10204">
        <div className="page1-frame10205">
          <div className="page1-latest-pic">
            <div className="page1-vector-bg">
              <img
                src="https://tr.rbxcdn.com/ef9bb7b81b5c5046686c4bbcf9a1e189/420/420/Hat/Png"
                alt="profile-pic"
                className="page1-profile-pic"
              />
            </div>
          </div>
          <div className="page1-name">
            <span className="page1-text002">
              <span>
                {props.first} {props.last}
              </span>
            </span>
            <span className="page1-text004">
              <span>{props.email}</span>
            </span>
          </div>
        </div>
        {props.children}
      </div>
    </>
  );
}
