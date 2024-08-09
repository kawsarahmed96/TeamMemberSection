import "./Team.css";
import TeamItem from "./TeamComponents/TeamItem";
import TeamHeader from "./TeamComponents/TeamHeader";
const Team = () => {
  return (
    <>
      <div className="teamArea">
        <TeamHeader />
        <div className="teamBody">
          <TeamItem />
          <TeamItem />
          <TeamItem />
        </div>
      </div>
    </>
  );
};

export default Team;
