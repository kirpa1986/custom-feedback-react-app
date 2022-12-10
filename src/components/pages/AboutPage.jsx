import Header from "../Header";
import Card from "../shared/Card";

function AboutPage() {
  return (
    <>
      <Header home={true} />
      <div className="container">
        <Card>
          <div className="about">
            <h1>About This Project</h1>
            <p>This is a React app to leave a feedback</p>
          </div>
        </Card>
      </div>
    </>
  );
}

export default AboutPage;
