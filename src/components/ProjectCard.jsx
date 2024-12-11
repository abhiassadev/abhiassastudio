import { Card, CardBody, CardFooter, Link } from "@nextui-org/react";

function ProjectCard(props) {
  return (
    <>
      <Link href={props.projectLink} className="w-full">
        <Card className="w-full sm:w-64">
          <CardBody className="">
            <img src={props.projectImage} className="rounded-lg" />
          </CardBody>
          <CardFooter className="absolute bottom-0 bg-white">
            <h1 className="text-2xl font-semibold text-emerald-400">
              {props.projectName}
            </h1>
          </CardFooter>
        </Card>
      </Link>
    </>
  );
}

export default ProjectCard;
