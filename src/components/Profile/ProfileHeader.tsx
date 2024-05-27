type ProfileHeader = {
  children: React.ReactNode;
  first: string;
  last: string;
  email: string;
  imageSrc: string;
  profileLetter: string;
};

export default function ProfileHeader(props: ProfileHeader) {
  return (
    <>
      <div className="page1-frame10204">
        <div className="page1-frame10205">
          <div className="page1-latest-pic">
            <div className="page1-vector-bg">
              {!props.imageSrc && <>
                <p className="page1-profile-text">{props.profileLetter}</p>
              </>
              }
              {props.imageSrc && <>
                <img
                  src={props.imageSrc}
                  alt="profile-pic"
                  className="page1-profile-pic"
                />
              </>
              }
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
