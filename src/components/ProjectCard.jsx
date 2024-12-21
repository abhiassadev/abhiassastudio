import { Card, CardBody, CardFooter, Link } from "@nextui-org/react";

function ProjectCard(props) {
  return (
    <>
      <Link href={props.projectLink} className="w-full">
        <Card className="bg-slate-900 w-full sm:w-64">
          <CardBody className="">
            <img src={props.projectImage} className="rounded-lg" />
          </CardBody>
        </Card>
      </Link>
    </>
  );
}

export default ProjectCard;
