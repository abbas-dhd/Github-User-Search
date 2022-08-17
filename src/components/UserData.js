import classes from "./UserData.module.css";

const UserData = (props) => {
    const avatarImage = props.data.avatar_url;
    const userName = props.data.login;
    const displayName = props.data.name;
    const publicRepoCount = props.data.public_repos;
    const publicGistsCount = props.data.public_gists;
    const creationDate = new Date(props.data.created_at);

    return (
        <div className={classes["user-data-container"]}>
            <div className={classes["user-data-name"]}>
                <img
                    className={classes["usr-img"]}
                    src={avatarImage}
                    alt="profile pic"
                />
                <div>
                    <p>
                        <code>
                            <b>{userName}</b>
                        </code>
                    </p>
                    <p>({displayName ? displayName : "N/A"})</p>
                </div>
            </div>
            <div className={classes["other-user-data"]}>
                <span>
                    <p className={classes["values"]}>{publicRepoCount}</p>
                    <p className={classes["values-label"]}>Repos</p>
                </span>
                <span>
                    <p className={classes["values"]}>{publicGistsCount}</p>
                    <p className={classes["values-label"]}>Gists</p>
                </span>

                <span>
                    <p className={classes["values"]}>
                        {`${creationDate.getFullYear()}-${creationDate
                            .getMonth()
                            .toLocaleString("en-US", {
                                minimumIntegerDigits: 2,
                            })}-${creationDate
                            .getDate()
                            .toLocaleString("en-US", {
                                minimumIntegerDigits: 2,
                            })}`}
                    </p>
                    <p className={classes["values-label"]}>Since</p>
                </span>
            </div>
        </div>
    );
};

export default UserData;

// Avatar Image ( avatar_url )
// Username ( login )
// Name ( name )
// No. of public repos ( public_repos )
// No. of public gists ( public_gists )
// Profile created at in time format of YYYY-MM-DD. ( created_at )
